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
            storage:{
                default: '/static/img/users/noname.jpg',
                defaultCategory: '/static/img/users/noname.jpg',
                defaultProduct: '/static/img/users/noname.jpg',
                defaultUser: '/static/img/users/noname.jpg',
                image: '/api/image/',
                user: '/static/img/users/',
            },
            message: {
                loginTrue: '',
                loginFalse: 'Такой пользователь не найден',
                registerTrue: 'Вы успешно зарегистрированы на нашем портале и можете войти в систему.',
                registerFalse: 'Данный электронный адрес уже занят',
                askConfirmEmail: 'Вам на почту отправленно письмо для подтверждения электронного адреса',
            }
        },
    },
    getters,
    mutations,
    actions,
    modules: {
        auth: moduleAuth,
        validate: moduleValidate,
        user: moduleUser,
    }
});