import Vue from 'vue'
import App from './App'
import router from './router.js'
import store from './store'
import './assets/css/style.css'

/* eslint-disable no-new */
new Vue({
  router,
  store,
  // es6 render函数
  // render: function (f) {
  //   return f(App)
  // }
  render: f => f(App)
}).$mount('#app')
