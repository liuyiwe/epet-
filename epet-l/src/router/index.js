import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../components/main/main.vue'
import type from '../components/type/type.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import login from '../components/login/login.vue'

import detail from '../components/detail/detail.vue'
import brand from '../components/brand/brand.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: main
    },
    {
      path: '/type',
      component: type,
      children: [
        {
          path: '/',
          redirect: 'detail'
        },
        {
          path: 'detail',
          component: detail
        },
        {
          path: 'brand',
          component: brand
        }
      ]
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/login',
      component: login
    }
  ]
})
