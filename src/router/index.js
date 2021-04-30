import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import city from '@/pages/city'
import detail from '@/pages/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
