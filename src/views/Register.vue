<template>
    <div>
        <auth-form
        action="register"
        @process="register($event)"
        ></auth-form>
    <app-snack-bar
        v-if="snackBar"
        :snack-bar="snackBar"
        :text="message"
        :timeout="timeout"
    ></app-snack-bar>
    </div>
</template>

<script>
    import AppSnackBar from "../components/SnackBar";
    import AuthForm from "../components/forms/Auth";
    import {db} from '../main';

    export default {
        name: "Register",
        components: {AuthForm, AppSnackBar},
        data:()=>({
            snackBar:false,
            message:'',
            timeout:5000
        }),
        methods:{
            async register(userNew){
                const userRegister = await this.$store.dispatch('firebaseRegister',userNew).catch(error=>{
                    this.message = error.message.substr(0,60);
                    this.snackBar = true;
                    setTimeout(()=>{
                        this.snackBar = false;
                    },this.timeout)
                });

                const data = {
                    uid:userRegister.user.uid,
                    email:userNew.email,
                    role:'customer'
                };

                await db.collection('users').doc(userRegister.user.uid).set(data);
                this.$store.commit('setRole',data.role);
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>