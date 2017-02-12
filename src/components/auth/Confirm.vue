<template>
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div v-if="loading" class="loading">
                        <i class="fa fa-refresh fa-spin fa-lg fa-fw"></i> Loading...
                    </div>

                    <div v-if="error" class="error">
                        {{ error }}
                    </div>

                    <div v-if="post">
                       <h2>{{ post.title }}</h2>
                       <p>{{ post.body }}</p>
                    </div>
                    <button @click="login" class="btn btn-success pull-right">
                        Login
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
            return {
                loading: false,
                post: null,
                error: null
            }
        },
        created () {
           // запрашиваем данные когда реактивное представление уже создано
           this.confirmEmail()
        },
        watch: {
            // в случае изменения маршрута запрашиваем данные вновь
            '$route': 'fetchData'
        },
        methods: {
            confirmEmail () {
                this.error = this.post = null
                this.loading = true
                console.log(this.$route.params.token);
                this.$http.get("api/register/confirm/"+this.$route.params.token)
                .then(response => {
                    console.log("success", response);
                    if(response.body.state){
                        this.$router.push("/login");
                    }else{
                        this.error = response.body.error;
                    }

                },response => {
                    console.log("error", response);
                    this.error = 'Возникли проблемы, пойди выпей кофейку и попробуй еще раз'
                })

                //this.$router.push("/feed")
            },
               /* // замените здесь getPost используемым методом получения данных / доступа к API
                getPost(this.$route.params.id, (err, post) => {
                    this.loading = false
                    if (err) {
                       this.error = err.toString()
                    } else {
                       this.post = post
                    }
                })*/

            login(){
                var data = {
                    client_id: 2,
                    client_secret: '8yQvBAMJWFj61kWazEWwTyRj918l3oekz5sTD4DZ',
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

</style>
