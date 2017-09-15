import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Spider from '@/components/Spider'
import ImgList from '@/components/ImgList'
import Login from '@/components/Login'
import Frame from '@/components/common/Frame'

Vue.use(Router)

export default new Router({
   mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: Frame
    },
    {
      path: '/spider',
      name: '',
      component: Frame,
      children: [
            { path: '/', meta: { requireAuth: true }, component: Spider, name: '获取数据' }
        ]
    },
    {
      path: '/imgList',
      name: '',
      component: Frame,
      children: [
            { path: '/', component: ImgList, name: '图表' }
            // { path: 'test', component: ImgList, name: '图表1' }
        ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    }
  ]
})
