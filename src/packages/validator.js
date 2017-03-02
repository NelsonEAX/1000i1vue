import Vue from 'vue'
import VeeValidate from 'vee-validate';
import VeeDictionary from './locale/validate.js';

Vue.use(VeeValidate,{
    locale: 'ru',
    dictionary: {
        ru: {
            messages: VeeDictionary
        }
    }
})

// Vue.use(VeeValidate, {
//     locale: 'ru',
//     dictionary: {
//         ru: {
//             messages: VeeDictionary
//         }
//     }
// })


//export const validator = new VeeValidate();

