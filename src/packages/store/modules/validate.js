/**
 * Created by NelsonEAX on 02.03.2017.
 */

export default {
    state: {
        rule: {
            email: 'required|email',
            password: 'required|alpha_num|min:8',
            passsword_confirm: 'required|alpha_num|min:8|confirmed:password',
        },
        placeholder: {
            email: 'Электронный адрес',
            phone: 'Телефон',
            password: 'Пароль',
            passsword_confirm: 'Потдверждение пароля',
        }
    },
    getters: {
        /** RULE **/
        getRuleEmail(state){
            return state.rule.email;
        },
        getRulePassword(state){
            return state.rule.password;
        },
        getRulePasswordConfirm(state){
            return state.rule.passsword_confirm;
        },

        /** CLASSES **/
        getClassValid: state => ( param1, param2 ) => {
            return {
                'form-group': true,
                'has-feedback': true,
                'has-success': param1,
                'has-error': param2
            }
        },

        /** PLACEHOLDER **/
        getPlaceholderEmail(state){
            return state.placeholder.email;
        },
        getPlaceholderPhone(state){
            return state.placeholder.email;
        },
        getPlaceholderPassword(state){
            return state.placeholder.password;
        },
        getPlaceholderPasswordConfirm(state){
            return state.placeholder.passsword_confirm;
        },
    },
    mutations:{
    },
    actions: {
    }
};