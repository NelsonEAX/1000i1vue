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
                <div :class="this.$store.getters.getClassValid( fields.passed('email'), errors.has('email') )">
                    <input  v-model="email"
                            v-validate="this.$store.getters.getRuleEmail"
                            name="email"
                            class="form-control"
                            type="email"
                            placeholder="Email">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    <span class="help-block text-center" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                </div>
                <div :class="this.$store.getters.getClassValid( fields.passed('password'), errors.has('password') )">
                    <input  v-model="password"
                            v-validate="this.$store.getters.getRulePassword"
                            name="password"
                            class="form-control"
                            type="password"
                            placeholder="Password">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div :class="this.$store.getters.getClassValid( fields.passed('confirm'), errors.has('confirm') )">
                    <input  v-model="confirm"
                            v-validate="this.$store.getters.getRulePasswordConfirm"
                            name="confirm"
                            class="form-control"
                            type="password"
                            placeholder="Password confirm">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    <span class="help-block text-center" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                    <span class="help-block text-center" v-show="errors.has('confirm')">{{ errors.first('confirm') }}</span>
                </div>
                <div class="row">
                    <div class="col-xs-7">
                        <router-link tag="a" to="/passrecover">Восстановить пароль</router-link>
                        <router-link tag="a" to="/login">Войти</router-link>
                    </div>
                    <!-- /.col -->
                    <div class="col-xs-5 pull-right">
                        <button @click="register" type="submit" class="btn btn-primary btn-block btn-flat" :disabled="fields.failed() || fields.clean('email') || fields.clean('password') || fields.clean('confirm') || loading">
                            <i v-if="loading" class="fa fa-refresh fa-spin fa-fw"></i>
                            <span v-else>Регистрация</span>
                        </button>
                    </div>
                    <!-- /.col -->
                </div>
            </div>
            <!-- /.register-box-body -->
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                name:'',
                email:'',
                password:'',
                confirm:'',
                loading: false
            }
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
            register(){

                this.loading = true;
                var data = {
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password
                }

                data = {
                    email: this.makeemail()+'@email.ru',
                    password: 'qweqweqwe1',
                    password_confirmation: 'qweqweqwe1'
                }

                this.$http.post("api/register", data)
                        .then(response => {
                    console.log(response);
                    this.loading = false;
//                this.$auth.setToken(response.body.access_token, response.body.expires_in*1000 + Date.now())
//
//                this.$router.push("/feed")
                })
            }
        },
    }
</script>
