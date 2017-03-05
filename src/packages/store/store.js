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
import moduleValidate from './modules/validate';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        app: {
            server: {
                root: 'http://api.1000i1.ru',
                headers:{
                    content_type: 'application/json',
                    authorization: '',
                }
            },
            message: {
                loginTrue: '',
                loginFalse: 'Такой пользователь не найден',
                registerTrue: 'Вы успешно зарегистрированы на нашем портале и можете войти в систему.',
                registerFalse: 'Данный электронный адрес уже занят',
                askConfirmEmail: 'Вам на почту отправленно письмо для подтверждения электронного адреса',
            }
        },
        user: true
    },
    getters,
    mutations,
    actions,
    modules: {
        auth: moduleAuth,
        validate: moduleValidate
    }
});