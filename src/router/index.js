import Vue from 'vue'
import Router from 'vue-router'
import Home from './../view/home'
import News from './../view/home/news'
import Detail from './../view/detail'
import Error404 from './../view/404'
Vue.use(Router)

export default () =>  {
  const router =  new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/',
        redirect: '/home',
        meta : {
          title : '首页'
        }
      },
      {
        path: '/home',
        component : Home,
        name : 'home',
        children : [
          {
            path: '/home/news',
            name : 'news',
            component : News,
            meta : {
              title : '新闻业'
            }
          }
        ],
        meta : {
          title : '首页'
        }
      },
      {
        path: '/detail',
        component : Detail,
        name : 'detail',
        meta : {
          title : '详情'
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
