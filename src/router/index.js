import Vue from 'vue'
import Router from 'vue-router'
import Error404 from '@/view/lib/404'

import Main from '@/view/main'
import Consultation from '@/view/main/consultation'
import Product from '@/view/main/product'
import Home from '@/view/main/home'
Vue.use(Router)
// 兼容ie9 临时处理(如果scrollBehavior启用)
// if (process.env.VUE_ENV !== 'server') {
//   window.history.replaceState = window.history.replaceState || function () {}
// }
export default () =>  {
  const router =  new Router({
    mode: 'history',
    fallback: false,
    // scrollBehavior: () => ({ y: 0 }), // ie 9 此选项将导致replaceState 报错
    routes: [
      {
        path: '/',
        redirect: '/main',
        meta : {
          title : '首页2sada11'
        }
      },
      {
        path: '/home',
        component : Home,
        name : 'home',
        meta : {
          title : '首页'
        }
      },
      {
        path: '/main/consultation',
        component : Consultation,
        name : 'consultation',
        meta : {
          title : '咨询'
        }
      },
      {
        path: '/product',
        component : Product,
        name : 'product',
        meta : {
          title : '产品'
        }
      },
      {
        path: '/404',
        component: Error404,
        meta : {
          title : '错误'
        }
      },
      { path: '*',redirect: '/404' },
    ]
  })

  return router;
}
