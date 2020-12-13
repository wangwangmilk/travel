import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import city from '@/pages/city'

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
    }
  ]
})
