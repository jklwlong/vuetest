import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Spider from '@/components/Spider'
import imgList from '@/components/imgList'

Vue.use(Router)

export default new Router({
   mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: Index
    },
    {
      path: '/spider',
      name: '获取数据',
      component: Spider
    },
    {
      path: '/imgList',
      name: '图表',
      component: imgList
    }
  ]
})
