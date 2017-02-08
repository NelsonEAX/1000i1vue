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
                        Register
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
                password:''
            }
        },
        methods: {
            register(){
                var data = {
                    email: 'qweio42@qwe.ru',
                    password: 'qweqweqwe1',
                    password_confirmation: 'qweqweqwe1'
                }
                this.$http.post("api/register", data)
                        .then(response => {
                    console.log(response);
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