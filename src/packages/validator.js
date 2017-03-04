import Vue from 'vue'
import VeeValidate from 'vee-validate';
import VeeDictionary from './locale/validate.js';
import { store } from './store/store.js';

Vue.use(VeeValidate,{
    locale: 'ru',
    dictionary: {
        ru: {
            messages: VeeDictionary,
            attributes: {
                email: store.getters.getPlaceholderEmail,
                phone: store.getters.getPlaceholderPhone,
                password: store.getters.getPlaceholderPassword,
                confirm: store.getters.getPlaceholderPasswordConfirm,
            }
        }
    }
})


