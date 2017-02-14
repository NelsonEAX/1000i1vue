<template>
  <div id="app">
    <!--<navbar></navbar>-->
    <!--<transition>-->
    <router-view></router-view>
    <!--</transition>-->
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Login from './auth/Login.vue'
import Register from './auth/Register.vue'
import Confirm from './auth/Confirm.vue'

export default {
  components: {
    'navbar': Navbar,
    'login': Login,
    'register': Register,
    'confirm': Confirm
  }
}
</script>


