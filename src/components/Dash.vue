<template>
    <!-- Dashboard section -->
    <section id="dashbord" :class="{
        'hold-transition': true,
        'skin-blue': true,
        'sidebar-mini': true,
        'sidebar-collapse': toggleSidebar,
        'sidebar-open': !toggleSidebar
    }">
        <div class="wrapper">
            <header class="main-header">
                <router-link tag="a" to="/" class="logo hidden-xs">
                    <!-- mini logo for sidebar mini 40x50 pixels -->
                    <span class="logo-mini"><img src="http://placehold.it/40x50/333333/ffffff?text=1000i1" alt="Logo" class="img-responsive center-block"></span>
                    <!-- logo for regular state and mobile devices -->
                    <div class="container logo-lg">
                        <div class="pull-left image"><img src="http://placehold.it/120x50/333333/ffffff?text=1000i1" alt="Logo" class="img-responsive"></div>
                        <div class="pull-left info">.ru</div>
                    </div>
                </router-link>
                <!--<a href="/" class="logo">-->
                    <!--&lt;!&ndash; mini logo for sidebar mini 40x50 pixels &ndash;&gt;-->
                    <!--<span class="logo-mini"><img src="http://placehold.it/40x50/333333/ffffff?text=1000i1" alt="Logo" class="img-responsive center-block"></span>-->
                    <!--&lt;!&ndash; logo for regular state and mobile devices &ndash;&gt;-->
                    <!--<div class="container logo-lg">-->
                        <!--<div class="pull-left image"><img src="http://placehold.it/120x50/333333/ffffff?text=1000i1" alt="Logo" class="img-responsive"></div>-->
                        <!--<div class="pull-left info">.ru</div>-->
                    <!--</div>-->
                <!--</a>-->

                <!-- Header Navbar -->
                <nav class="navbar navbar-static-top" role="navigation">
                    <!-- Sidebar toggle button-->
                    <a @click="toggleSwitchOff(); toggleSidebar = !toggleSidebar" class="sidebar-toggle" role="button">
                        <span class="sr-only">Toggle navigation</span>
                    </a>
                    <!-- Navbar Right Menu -->
                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">
                            <!-- Messages-->
                            <li :class="{
                                'dropdown': true,
                                'messages-menu': true,
                                'open': toggleMessages
                            }">
                                <a @click="toggleSwitchMessages()">
                                    <i class="fa fa-envelope-o"></i>
                                    <span class="label label-success"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="header">Новые сообщения:</li>
                                    <li >
                                        <!-- inner menu: contains the messages -->
                                        <ul class="menu">
                                            <li><!-- start message -->
                                                <a href="javascript:;">
                                                    <!-- Message title and timestamp -->
                                                    <h4>
                                                        Тех-поддержка
                                                        <small><i class="fa fa-clock-o"></i> 5 мин</small>
                                                    </h4>
                                                    <!-- The message -->
                                                    <p>Tестовое сообщение?</p>
                                                </a>
                                            </li>
                                            <!-- end message -->
                                        </ul>
                                        <!-- /.menu -->
                                    </li>
                                    <li class="footer" ><a href="javascript:;">Показать все</a></li>
                                </ul>
                            </li>
                            <!-- /.messages-menu -->

                            <!-- Notifications Menu -->
                            <li :class="{
                                'dropdown': true,
                                'notifications-menu': true,
                                'open': toggleNotifications
                            }">
                                <a @click="toggleSwitchNotifications()">
                                    <i class="fa fa-bell-o"></i>
                                    <span class="label label-warning"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="header">Новые оповещения:</li>
                                    <li >
                                        <!-- Inner Menu: contains the notifications -->
                                        <ul class="menu">
                                            <li><!-- start notification -->
                                                <a href="javascript:;">
                                                    <i class="fa fa-users text-aqua"></i> 5 новых замерщиков сегодня
                                                </a>
                                            </li>
                                            <!-- end notification -->
                                        </ul>
                                    </li>
                                    <li class="footer" ><a href="javascript:;">Показать все</a></li>
                                </ul>
                            </li>

                            <!-- Tasks Menu -->
                            <li :class="{
                                'dropdown': true,
                                'tasks-menu': true,
                                'open': toggleTasks
                            }">
                                <a @click="toggleSwitchTasks()">
                                    <i class="fa fa-flag-o"></i>
                                    <span class="label label-danger"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="header">Новые задачи:</li>
                                    <li >
                                        <!-- Inner menu: contains the tasks -->
                                        <ul class="menu">
                                            <li><!-- Task item -->
                                                <a href="javascript:;">
                                                    <!-- Task title and progress text -->
                                                    <h3>
                                                        Ленина 50Б
                                                        <small class="pull-right">20%</small>
                                                    </h3>
                                                    <!-- The progress bar -->
                                                    <div class="progress xs">
                                                        <!-- Change the css width attribute to simulate progress -->
                                                        <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                            <span class="sr-only">20% Complete</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <!-- end task item -->
                                        </ul>
                                    </li>
                                    <li class="footer" >
                                        <a href="javascript:;">Показать все</a>
                                    </li>
                                </ul>
                            </li>

                            <!-- User Account Menu -->
                            <li :class="{
                                'dropdown': true,
                                'user': true,
                                'user-menu': true,
                                'open': toggleUserMenu
                            }">
                                <a @click="toggleSwitchUserMenu()">
                                    <!-- The user image in the navbar-->
                                    <img :src="this.$store.getters.getUserPhoto" class="user-image" alt="User Image">
                                    <!-- hidden-xs hides the username on small devices so only the image appears. -->
                                    <span class="hidden-xs">{{ this.$store.getters.getUserSurnameName }}</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <!-- User image -->
                                    <li class="user-header">
                                        <img :src="this.$store.getters.getUserPhoto" class="img-circle" alt="User Image">
                                        <p>{{ this.$store.getters.getUserSurnameName }}
                                            <small>{{ this.$store.getters.getUserRole }}</small>
                                        </p>
                                        <!--<h3 class="profile-username text-center">Николаев Николай</h3>-->
                                        <!--<p class="text-muted text-center">Администратор</p>-->
                                    </li>
                                    <!-- Menu Body -->
                                    <li class="user-body">
                                        <div class="row">
                                            <div class="col-xs-4 text-center">
                                                <router-link tag="a" to="/dash/qwe">Заказы</router-link>
                                            </div>
                                            <div class="col-xs-4 text-center">
                                                <router-link tag="a" to="/dash/asd">Продажи</router-link>
                                            </div>
                                            <div class="col-xs-4 text-center">
                                                <router-link tag="a" to="/dash/zxc">Друзья</router-link>
                                            </div>
                                        </div>
                                        <!-- /.row -->
                                    </li>
                                    <!-- Menu Footer-->
                                    <li class="user-footer">
                                        <div class="pull-left">
                                            <router-link tag="a" to="/dash/profile" class="btn btn-default btn-flat">Профиль</router-link>
                                        </div>
                                        <div class="pull-right">
                                            <a @click="logout" class="btn btn-default btn-flat">Выйти</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <!-- Left side column. contains the logo and sidebar -->
            <aside class="main-sidebar">

                <!-- sidebar: style can be found in sidebar.less -->
                <section class="sidebar">

                    <!-- Sidebar user panel (optional) -->
                    <!--<div class="user-panel">-->
                        <!--<div class="pull-left image">-->

                        <!--</div>-->
                        <!--<div class="pull-left info">-->
                            <!--<div><p class="white"></p></div>-->
                            <!--<a href="javascript:;"><i class="fa fa-circle text-success"></i> Online</a>-->
                        <!--</div>-->
                    <!--</div>-->

                    <!-- search form (Optional) -->
                    <!--<form  class="sidebar-form">-->
                        <!--<div class="input-group">-->
                            <!--<input type="text" name="search" id="search" class="search form-control" data-toggle="hideseek" placeholder="Search Menus" data-list=".sidebar-menu">-->
                            <!--<span class="input-group-btn">-->
                                <!--<button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>-->
                                <!--</button>-->
                            <!--</span>-->
                        <!--</div>-->
                    <!--</form>-->
                    <!-- /.search form -->

                    <!-- Sidebar Menu -->
                    <ul class="sidebar-menu">
                        <li class="header">Главное</li>
                        <li class="active pageLink" ><router-link to="/dash"><i class="fa fa-desktop"></i><span class="page">Главная</span></router-link></li>
                        <li class="pageLink"><router-link to="/dash/feed"><i class="fa fa-table"></i><span class="page">Таблицы</span></router-link></li>

                        <li class="header">То</li>
                        <li class="pageLink" ><router-link to="/dash/tasks"><i class="fa fa-tasks"></i><span class="page">Задачи</span></router-link></li>
                        <li class="pageLink" ><router-link to="/dash/setting"><i class="fa fa-cog"></i><span class="page">Настройки</span></router-link></li>

                        <li class="header">Сё</li>
                        <li class="pageLink"><router-link to="/dash/access"><i class="fa fa-book"></i><span class="page">Книга</span></router-link></li>
                        <li class="pageLink"><router-link to="/dash/server"><i class="fa fa-hdd-o"></i><span class="page">Сервер</span></router-link></li>
                        <li class="pageLink"><router-link to="/dash/repos"><i class="fa fa-heart"></i><span class="page">Сердечко</span><small class="label pull-right bg-green">пыщ</small></router-link></li>

                        <!--<li class="header">PAGES</li>-->
                        <!--<li class="pageLink" ><router-link to="/dash/login"><i class="fa fa-circle-o text-yellow"></i> <span class="page">Login</span></router-link></li>-->
                        <!--<li class="pageLink" ><router-link to="/dash/404"><i class="fa fa-circle-o text-red"></i> <span class="page">404</span></router-link></li>-->
                    </ul>
                    <!-- /.sidebar-menu -->
                </section>
                <!-- /.sidebar -->
            </aside>

            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper" @click="toggleSwitchOff();">
                <!-- Content Header (Page header) -->
                <section class="content-header">
                    <h1>
                        <small></small>
                    </h1>
                    <ol class="breadcrumb">
                        <li class="active"><a href="javascript:;"><i class="fa fa-home"></i>Главная</a></li>
                        <!--<li class="active">ghj</li>-->
                    </ol>
                </section>
                <section class="content">
                    <router-view></router-view>
                </section>
            </div>
            <!-- /.content-wrapper -->

            <!-- Main Footer -->
            <footer class="main-footer">
                <strong>Copyright &copy;  <a href="http://xor-dev.ru">XOR-DEV</a>.</strong> All rights reserved.
            </footer>
        </div>
        <!-- ./wrapper -->
    </section>
    <!-- ./Dashboard section -->
</template>

<script>

module.exports = {
    name: 'Dash',
    data: function () {
        return {
            toggleSidebar: false,
            toggleMessages: false,
            toggleNotifications: false,
            toggleTasks: false,
            toggleUserMenu: false,


            section: 'Dash',
            me: '',
            error: '',
            /*api: {
                servers: {
                    url: '', // Back end server
                    result: []
                }
            }*/
        }
    },
    computed: {
    },
    methods: {
        toggleSwitchOff(){
            this.toggleMessages =
            this.toggleNotifications =
            this.toggleTasks =
            this.toggleUserMenu =  false;
        },
        toggleSwitchMessages(){
            var state = this.toggleMessages;
            console.log(state);
            this.toggleSwitchOff();
            this.toggleMessages = !state;
        },
        toggleSwitchNotifications(){
            var state = this.toggleNotifications;
            console.log(state);
            this.toggleSwitchOff();
            this.toggleNotifications = !state;
        },
        toggleSwitchTasks(){
            var state = this.toggleTasks;
            console.log(state);
            this.toggleSwitchOff();
            this.toggleTasks = !state;
        },
        toggleSwitchUserMenu(){
            var state = this.toggleUserMenu;
            console.log(state);
            this.toggleSwitchOff();
            this.toggleUserMenu = !state;
        },




        logout(){
            this.$store.dispatch('login', {});
            this.$router.push("/login");
        }
    },
    created(){
        console.log('Получаю данные Юзера');//###TODO: delete
        //После авторизации полуаем данные юзера с сервера
        this.$http.get('api/user', this.$store.getters.getHeaders)
        .then(response => {
            console.log(response.body);//###TODO: delete
            this.$store.dispatch('setUserInfo',response.body.user);
        })
    }
}
</script>

<style>
.user-panel {
  height: 4em;
}
hr.visible-xs-block {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.17);
  height: 1px;
  border-color: transparent;
}
</style>
