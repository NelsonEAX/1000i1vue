<template>
    <section class="content">
        <div class="error-page">
            <h2 class="headline text-yellow"> 404</h2>

            <div class="error-content">
                <h3><i class="fa fa-warning text-yellow"></i> Упс! Страница не найдена.</h3>
                <p>
                    Мы не смогли найти страницу, которую Ты ищешь.<br>
                    Но Ты можешь <a @click="fallback" href="#">вернуться назад</a>.
                </p>
            </div>
            <!-- /.error-content -->
        </div>

        <!--<router-link to="/">Take me home.</router-link>-->
        <!-- /.error-page -->
    </section>
</template>

<script>
  export default {
      methods: {
          fallback(){
              this.$route.go(window.history.back());
          }
      }
  }
</script>

<style scoped>
  .headline {
    margin-top: -15px;
  }
</style>


