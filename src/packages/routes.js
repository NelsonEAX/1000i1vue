import Vue from 'vue'
import VueRouter from 'vue-router'

/** ALL **/
import Index from './../components/Index.vue'

/** AUTH **/
import Login from './../components/auth/Login.vue'
import Registr from './../components/auth/Register.vue'
import Confirm from './../components/auth/Confirm.vue'

/** DASHBOARD **/
import Dash from './../components/Dash.vue'
import Dashboard from './../components/Feed.vue'
import Authorized from './../components/auth/Authorized.vue'

 
/** 404 **/
import Page404 from './../components/Page404.vue'

/** DEV **/
import Feed from './../components/Feed.vue'

Vue.use(VueRouter)


export const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        /** ALL **/
        {path: "/index.html",  alias:"/",   component: Index},
        {path: "/main",                     component: Index},

        /** AUTH **/
        {path: "/login",                    component: Login,   meta: {forAuth: false}},
        {path: "/register",                 component: Registr, meta: {forAuth: false}},
        {path: '/confirm/:token',           component: Confirm},

        /** DASHBOARD **/
        {path: '/dash',                     component: Dash,    meta: {forAuth: true},
            children: [
                {path: '', component: Dashboard},
                //{path: 'profile', component: Profile},
                {path: 'feed', component: Feed},/*,
                {path: '', component: Dashboard},
                {path: '', component: Dashboard}*/

                /** Authorized **/
                {path: 'authorized', component: Authorized},
                /** 404 **/
                {path: '*', component: Page404}
            ]
        
        },



        /** DEV **/
        {path: "/feed",                     component: Feed},

        /** 404 **/
        {path: '*',                         component: Page404, meta: {description: '404 Error Page'}}
    ]
});

