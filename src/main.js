import Vue from 'vue'
import App from './components/App.vue'
import { store } from './packages/store/store.js';
import { router } from './routes.js';

import VueResource from 'vue-resource'
import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
Vue.use(Auth)

Vue.http.options.root = 'http://1000i1api'
Vue.http.headers.common['Content-Type'] = 'application/json'
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()


/*router.beforeEach(
    (to, from, next) => {
        if(to.matched.some(record => record.meta.isDash)){
            if(Vue.auth.isAuthenticated()){
                next({
                    path: '/feed'
                })
            } else next()
        } else if(to.matched.some(record => record.meta.isDash)){
            if(!Vue.auth.isAuthenticated()){
                next({
                    path: '/login'
                })
            } else next()
        } else next()
    }
);*/

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
});
