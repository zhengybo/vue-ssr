import Vue from 'vue'
import Router from 'vue-router'
import Error404 from '@/view/lib/404'

import Main from '@/view/main'
import Consultation from '@/view/main/consultation'
import Home from '@/view/main/home'
Vue.use(Router)

export default () =>  {
  const router =  new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/',
        redirect: '/main',
        meta : {
          title : '首页2sada11'
        }
      },
      {
        path: '/main',
        redirect: '/home',
        component : Main,
        meta : {
          title : '首页112'
        },
        children : [
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
          }
        ]
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
