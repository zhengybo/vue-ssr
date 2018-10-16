import Vue from 'vue'
import App from './App.vue'
import createStore from './store'
import createRouter from './router'
import mixin from './mixin'
import { sync } from 'vuex-router-sync'

Vue.mixin(mixin)

export default function createApp () {

  const store = createStore()
  const router = createRouter()

  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })


  return { app, router, store }
}
