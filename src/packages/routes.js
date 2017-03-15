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

/** Возвращает объект с правами доступа:
 * -1 - не использовать
 *  0 - только для false
 *  1 - только для true
 * @param args
 * @returns {Object}
 */
function getPageRule(args){    
    var rule = new Object();
    if( args[0] > -1 ){ rule.forAuth        = args[0] ? true : false; }
    if( args[1] > -1 ){ rule.forEAX         = args[1] ? true : false; }
    if( args[2] > -1 ){ rule.forAdmin       = args[2] ? true : false; }
    if( args[3] > -1 ){ rule.forConfirmed   = args[3] ? true : false; }

    console.log(rule);
    return rule;
};

export const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        /** ALL **/
        {path: "/index.html",  alias:"/",   component: Index},
        {path: "/main",                     component: Index},

        /** AUTH **/
        {path: "/login",                    component: Login,   meta: getPageRule([0,-1,-1,-1])},
        {path: "/register",                 component: Registr, meta: getPageRule([0,-1,-1,-1])},
        {path: '/confirm/:token',           component: Confirm},

        /** DASHBOARD **/
        {path: '/dash',                     component: Dash,    meta: getPageRule([1,-1,-1,-1]),
            children: [
                {path: '', component: Dashboard,    meta: getPageRule([1,-1,-1,-1])},
                //{path: 'profile', component: Profile},
                {path: 'feed', component: Feed,    meta: getPageRule([1,1,1,1])},/*,
                {path: '', component: Dashboard},
                {path: '', component: Dashboard}*/

                /** Authorized **/
                {path: 'authorized', component: Authorized},
                /** 404 **/
                {path: '*', component: Page404}
            ],
            // beforeEnter: (to, from, next) => {
            //     console.log('beforeEnter ',to); //###TODO: delete
            //     console.log('beforeEnter ',from); //###TODO: delete
            //     console.log('beforeEnter ',next); //###TODO: delete
            // }
        
        },



        /** DEV **/
        {path: "/feed",                     component: Feed},

        /** 404 **/
        {path: '*',                         component: Page404, meta: {description: '404 Error Page'}}
    ]
});

