<template>
    <div class="login-page">
        <div class="login-box">
            <div class="login-logo">
                <router-link tag="a" class="logo-text" to="/" v-if="!isDash">
                    <b>1000i1</b>.ru
                </router-link>
            </div>
            <!-- /.login-logo -->
            <div class="login-box-body">
                <p class="login-box-msg">Войдите для продолжения работы</p>
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
                            <router-link tag="a" to="/register" v-if="!isDash">Восстановить пароль</router-link>
                            <router-link tag="a" to="/register" v-if="!isDash">Регитсрация</router-link>
                        </div>
                        <!-- /.col -->
                        <div class="col-xs-5 pull-right">
                            <button @click="login" type="submit" class="btn btn-primary btn-block btn-flat">Войти</button>
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
                password:''
            }
        },
        methods: {
            login(){
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
                        this.$auth.setToken(response.body.access_token, response.body.expires_in*1000 + Date.now())

                        this.$router.push("/feed")
                    })
            }
        }
    }
</script>

<style scoped>
    .login-page {
        padding: 1px;
    }
    .logo-text{
        font-family: 'Special Elite', cursive;
    }
</style>
