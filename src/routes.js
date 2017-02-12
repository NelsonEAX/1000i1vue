import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/auth/Login.vue'
import Registr from './components/auth/Register.vue'
import Confirm from './components/auth/Confirm.vue'
import Feed from './components/Feed.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        /** AUTH **/
        {path: "/login",              component: Login, meta: {forGuest: true}},
        {path: "/register",           component: Registr, meta: {forGuest: true}},
        {path: '/confirm/:token',     component: Confirm, meta: {forGuest: true}},

        /** DASHBOARD **/




        /** DEV **/
        {path: "/feed",               component: Feed,meta: {forAuth: true}}
    ]
})

export default router
