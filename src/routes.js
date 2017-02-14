import Vue from 'vue'
import VueRouter from 'vue-router'

/** ALL **/
import Index from './components/Index.vue'

/** AUTH **/
import Login from './components/auth/Login.vue'
import Registr from './components/auth/Register.vue'
import Confirm from './components/auth/Confirm.vue'

/** DASHBOARD **/
import Dash from './components/Dash.vue'
import Dashboard from './components/Feed.vue'

 
/** 404 **/
import Page404 from './components/Page404.vue'

/** DEV **/
import Feed from './components/Feed.vue'

Vue.use(VueRouter)


export const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        /** ALL **/
        {path: "/index.html",  alias:"/",   component: Index},
        {path: "/main",                     component: Index},

        /** AUTH **/
        {path: "/login",                    component: Login},
        {path: "/register",                 component: Registr},
        {path: '/confirm/:token',           component: Confirm},

        /** DASHBOARD **/
        {path: '/dash',                     component: Dash,
            auth: true,
            children: [
                {path: '', component: Dashboard},
                //{path: 'profile', component: Profile},
                {path: 'feed', component: Feed}/*,
                {path: '', component: Dashboard},
                {path: '', component: Dashboard}*/
            ]
        
        },



        /** DEV **/
        {path: "/feed",                     component: Feed},

        /** 404 **/
        {path: '*',                         component: Page404}
    ]
});

