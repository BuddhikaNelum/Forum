import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login'
import signup from "../components/login/signup";
import forum from "../components/forum/forum";
import Logout from "../components/login/Logout";

const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout},
    { path: '/signup', component: signup },
    { path: '/forum', component: forum , name:'forum'},
]

const router = new VueRouter({
    routes,
    hashbang : false,
    mode : 'history'
})

export default router