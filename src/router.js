import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/homePage/Home'
import Homepage1 from './components/Home_page1'

import Classify from './components/homePage/Classify'
import Classifypage1 from './components/homePage/Classify_page1'

import Mine from './components/homePage/Mine'

// 模块化中使用
Vue.use(Router)

// 定义路由规则
const router = new Router({
  hashbang: false,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home/homePage1',
      component: Homepage1
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/classify/classifyPage1',
      component: Classifypage1
    }
  ]
})

// 路由切换
router.beforeEach((to, from, next) => {
  console.log(to.path)
  // 假如在首页，去除动画
  // switch (to.path) {
  //   case '/page1':

  // }
  setTimeout(next, 50)
})
export default router
