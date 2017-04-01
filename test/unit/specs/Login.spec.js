import Vue from 'vue'
import Vuex from 'vuex';
import store from 'src/packages/store/store.js'

import _ from 'lodash';
import Login from 'src/components/App'

describe('Login.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><div id="app"></div></div>',
      components: { Login }
    }).$mount()
    // const Constructor = Vue.extend(Login)
    // const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.login-box-msg').textContent)
      .to.equal('Войдите для продолжения работы')
  })
})
