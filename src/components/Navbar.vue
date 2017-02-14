<template>

    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right">
                <router-link tag="li" to="/index.html">
                    <a>Index</a>
                </router-link>
                <router-link tag="li" to="/login" v-if="!isDash">
                    <a>Войти</a>
                </router-link>
                <router-link tag="li" to="/register" v-if="!isDash">
                    <a>Регитсрация</a>
                </router-link>
                <router-link tag="li" to="/feed" v-if="isDash">
                    <a>Feed</a>
                </router-link>
                <router-link tag="li" to="/logout" v-if="isDash">
                    <a>Выйти</a>
                </router-link>
            </ul>
        </nav>
        <h3 class="text-muted">Project name</h3>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                isAuth: null
            }
        },

        created () {
            this.isAuth = this.$auth.isAuthenticated()
        }
    }
</script>
