<template>
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div v-if="loading" class="loading">
                        Loading...
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
           this.fetchData()
        },
        watch: {
            // в случае изменения маршрута запрашиваем данные вновь
            '$route': 'fetchData'
        },
        methods: {
            fetchData () {
                this.error = this.post = null
                this.loading = true
               /* // замените здесь getPost используемым методом получения данных / доступа к API
                getPost(this.$route.params.id, (err, post) => {
                    this.loading = false
                    if (err) {
                       this.error = err.toString()
                    } else {
                       this.post = post
                    }
                })*/
            },
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
