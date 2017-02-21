import Vue from 'vue'
import App from './components/App.vue'
import { store } from './packages/store/store.js';
import { router } from './routes.js';

import VueResource from 'vue-resource'
import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
Vue.use(Auth)

Vue.http.options.root = store.getters.getRoot;
Vue.http.headers.common['Content-Type'] = store.getters.getHeaderContentType;
Vue.http.headers.common['Authorization'] = store.getters.getHeaderAuthorization;

/*Vue.http.get("api/setting/vue/server")
    .then(response => {
        console.log(response);
        console.log(response.body.server);        
    });*/

Vue.http.get("api/setting/vue/secret")
    .then(response => {
        console.log(response);
        console.log(response.body.server);
    });

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
