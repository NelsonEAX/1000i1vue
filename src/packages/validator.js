import Vue from 'vue'
import VeeValidate from 'vee-validate';
import VeeDictionary from './locale/validate.js';
import { store } from './store/store.js';

export const validator = Vue.use(VeeValidate,{
    errorBagName: 'errors',
    fieldsBagName: 'fields',
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
    },
    enableAutoClasses: false,
    classNames: {
        touched: 'touched', // the control has been blurred
        untouched: 'untouched', // the control hasn't been blurred
        valid: 'valid', // model is valid
        invalid: 'invalid', // model is invalid
        pristine: 'pristine', // control has not been interacted with
        dirty: 'dirty' // control has been interacted with
    },
    events: 'input|blur',
    inject: true
})


