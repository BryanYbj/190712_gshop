/*
路由器模块对象
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

//声明使用插件
Vue.use(VueRouter)
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
export default new VueRouter({
  //所有路由
  routes:[
    {
      path: '/',
      redirect:'/msite',
    },
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFoot:true
      }

    },
    {
      path:'/login',
      component:Login
    },
  ]
})


