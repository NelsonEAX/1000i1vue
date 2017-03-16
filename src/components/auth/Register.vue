<template>
    <div class="register-page">
        <div class="register-box">
            <div class="register-logo">
                <router-link tag="a" class="logo-text" to="/">
                    <b>1000i1</b>.ru
                </router-link>
            </div>
            <!-- /.register-logo -->
            <div class="register-box-body">
                <p class="register-box-msg">Регистрация нового пользователя</p>
                <div :class="this.$store.getters.getClassValid( fields.passed('email') && result!==false, errors.has('email') || result===false )">
                    <input  v-model="email"
                            v-validate="this.$store.getters.getRuleEmail"
                            @keydown="keydown"
                            name="email"
                            class="form-control"
                            type="email"
                            :placeholder="this.$store.getters.getPlaceholderEmail">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    <span class="help-block text-center" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                </div>
                <div :class="this.$store.getters.getClassValid( fields.passed('password'), errors.has('password') )">
                    <input  v-model="password"
                            v-validate="this.$store.getters.getRulePassword"
                            @keydown.enter="enter"
                            name="password"
                            class="form-control"
                            type="password"
                            :placeholder="this.$store.getters.getPlaceholderPassword">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div :class="this.$store.getters.getClassValid( fields.passed('confirm'), errors.has('confirm') )">
                    <input  v-model="confirm"
                            v-validate="this.$store.getters.getRulePasswordConfirm"
                            @keydown.enter="enter"
                            name="confirm"
                            class="form-control"
                            type="password"
                            :placeholder="this.$store.getters.getPlaceholderPasswordConfirm">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    <span class="help-block text-center" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                    <span class="help-block text-center" v-show="errors.has('confirm')">{{ errors.first('confirm') }}</span>
                </div>
                <div  v-show="result !== null" :class="this.$store.getters.getClassValid( result, !result )">
                    <span class="help-block text-center">{{ result_message }}</span>
                </div>
                <div class="row">
                    <div class="col-xs-7">
                        <router-link tag="a" to="/passrecover">Восстановить пароль</router-link>
                        <router-link tag="a" to="/login">Войти</router-link>
                    </div>
                    <!-- /.col -->
                    <div class="col-xs-5 pull-right">
                        <button @click="register"
                                type="submit"
                                class="btn btn-primary btn-block btn-flat"
                                :disabled="fields.failed() ||
                                    fields.clean('email') ||
                                    fields.clean('password') ||
                                    fields.clean('confirm') ||
                                    loading || result===false">
                            <i v-if="loading" class="fa fa-refresh fa-spin fa-fw"></i>
                            <span v-else>Регистрация</span>
                        </button>
                    </div>
                    <!-- /.col -->
                </div>
            </div>
            <!-- /.register-box-body -->
        </div>

        <!-- { alert } -->
        <alert :show.sync="modalRegisterFalse" placement="top" duration="3000" type="warning" width="400px" dismissable>
            <i class="fa fa-info-circle" aria-hidden="true"></i>
            <strong>Внимание!</strong>
            <p class="text-center">{{ result_message }}</p>
        </alert>
        <!-- ./{ alert } -->
        <!-- { modal } -->
        <modal :show.sync="modalRegisterTrue" effect="fade" width="400" class="modal modal-info">
            <div slot="modal-header" class="modal-header">
                <h4 class="modal-title">
                    <b>Поздравляем!</b>
                </h4>
            </div>
            <div slot="modal-body" class="modal-body">
                {{ this.$store.getters.getMessageRegisterTrue }} <br>
                {{ this.$store.getters.getMessageAskConfirmEmail }}
            </div>
            <div slot="modal-footer" class="modal-footer">
                <router-link tag="button" class="btn btn-outline" to="/login">Войти</router-link>
            </div>
        </modal>
        <!-- ./{ modal } -->
    </div>
</template>

<script>
    import { alert } from 'vue-strap';
    import { modal } from 'vue-strap';
    export default{
        data(){
            return{
                email:'',
                password:'',
                confirm:'',
                loading: false,
                result: null,
                result_message: '',
                validate: false,

                modalRegisterTrue: false,
                modalRegisterFalse: false,
            }
        },
        components: {
            modal,
            alert,
        },
        methods: {
            makeemail()
            {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for( var i=0; i < 5; i++ )
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            },
            keydown($event){
                ($event.keyCode == 13) ? this.enter() : this.result = null ;
            },
            enter(){
                if( !this.fields.failed() &&
                    !this.fields.clean('email') &&
                    !this.fields.clean('password') &&
                    !this.fields.clean('confirm') &&
                    !this.loading && this.result!==false){
                    return this.register();
                }
            },
            register(){

                this.loading = true;
                var data = {
                    client_id: this.$store.getters.getAuthClientId,
                    client_secret: this.$store.getters.getAuthClientSecret,
                    grant_type: this.$store.getters.getAuthGrantType,
                    email: this.email,
                    username: this.email,
                    password: this.password,
                    password_confirmation: this.password
                }

                this.$http.post("api/register", data)
                .then(response => {
                    console.log(this, response);
                    //this.loading = false;
                    //this.result = response.body.state;
                    if(response.body.access_token){
                        this.result = true;
                        this.$store.dispatch('login',{
                            token: response.body.access_token,
                            expiration: response.body.expires_in*1000 + Date.now(),
                            root: this.$store.getters.getRoot,
                        });
                        //this.$store.dispatch('setHeaderAuthorization', response.body.access_token);
                        this.$http.headers.common['Authorization'] = this.$store.getters.getHeaderAuthorization;
                        this.loading = false;
                        this.$router.push("/my");
                    }else{
                        this.loading = false;
                        this.result = response.body.state;
                        console.log(response.body);
                        if( response.body.error.email[0] == 'Такое значение поля email уже существует.' ){
                            this.result_message = this.$store.getters.getMessageRegisterFalse;
                        }else{
                            this.result_message = response.body.error.email[0];
                        }
                        this.modalRegisterFalse = true;
                    }
                }, erresponse => {
                    if ( erresponse.body.error == 'invalid_credentials' )
                        this.result_message = this.$store.getters.getMessageLoginFalse;
                    else
                        this.result_message = erresponse.body.message;
                    this.modalRegisterFalse = true;
                    this.result = false;
                    this.loading = false;
                })
            }
        },
    }
</script>
