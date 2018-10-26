import { Cookie } from '@/js/public'
const isClient = process.env.VUE_ENV === 'client'

if(isClient){ // 兼容 不支持history浏览器
  if(!window.history.replaceState){
    let index = Cookie.getCookie('home-index') || 0;
    window.__INITIAL_STATE__.home.index.v = index;
    Cookie.deleteCookie('home-index');
  }
}
const home = {
  state: {
    index : {
      v : 0
    }
  },
  mutations: {
    SET_INDEX : (state, index = 0) => {
      state.index = { v : index };
    }
  },

  actions: {
    setIndex({ commit }, index){
      commit('SET_INDEX', index);
    }
  }
};

export default home;
