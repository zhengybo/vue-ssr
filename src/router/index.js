import Vue from 'vue'
import Router from 'vue-router'
import Home from './../view/home'
import Detail from './../view/detail'
import Error404 from './../view/404'
Vue.use(Router)

export default () =>  {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component : Home },
      { path: '/detail', component : Detail },
      { path: '404',component: Home },
      // { path: '*',redirect: '/404' },
    ]
  })
}
