/**
 * Created by NelsonEAX on 26.02.2017.
 */

export default {
    state: {
        login: null,
        name: null,
        lastname: null,
        middlename: null,
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
            return state.rule.eax ? true : false;
        },
        isAdmin(state){
            return state.rule.admin ? true : false;
        },
        isConfirmed(state){
            return state.rule.confirmed ? true : false;
        },
        isManager(state){
            return state.rule.manager ? true : false;
        },
        isDealer(state){
            return state.rule.dealer ? true : false;
        },
        isAgent(state){
            return state.rule.agent ? true : false;
        },
        isFranchise(state){
            return state.rule.franchise ? true : false;
        },
        isRelated(state){
            return state.rule.related ? true : false;
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
        getUserLastnameName(state){
            if( state.lastname && state.name ){
                //Николаев Николай
                return state.lastname + " " + state.name;
            }
            return "Неизвестный"
        },
        /*getUserPhoto(state){
            if(state.photo){
                return state.app.storage.user + state.photo;
            }
            return state.app.storage.defaultUser;
        },*/



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
            state.lastname          = user.lastname         ? user.lastname : null;
            state.middlename        = user.middlename       ? user.middlename : null;
            state.phone             = user.phone            ? user.phone : null;
            state.email             = user.email            ? user.email : null;
            state.photo             = user.photo            ? user.photo : null;
            state.birthday          = user.birthday         ? user.birthday : null;

            state.rule.eax          = user.rule.eax         ? user.rule.eax : null;
            state.rule.admin        = user.rule.admin       ? user.rule.admin : null;
            state.rule.confirmed    = user.rule.confirmed   ? user.rule.confirmed : null;
            state.rule.manager      = user.rule.manager     ? user.rule.manager : null;
            state.rule.dealer       = user.rule.dealer      ? user.rule.dealer : null;
            state.rule.agent        = user.rule.agent       ? user.rule.agent : null;
            state.rule.franchise    = user.rule.franchise   ? user.rule.franchise : null;
            state.rule.related      = user.rule.related     ? user.rule.related : null;
        },
        unsetUserInfo(state){
            state.login             = null;
            state.name              = null;
            state.lastname          = null;
            state.middlename        = null;
            state.phone             = null;
            state.email             = null;
            state.photo             = null;
            state.birthday          = null;

            state.rule.eax          = null;
            state.rule.admin        = null;
            state.rule.confirmed    = null;
            state.rule.manager      = null;
            state.rule.dealer       = null;
            state.rule.agent        = null;
            state.rule.franchise    = null;
            state.rule.related      = null;
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
