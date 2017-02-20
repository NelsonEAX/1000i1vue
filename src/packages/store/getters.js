/**
 * Created by NelsonEAX on 14.02.2017.
 */
export default {
    /**Server*/
    getRoot(state){
        return state.app.server.root;
    },
    getHeaderContentType(state){
        return state.app.server.headers.content_type;
    },
    getHeaderAuthorization(state){
        return state.app.server.headers.authorization;
    },
    /**Auth*/
    getAuthToken(state){
        return state.app.auth.token;
    },
    getAuthExpiration(state){
        return state.app.auth.expiration;
    },
    getAuthClientId(state){
        return state.app.auth.client_id;
    },
    getAuthGrantType(state){
        return state.app.auth.grant_type;
    },
    getAuthClientSecret(state){
        return state.app.auth.client_secret;
    },
    
};