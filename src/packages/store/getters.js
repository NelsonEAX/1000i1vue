/**
 * Created by NelsonEAX on 14.02.2017.
 */
export default {
    /**Server*/
    getRoot(state){
        return state.app.server.root;
    },
    getUserPhotoFromStorage(state){
        if(state.photo){
            return state.app.storage.user + state.photo;
        }
        return state.app.storage.defaultUser;
    },
    getMainImgFromStorage: state => ( obj, width = false, height = false ) => {
        //debugger;
        var thumbnail = '';
        if (obj.imgs && obj.imgs[0]) {
            if (width || height) {
                thumbnail = 'th' + (width ? width : '0') + 'x' + (height ? height : '0');
            }
            console.log(state.app.server.root + state.app.storage.image + obj.imgs[0].dir + obj.imgs[0].name + thumbnail + '.' + obj.imgs[0].ext);//###TODO: delete
            return state.app.server.root + state.app.storage.image + obj.imgs[0].dir + obj.imgs[0].name + thumbnail + '.' + obj.imgs[0].ext;
        }
        else 
            return state.app.storage.default;
    },
    getAllImgFromStorage: state => ( obj, width = false, height = false ) => {
        //debugger;
        if (!obj || !obj.imgs) return [state.app.storage.default];
        var thumbnail = '',
            uri = [];
        obj.imgs.forEach( (img) => {
            if (width || height) {
                thumbnail = 'th' + (width ? width : '0') + 'x' + (height ? height : '0');
            }
            console.log(state.app.server.root + state.app.storage.image + img.dir + img.name + thumbnail + '.' + img.ext);//###TODO: delete
            uri.push(state.app.server.root + state.app.storage.image + img.dir + img.name + thumbnail + '.' + img.ext);
        });
        if (uri) 
            return uri;
        else 
            return [state.app.storage.default];
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


    /**Message*/
    getMessageLoginTrue(state){
        return state.app.message.loginTrue;
    },
    getMessageLoginFalse(state){
        return state.app.message.loginFalse;
    },
    getMessageRegisterTrue(state){
        return state.app.message.registerTrue;
    },
    getMessageRegisterFalse(state){
        return state.app.message.registerFalse;
    },
    getMessageAskConfirmEmail(state){
        return state.app.message.askConfirmEmail;
    },
    
};