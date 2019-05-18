import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import parallex from '../components/parallex'
import Login from '../components/login/Login'
import signup from "../components/login/signup";
import forum from "../components/forum/forum";
import Logout from "../components/login/Logout";
import read from "../components/forum/read"
import create from "../components/forum/create";
import createCategory from "../components/category/createCategory";

const routes = [
    { path: '/', component: parallex},
    { path: '/login', component: Login },
    { path: '/logout', component: Logout},
    { path: '/signup', component: signup },
    { path: '/category', component: createCategory},
    { path: '/forum', component: forum , name:'forum'},
    { path: '/ask', component: create},
    { path: '/question/:slug', component: read, name:'read'}
]

const router = new VueRouter({
    routes,
    hashbang : false,
    mode : 'history'
})

export default router