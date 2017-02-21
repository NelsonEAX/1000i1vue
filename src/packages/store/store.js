/**
 * Created by NelsonEAX on 14.02.2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        app: {
            server: {
                root: 'http://1000i1api:88',//'http://api.1000i1.ru',
                headers:{
                    content_type: 'application/json',
                    authorization: 'Bearer ' + 'Vue.auth.getToken()',
                }

            },
            auth: {
                client_id: 2,
                grant_type: 'password',
                client_secret: 'zUxRqZVzGz4erCWkj6PObTTw5ugmHMhRdtvKWSiC',//null,
                token: null,
                expiration: null,
            }
        },
        user: true
    },
    getters,
    mutations,
    actions
});