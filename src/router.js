import Vue from "vue";
import Router from "vue-router";
import store from './store';

Vue.use(Router);

const beforeEnter = (to,from,next)=>{
    if(store.state.authService.logged){
        next({path:'/'})
    } else{
        next();
    }
};

const beforeAdmin = (to,from,next)=>{
    if(store.state.authService.logged && store.state.authService.role === 'admin'){
        console.log('Si es Admin');
        next();
    } else{
        next({path:'/'})
        console.log('No es Admin');
    }
};

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
                import(/* webpackChunkName: "register" */ "./views/Register.vue"),
            meta: {Auth: false, title: 'Registro'},
            beforeEnter:(to,from,next)=>beforeEnter(to,from,next)
        },
        {
            path: "/login",
            name: "Login",
            component: () =>
                import(/* webpackChunkName: "login" */ "./views/Login.vue"),
            meta: {Auth: false, title: 'Login'},
            beforeEnter:(to,from,next)=>beforeEnter(to,from,next)
        },
        {
            path: "/admin",
            name: "Admin",
            component: () =>
                import(/* webpackChunkName: "login" */ "./views/administration/AdminHome.vue"),
            meta: {Auth: true, title: 'Login',role:'admin'},
            beforeEnter:(to,from,next)=>beforeAdmin(to,from,next),
            children:[
                {
                    name:'Users',
                    path:'users',
                    component:() =>
                        import(/* webpackChunkName: "login" */ "./views/administration/AdminUsers.vue"),
                    meta: {Auth: true, title: 'Login',role:'admin'},
                }
            ]
        }
    ]
});
