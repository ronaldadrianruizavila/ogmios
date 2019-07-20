<template>
    <div>
        <auth-form
        action="register"
        @progress="register($event)"
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
    export default {
        name: "Register",
        components: {AuthForm, AppSnackBar},
        data:()=>({
            snackBar:false,
            message:'',
            timeout:5000
        })
    }
</script>

<style scoped>

</style>