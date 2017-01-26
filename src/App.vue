<template>
  <div class="container" id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'

export default {
  components: {
    'navbar': Navbar,
    'login': Login,
    'register': Register
  }
}
</script>

<style>

</style>
