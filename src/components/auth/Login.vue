<template>
    <div class="login-page">
        <div class="login-box">
            <div class="login-logo">
                <router-link tag="a" class="logo-text" to="/">
                    <b>1000i1</b>.ru
                </router-link>
            </div>
            <!-- /.login-logo -->
            <div class="login-box-body">
                <p class="login-box-msg">Войдите для продолжения работы</p>
                <div :class="this.$store.getters.getClassValid( fields.passed('email') && !error, errors.has('email') || error )">
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
                <div :class="this.$store.getters.getClassValid( fields.passed('password') && !error, errors.has('password') || error )">
                    <input  v-model="password"
                            v-validate="this.$store.getters.getRulePassword"
                            @keydown="keydown"
                            name="password"
                            class="form-control"
                            type="password"
                            :placeholder="this.$store.getters.getPlaceholderPassword">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    <span class="help-block text-center" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                    <span class="help-block text-center" v-show="error">{{ error_message }}</span>
                </div>
                <div class="row">
                    <div class="col-xs-7">
                        <router-link tag="a" to="/passrecover">Восстановить пароль</router-link>
                        <router-link tag="a" to="/register">Регитсрация</router-link>
                    </div>
                    <!-- /.col -->
                    <div class="col-xs-5 pull-right">
                        <button @click="login"
                                type="submit"
                                class="btn btn-primary btn-block btn-flat"
                                :disabled="fields.failed() || fields.clean('email') || fields.clean('password') || loading || error">
                            <i v-if="loading" class="fa fa-refresh fa-spin fa-fw"></i>
                            <span v-else>Войти</span>
                        </button>
                    </div>
                    <!-- /.col -->
                </div>
            </div>
            <!-- /.login-box-body -->
        </div>

        <!-- { alert } -->
        <alert :show.sync="modalLoginFalse" placement="top" duration="3000" type="warning" width="400px" dismissable>
            <i class="fa fa-info-circle" aria-hidden="true"></i>
            <strong>Внимание!</strong>
            <p class="text-center">{{ error_message }}</p>
        </alert>
        <!-- ./{ alert } -->
    </div>
</template>

<script>
    import { alert } from 'vue-strap';
    export default{
        data(){
            return{
                email:'',
                password:'',
                error: false,
                error_message: '',
                loading: false,
                modalLoginFalse: false,
            }
        },
        components: {
            alert,
        },
        methods: {
            keydown($event){
                this.modalLoginFalse = false;
                ($event.keyCode == 13) ? this.enter() : this.error = false ;
            },
            enter(){
                if( !this.fields.failed() &&
                    !this.fields.clean('email') &&
                    !this.fields.clean('password') &&
                    !this.loading && !this.error){
                    return this.login();
                }
            },
            login(){
                this.loading = true;
                var data = {
                    client_id: this.$store.getters.getAuthClientId,
                    client_secret: this.$store.getters.getAuthClientSecret,
                    grant_type: this.$store.getters.getAuthGrantType,
                    username: this.email,
                    password: this.password
                }

                this.$http.post("oauth/token", data)
                .then(response => {
                    console.log(response);
                    if(response.body.access_token){
                        this.error = false;
                        this.$store.dispatch('login',{
                            token: response.body.access_token,
                            expiration: response.body.expires_in*1000 + Date.now(),
                            root: this.$store.getters.getRoot,
                        });
                        //this.$store.dispatch('setHeaderAuthorization', response.body.access_token);
                        this.$http.headers.common['Authorization'] = this.$store.getters.getHeaderAuthorization;
                        this.loading = false;
                        this.modalLoginFalse = false;
                        this.$router.push("/dash");
                    }else{
                        if ( response.body.error == 'invalid_credentials' )
                            this.error_message = this.$store.getters.getMessageLoginFalse;
                        else
                            this.error_message = response.body.message;
                        this.error = true;
                        this.modalLoginFalse = true;
                        this.loading = false;
                    }
                }, erresponse => {
                    if ( erresponse.body.error == 'invalid_credentials' )
                        this.error_message = this.$store.getters.getMessageLoginFalse;
                    else
                        this.error_message = erresponse.body.message;
                    this.error = true;
                    this.modalLoginFalse = true;
                    this.loading = false;
                })
            }
        },
        created(){
            console.log(this);
        }
    }
</script>

<style scoped>
    .login-page {
        padding: 1px;
    }
</style>
