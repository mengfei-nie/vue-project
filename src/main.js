import './assets/js/flexible.debug.js'
import './assets/css/style.css'
import Vue from 'vue'
import App from './App'
import router from './router.js'
import store from './store'

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
