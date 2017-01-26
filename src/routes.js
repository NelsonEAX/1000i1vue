import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/auth/Login.vue'
import Registr from './components/auth/Register.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Registr
        }
    ]
})

export default router