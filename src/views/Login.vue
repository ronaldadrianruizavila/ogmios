<template>
    <div>
        <auth-form
                action="login"
                @process="login($event)"
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
    import AuthForm from "../components/forms/Auth";
    import AppSnackBar from "../components/SnackBar";
    import {db} from '../main';

    export default {
        name: "Login",
        components: {AuthForm, AppSnackBar},
        data:()=>({
            snackBar:false,
            message:'',
            timeout:5000
        }),
        methods:{
            async login (userLogin){
                let UserLogin = await this.$store.dispatch('firebaseLogin',userLogin).catch(error=>{
                    this.message = error.message.substr(0,60);
                    this.snackBar = true;
                    setTimeout(()=>{
                        this.snackBar = false;
                    },this.timeout)
                });
                if (UserLogin){
                    db.collection('users').doc(UserLogin.user.uid).onSnapshot(snapshot=>{
                        this.$store.commit('setRole',snapshot.data().role);

                    });
                    this.$store.commit('setUser',{uid:UserLogin.user.uid,email:UserLogin.user.email});
                    this.$router.push('/')
                }else {
                    return;
                }
            }
        }
    }
</script>

<style scoped>

</style>