import Vue from 'vue'
import App from './App.vue'
import mixin from './mixin'
import createStore from './store'
import createRouter from './router'
import { sync } from 'vuex-router-sync'
import { http } from './js/http'
require('@/components').default(Vue) //注册全局组件
Vue.mixin(...mixin)
export default function createApp () {
  const store = createStore()
  const router = createRouter()
  sync(store, router)

  const app = new Vue({
    created(){
      Vue.prototype.$http = http(store).bind(this)
    },
    router,
    store,
    render: h => h(App)
  })


  return { app, router, store }
}
