import Vue from 'vue'
import Router from 'vue-router'
import Hello from './components/Hello'
import Page1 from './components/Page1'
import Page2 from './components/Page2'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to.path)
  // 假如在首页，去除动画
  // switch (to.path) {
  //   case '/page1':

  // }
  setTimeout(next, 50)
})
export default router
