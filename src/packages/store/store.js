/**
 * Created by NelsonEAX on 14.02.2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import moduleAuth from './modules/auth';
import moduleUser from './modules/user';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        app: {
            server: {
                root: 'http://1000i1api:88',//'http://api.1000i1.ru',
                headers:{
                    content_type: 'application/json',
                    authorization: '',
                }
            }
        },
        user: true
    },
    getters,
    mutations,
    actions,
    modules: {
        auth: moduleAuth
    }
});