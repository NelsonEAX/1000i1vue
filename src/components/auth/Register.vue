<template>
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="form-group">
                        <input
                                v-model="name"
                                class="form-control"
                                type="text"
                                placeholder="Name">
                    </div>

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
                    client_id: 2,
                    client_secret: 'AqWG9zEmcGnswNT5vQUCY8lakVi5fezbJBjMpLDH',
                    grant_type: 'password'
                }
                this.$http.get("oauth/clients", data)
                    .then(token => {
                        console.log(token);
                      /*  var data = {
                            //   client_id: 2,
                            //   client_secret: 'AqWG9zEmcGnswNT5vQUCY8lakVi5fezbJBjMpLDH',
                            //   grant_type: 'password',
                            _token: token.body.csrf,
                            name: this.name,
                            email: this.email,
                            password: this.password,
                            password_confirmation: this.password
                        };
                        this.$http.headers.common['X-CSRF-TOKEN'] = token.body.csrf;
                //this.$cookie.set('test', 'Hello world!', 1);
                        this.$http.post("register", data, {
                            headers: {
                                'X-CSRF-TOKEN': token.body.csrf // from js or meta
                            }
                        })
                            .then(response => {
                                console.log(response);
                                //this.$auth.setToken(response.body.access_token, response.body.expires_in*1000 + Date.now())

                                //this.$router.push("/feed")
                            })*/
                    })

            }
        }
    }
</script>

<style>

</style>