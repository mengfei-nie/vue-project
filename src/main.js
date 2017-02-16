import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
new Vue({
  router,
  // es6 render函数
  // render: function (f) {
  //   return f(App)
  // }
  render: f => f(App)
}).$mount('#app')
