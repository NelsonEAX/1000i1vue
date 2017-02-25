<template>
    <section>
        <div class="lockscreen-logo">
            <router-link tag="a" class="logo-text" to="/">
                <b>1000i1</b>.ru
            </router-link>
        </div>

        <div class="col-md-4 col-md-offset-4">

            <!-- Profile Image -->
            <div class="box box-primary">
                <div class="box-body box-profile">
                    <img class="profile-user-img img-responsive img-circle" src="http://placehold.it/128" alt="User profile picture">

                    <h3 class="profile-username text-center">Семен Семеныч</h3>

                    <p class="text-muted text-center">Монтажник</p>

                    <ul class="list-group list-group-unbordered">
                        <li class="list-group-item">
                            <b>Заказов</b> <a class="pull-right">22</a>
                        </li>
                        <li class="list-group-item">
                            <b>В работе</b> <a class="pull-right">7</a>
                        </li>
                        <li class="list-group-item">
                            <b>Выполнено</b> <a class="pull-right">15</a>
                        </li>
                    </ul>

                    <a href="#" @click="logout" class="btn btn-primary btn-block"><b>Выйти</b></a>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
        <!-- /.col -->
    </section>
</template>

<script>
  export default {
      methods: {
          logout(){
              this.$store.dispatch('login', {});
              this.$router.push("/login");
          }
      }
  }
</script>

<style scoped>
</style>


