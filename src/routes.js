import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/Index.vue'
import Login from './components/auth/Login.vue'
import Registr from './components/auth/Register.vue'
import Confirm from './components/auth/Confirm.vue'
import Feed from './components/Feed.vue'

Vue.use(VueRouter)


export const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        /** ALL **/
        {path: "/index.html", alias: "/",   component: Index,   meta: {isDash: true}},
        {path: "/main",                     component: Login,   meta: {isDash: false}},

        /** AUTH **/
        {path: "/login",                    component: Login,   meta: {isDash: true}},
        {path: "/register",                 component: Registr, meta: {isDash: true}},
        {path: '/confirm/:token',           component: Confirm, meta: {isDash: true}},

        /** DASHBOARD **/




        /** DEV **/
        {path: "/feed",                     component: Feed,    meta: {isDash: true}}
    ]
});

