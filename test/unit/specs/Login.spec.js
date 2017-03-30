import Vue from 'vue'
import Login from 'src/components/auth/Login'

describe('Login.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.login-box-msg').textContent)
      .to.equal('Войдите для продолжения работы')
  })
})
