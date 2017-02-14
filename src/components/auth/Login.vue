<template>
    <div class="login-page">
        <div class="login-box">
            <div class="login-logo">
                <router-link tag="a" to="/" v-if="!isDash">
                    <b>IOOOiI</b>.ru</a>
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
                    client_id: 2,
                    client_secret: 'zUxRqZVzGz4erCWkj6PObTTw5ugmHMhRdtvKWSiC',
                    grant_type: 'password',
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

<style>
    .login-page {
        padding: 1px;
    }
</style>
