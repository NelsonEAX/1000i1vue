<template>
  <div class="container" id="app">
    <navbar></navbar>
    <!--<transition>-->
      <router-view></router-view>
    <!--</transition>-->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Confirm from './components/auth/Confirm.vue'

export default {
  components: {
    'navbar': Navbar,
    'login': Login,
    'register': Register,
    'confirm': Confirm
  }
}
</script>

<style>

</style>
