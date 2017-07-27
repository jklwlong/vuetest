import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Spider from '@/components/Spider'

Vue.use(Router)

export default new Router({
   mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/spider',
      name: 'Spider',
      component: Spider
    }
  ]
})
