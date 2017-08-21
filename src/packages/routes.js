import Vue from 'vue'
import VueRouter from 'vue-router'

/** ALL **/
import Index from './../components/Index.vue'

/** AUTH **/
import Login from './../components/auth/Login.vue'
import Registr from './../components/auth/Register.vue'
import Confirm from './../components/auth/Confirm.vue'

/** DASHBOARD **/
import Shell from './../components/my/Shell.vue'
import Dashboard from './../components/my/Dashboard.vue'
import Profile from './../components/my/Profile.vue'
import Products from './../components/my/products/Products.vue'
import Orders from './../components/my/orders/Orders.vue'


import Authorized from './../components/auth/Authorized.vue'


/** 404 **/
import Page404 from './../components/Page404.vue'

/** DEV **/
import Feed from './../components/my/Feed.vue'

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

    //console.log(rule);//###TODO: delete
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
        {path: "/login",                    component: Login,   meta: { rule: { forAuth: false } } },/*getPageRule([0,-1,-1,-1])} },*/
        {path: "/register",                 component: Registr, meta: { rule: { forAuth: false } } },/*getPageRule([0,-1,-1,-1])} },*/
        {path: '/confirm/:token',           component: Confirm},

        /** DASHBOARD **/
        {path: '/my',                       component: Shell,    meta: { rule: { forAuth: true } }, /*getPageRule([1,-1,-1,-1]) },*/
            children: [
                {
                    path: 'dashboard',
                    component: Dashboard,
                    name: 'Главная',
                    alias: '',
                    meta: {
                        rule: {
                            forAuth: true,
                            forConfirmed: true,
                            forAdmin: true,
                            forManager: true,
                            forDealer: true,
                            forAgent: true,
                            forFranchise: true,
                            forRelated: true,
                        },//getPageRule([1,-1,-1,-1]),
                        icon: 'fa fa-tachometer',
                        description: 'Описание страницы главная'
                    }
                },
                {
                    path: 'profile',
                    component: Profile,
                    name: 'Профиль',
                    meta: {
                        rule: {
                            forAuth: true,
                            forConfirmed: true,
                            forAdmin: true,
                            forManager: true,
                            forDealer: true,
                            forAgent: true,
                            forFranchise: true,
                            forRelated: true,
                        },
                        icon: 'fa fa-user',
                        description: 'Описание страницы профиль'
                    }
                },
                {
                    path: 'product',
                    component: Products,
                    name: 'Продукция',
                    meta: {
                        rule: {
                            forAuth: true,
                            forConfirmed: true,
                            forAdmin: true,
                            forManager: true,
                            forDealer: true,
                            forAgent: true,
                            forFranchise: true,
                            forRelated: true,
                        },
                        icon: 'fa fa-th',
                        description: 'Товары для заказа'
                    }
                },
                {
                    path: 'orders',
                    component: Orders,
                    name: 'Заказы',
                    meta: {
                        rule: {
                            forAuth: true,
                            forConfirmed: true,
                            forAdmin: true,
                            forManager: true,
                            forDealer: true,
                        },
                        icon: 'fa fa-th',
                        description: 'Товары для заказа'
                    }
                },





                {
                   path: 'feed',
                   component: Feed,
                   name: 'Feed',
                   meta: {
                       rule: {
                           forAuth: true,
                           forConfirmed: true,
                           forAdmin: true,
                           forManager: true,
                           forDealer: true,
                           forAgent: true,
                           forFranchise: true,
                           forRelated: true,
                       },
                       icon: 'fa fa-th',
                       description: 'Товары для feed'
                   }
                },/*,
                {path: '', component: Dashboard},
                {path: '', component: Dashboard}*/

                /** Authorized **/
                {
                   path: 'authorized',
                   component: Authorized,
                   name: 'Authorized',
                },
                /** 404 **/
                {
                   path: '*',
                   component: Page404,
                   name: '',
                }
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
