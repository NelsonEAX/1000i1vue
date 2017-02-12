<template>
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="form-group">
                        <input
                                v-model="email"
                                class="form-control"
                                type="email"
                                placeholder="Email">
                    </div>

                    <div class="form-group">
                        <input
                                v-model="password"
                                class="form-control"
                                type="password"
                                placeholder="Password">
                    </div>

                    <button @click="register" class="btn btn-success pull-right">
                        <i v-if="loading" class="fa fa-refresh fa-spin fa-lg fa-fw"></i> Register
                    </button>
                </div>
            </div>
            <!--<pre>-->
            <!--{{ $data }}-->
            <!--</pre>-->
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
        }
    }
</script>

<style>

</style>