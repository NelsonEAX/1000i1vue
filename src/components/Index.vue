<template>
    <div>
        <div class="wrapper">
            <header class="main-header">
                <!-- Header Navbar -->
                <nav class="navbar navbar-static-top" role="navigation">
                    <!-- Sidebar toggle button-->
                    <!--<a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">-->
                        <!--<span class="sr-only">Toggle navigation</span>-->
                    <!--</a>-->
                    <!-- Navbar Right Menu -->
                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">
                            <router-link tag="li" class="dropdown tasks-menu" to="/my" v-if="isAuth">
                                <a class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-tachometer"></i>
                                    <span class="label label-danger"></span>
                                </a>
                            </router-link>
                            <router-link tag="li" class="dropdown tasks-menu" to="/register" v-if="!isAuth">
                                <a class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-user-plus"></i>
                                    <span class="label label-danger"></span>
                                </a>
                            </router-link>
                            <router-link tag="li" class="dropdown tasks-menu" to="/login" v-if="!isAuth">
                                <a class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-sign-in"></i>
                                    <span class="label label-danger"></span>
                                </a>
                            </router-link>
                            <router-link tag="li" class="dropdown tasks-menu" to="/logout" v-if="isAuth">
                                <a class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-sign-out"></i>
                                    <span class="label label-danger"></span>
                                </a>
                            </router-link>
                        </ul>
                    </div>
                </nav>
            </header>
            <!--<router-link tag="a" to="/register" v-if="!isDash">Регитсрация</router-link>-->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isAuth: this.$store.getters.isAuth,
            }
        },
        components: {

        }
    }
</script>

<style scoped>
    .main-header>.navbar{
        margin-left: 0px;
    }
</style>
