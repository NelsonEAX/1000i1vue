import Vue from 'vue'
import App from './components/App.vue'
import { store } from './packages/store/store.js';
import { router } from './routes.js';

import VueResource from 'vue-resource'
//import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
//Vue.use(Auth)

Vue.http.options.root = store.getters.getRoot;

//Получаем с прод-сервера backend-server для текущего стенда / используем значения по умолчанию(значения prod'а)
Vue.http.get("api/setting/vue/server")
    .then(response => {
        console.log(response);//###TODO: delete
        console.log(response.body.server);//###TODO: delete
        if(response.body.server){
            store.dispatch('setNewRoot', response.body.server);
            Vue.http.options.root = store.getters.getRoot;
            ///***old//Vue.http.options.root = response.body.server;
            //Получаем с backend'а текущий client_secret
            Vue.http.get("api/setting/vue/secret")
                .then(response => {
                    console.log(response); //###TODO: delete
                    console.log(response.body.secret);//###TODO: delete
                    if(response.body.secret[0]){
                        store.dispatch('setClientSecret', response.body.secret[0]);
                    }else {
                        console.error('Ошибка: Не смогли получить секретный ключ ', response);
                    }
                });
        }else{
            console.error('Ошибка: Не смогли получить адресс сервера ', response);
        }
    });
//Подгружаем токен
store.dispatch('checkToken');
Vue.http.headers.common['Authorization'] = store.getters.getHeaderAuthorization;
Vue.http.headers.common['Content-Type'] = store.getters.getHeaderContentType;

router.beforeEach((to, from, next) => {
    console.log(to.fullPath); //###TODO: delete
    //console.log(to); //###TODO: delete
    //console.log(from); //###TODO: delete
    //console.log(next); //###TODO: delete

    if (to.matched.some(record => record.meta.forAuth === true)) {
        // этот путь требует авторизации, проверяем залогинен ли
        // пользователь, и если нет, перенаправляем на страницу логина
        if (!store.getters.isAuth) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.forAuth === false )) {
        // этот путь требует авторизации, проверяем залогинен ли
        // пользователь, и если нет, перенаправляем на страницу логина
        if (store.getters.isAuth) {
            next({
                path: '/dash/authorized',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // всегда так или иначе нужно вызвать next()!
    }
})

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
});
