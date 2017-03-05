/**
 * Created by NelsonEAX on 14.02.2017.
 */
export default {
    setNewRoot(state, payload){
        state.app.server.root = payload.newRoot;
    },
    setHeaderAuthorization(state, payload){
        state.app.server.headers.authorization = 'Bearer ' + payload.token;
        if(payload.root){
            state.app.server.root = payload.root;
        }
    }
};