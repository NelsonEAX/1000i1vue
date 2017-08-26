<template>
    <div>
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
                    <!--<input type="text" name="search" id="search" class="search form-control"
                    data-toggle="hideseek" placeholder="Search Menus" data-list=".sidebar-menu">-->
                    <!--<span class="input-group-btn">-->
                        <!--<button type="submit" name="search" id="search-btn" class="btn btn-flat">
                        <i class="fa fa-search"></i>-->
                        <!--</button>-->
                    <!--</span>-->
                <!--</div>-->
            <!--</form>-->
            <!-- /.search form -->

            <!-- Sidebar Menu -->
            <ul class="sidebar-menu">
                <li class="header">Главное</li>
                <router-link tag="li" class="pageLink" to="/my/dashboard">
                    <a><i class="fa fa-desktop"></i><span class="page">Главная</span></a>
                </router-link>
                <router-link tag="li" class="pageLink" to="/my/profile">
                    <a><i class="fa fa-user"></i><span class="page">Профиль</span></a>
                </router-link>

                <li class="header">Доступ</li>
                <router-link v-show="this.$store.getters.isAuth" tag="li" class="pageLink" to="/my/access/admin">
                    <a><i class="fa fa-th"></i><span class="page">Для Админа</span></a>
                </router-link>
                <router-link v-show="this.$store.getters.isManager" tag="li" class="pageLink" to="/my/access/manager">
                    <a><i class="fa fa-th"></i><span class="page">Для Менеджера</span></a>
                </router-link>
                <router-link v-show="this.$store.getters.isDealer" tag="li" class="pageLink" to="/my/access/dealer">
                    <a><i class="fa fa-th"></i><span class="page">Для Дилера</span></a>
                </router-link>
                <router-link v-show="this.$store.getters.isConfirmed" tag="li" class="pageLink" to="/my/access/confirmed">
                    <a><i class="fa fa-th"></i><span class="page">Для Подтвержденных</span></a>
                </router-link>



                <li class="header">То</li>
                <router-link tag="li" class="pageLink" to="/my/product">
                    <a><i class="fa fa-th"></i><span class="page">Продукция</span></a>
                </router-link>
                <router-link tag="li" class="pageLink" to="/my/orders">
                    <a><i class="fa fa-th"></i><span class="page">Заказ</span></a>
                </router-link>
                <router-link tag="li" class="pageLink" to="/my/tasks">
                    <a><i class="fa fa-tasks"></i><span class="page">Задачи</span></a>
                </router-link>
                <router-link tag="li" class="pageLink" to="/my/setting">
                    <a><i class="fa fa-cog"></i><span class="page">Настройки</span></a>
                </router-link>

                <li class="header">Сё</li>
                <router-link tag="li" class="pageLink" to="/my/access">
                    <a><i class="fa fa-book"></i><span class="page">Книга</span></a>
                </router-link>
                <router-link tag="li" class="pageLink" to="/my/server">
                    <a><i class="fa fa-hdd-o"></i><span class="page">Сервер</span></a>
                </router-link>
                <router-link tag="li" class="pageLink" to="/my/repos">
                    <a><i class="fa fa-heart"></i>
                        <span class="page">Сердечко</span>
                        <small class="label pull-right bg-green">пыщ</small>
                    </a>
                </router-link>

                <!--<li class="header">PAGES</li>-->
                <!--<li class="pageLink" ><router-link to="/my/login">
                <i class="fa fa-circle-o text-yellow"></i> <span class="page">Login</span></router-link>
                </li>-->
                <!--<li class="pageLink" ><router-link to="/my/404">
                <i class="fa fa-circle-o text-red"></i> <span class="page">404</span></router-link>
                </li>-->
            </ul>
            <!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
</div>
</template>

<script>
    export default {}
</script>
