/**
 * Created by NelsonEAX on 26.02.2017.
 */

export default {
    state: {
        login: null,
        name: null,
        surname: null,
        patronymic: null,
        phone: null,
        email: null,
        photo: null,
        birthday: null,
        rule: {
            eax: null,
            admin: null,
            confirmed: null,
        }
    },
    getters: {
        
        
        /** User Role */
        isEAX(state){
            if(state.rule.eax)
                return true;
            else
                return false;
        },
        isAdmin(state){
            if(state.rule.admin)
                return true;
            else
                return false;
        },
        isConfirmed(state){
            if(state.rule.confirmed)
                return true;
            else
                return false;
        },
       /* isAuth(state){
            if(state.token)
                return true;
            else
                return false;
        },
        getToken(state){
            if( !state.token || !state.expiration )
                return null;

            if(Date.now() > parseInt(state.expiration)){
                return null;
            }else{
                return token;
            }
        },
        getAuthToken(state){
            return state.token;
        },*/
        /** User Properties */
        getUserEmail(state){
            return state.email;
        },
        getUserSurnameName(state){
            if( state.surname && state.name ){
                //Николаев Николай
                return state.surname + " " + state.name;
            }
            return "Неизвестный"
        },
        getUserPhoto(state){
            if(state.photo){
                return '/static/img/users/' + state.photo;
            }
            return '/static/img/users/noname.jpg';
        },



        getUserRole(state){
            if(state.rule.eax){
                return "Владыка";
            }
            if(state.rule.admin){
                return "Администратор";
            }
            return "Новичок";
        }
    },
    mutations:{
        setUserInfo(state, user){
            state.login             = user.login            ? user.login : null;
            state.name              = user.name             ? user.name : null;
            state.surname           = user.surname          ? user.surname : null;
            state.patronymic        = user.patronymic       ? user.patronymic : null;
            state.phone             = user.phone            ? user.phone : null;
            state.email             = user.email            ? user.email : null;
            state.photo             = user.photo            ? user.photo : null;
            state.birthday          = user.birthday         ? user.birthday : null;
            
            state.rule.eax          = user.rule.eax         ? user.rule.eax : null;
            state.rule.admin        = user.rule.admin       ? user.rule.admin : null;
            state.rule.confirmed    = user.rule.confirmed   ? user.rule.confirmed : null;
        },
        unsetUserInfo(state){
            state.login             = null;
            state.name              = null;
            state.surname           = null;
            state.patronymic        = null;
            state.phone             = null;
            state.email             = null;
            state.photo             = null;
            state.birthday          = null;
            
            state.rule.eax          = null;
            state.rule.admin        = null;
            state.rule.confirmed    = null;
        },
    },
    actions: {
        setUserInfo(context, user){
            context.commit('setUserInfo', user);
        },
        unsetUserInfo(context){
            context.commit('unsetUserInfo');
        },
    }
};