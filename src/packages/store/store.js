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
        user: true
    },
    getters,
    mutations,
    actions
});