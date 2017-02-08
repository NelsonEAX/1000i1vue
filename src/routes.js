import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/auth/Login.vue'
import Registr from './components/auth/Register.vue'
import Confirm from './components/auth/Confirm.vue'
import Feed from './components/Feed.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        {
            path: "/login",
            component: Login,
            meta: {
                forGuest: true
            }
        },
        {
            path: "/register",
            component: Registr,
            meta: {
                forGuest: true
            }
        },
        {
            path: '/confirm/:token',
            component: Confirm,
            meta: {
                forGuest: true
            }
        },
        {
            path: "/feed",
            component: Feed,
            meta: {
                forAuth: true
            }
        }
    ],
    linkActiveClass: 'active',
    mode: 'history'
})

export default router
