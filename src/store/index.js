import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import modules from './modules'
import mutations from './mutations'

Vue.use(Vuex)

export default function createStore () {
  return new Vuex.Store({
    state,
    actions,
    getters,
    modules,
    mutations
  })
}
