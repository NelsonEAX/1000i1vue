/**
 * Created by NelsonEAX on 24.02.2017.
 */

export default {
    state: {
        client_id: 2,
        grant_type: 'password',
        client_secret: '4u20oeS2urRAsYcCdDRKsLff59ExZjxB9ZYxVILK',//null,
        token: null,
        expiration: null,
    },
    getters: {
        /**Auth*/
        isAuth(state){
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
        },
        getAuthExpiration(state){
            return state.expiration;
        },
        getAuthClientId(state){
            return state.client_id;
        },
        getAuthGrantType(state){
            return state.grant_type;
        },
        getAuthClientSecret(state){
            return state.client_secret;
        },
    },
    mutations:{
        setLogin(state, payload){
            state.token = payload.token;
            state.expiration = payload.expiration;
            localStorage.setItem('token', payload.token);
            localStorage.setItem('expiration', payload.expiration);
            if( payload.root ){
                state.root = payload.root;
                localStorage.setItem('root', payload.root);
            }
        },
        unsetLogin(state){
            state.token = false;
            state.expiration = false;
            state.root = false;
            // localStorage.removeItem('token');
            // localStorage.removeItem('expiration');
            // localStorage.removeItem('root');
            localStorage.clear();
        },
        setClientSecret(state, payload){
            state.client_secret = payload.newClientSecret;
        }
    },
    actions: {
        checkToken(context){
            var token = localStorage.getItem('token');
            var expiration = localStorage.getItem('expiration');
            var root = localStorage.getItem('root');

            if( !token || !expiration )
            {
                console.log('Токен отсутствует');//###TODO: delete
                return null;
            }

            if(Date.now() > parseInt(expiration)){
                console.log('Токен устарел, удаляем');//###TODO: delete
                context.commit('unsetLogin');
                context.commit('unsetUserInfo');
                return;
            }

            context.commit('setLogin', {
                token: token,
                expiration: expiration,
            });
            context.commit('setHeaderAuthorization', {
                token: token,
                root: root,
            });
            console.log('Токен норм');//###TODO: delete
        },
        login(context, state){
            if(state.token){
                context.commit('setLogin', state);
                context.commit('setHeaderAuthorization', state);
            }else{
                context.commit('unsetLogin');
                context.commit('unsetUserInfo');
            }
        },
        setClientSecret(context, newClientSecret){
            context.commit('setClientSecret', {
                newClientSecret: newClientSecret,
            });
        }
    }
};