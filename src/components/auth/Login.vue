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
                <p class="login-box-msg" v-if="error">{{error}}</p>
                <div class="form-group has-feedback">
                    <input
                        v-model="email"
                        name="email"
                        class="form-control"
                        type="email"
                        placeholder="Email">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input
                        v-model="password"
                        name="password"
                        class="form-control"
                        type="password"
                        placeholder="Password">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-7">
                        <router-link tag="a" to="/passrecover">Восстановить пароль</router-link>
                        <router-link tag="a" to="/register">Регитсрация</router-link>
                    </div>
                    <!-- /.col -->
                    <div class="col-xs-5 pull-right">
                        <button @click="login" type="submit" class="btn btn-primary btn-block btn-flat" :disabled="loading">
                            <i v-if="loading" class="fa fa-refresh fa-spin fa-fw"></i>
                            <span v-else>Войти</span>
                        </button>
                    </div>
                    <!-- /.col -->
                </div>
            </div>
            <!-- /.login-box-body -->
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                email:'',
                password:'',
                error: false,
                loading: false,
            }
        },
        methods: {
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
                            expiration: response.body.expires_in*1000 + Date.now()
                        });
                        //this.$store.dispatch('setHeaderAuthorization', response.body.access_token);
                        this.$http.headers.common['Authorization'] = this.$store.getters.getHeaderAuthorization;
                        this.loading = false;
                        this.$router.push("/dash");
                    }else{
                        this.error = response.body.message;
                        this.loading = false;
                    }
                }, erresponse => {
                    this.error = erresponse.body.message;
                    this.loading = false;
                })
            }
        }
    }
</script>

<style scoped>
    .login-page {
        padding: 1px;
    }
</style>
