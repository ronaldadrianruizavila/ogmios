import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Home",
            component: () =>
                import(/* webpackChunkName: "home" */ "./views/Home.vue")
        },
        {
            path: "/register",
            name: "Register",
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/Register.vue"),
            meta: {Auth: false, title: 'Registro'}
        }
    ]
});
