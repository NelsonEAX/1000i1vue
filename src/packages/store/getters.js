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
    getHeaders(state){
        return {
            headers: {
                'Authorization': state.app.server.headers.authorization,
                'Content-Type': state.app.server.headers.content_type
            }
        }
    },
};