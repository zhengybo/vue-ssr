
const user = {
  state: {
    token : '123',
    userinfo : {}
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token || '';
    },
    SET_URSER_INFO: (state, token) => {
      state.token = token || '';
    },
  },

  actions: {
    setToken({ commit }){
      commit('SET_TOKEN',123)
    },

    clearInfo({ commit, state }){ //清理信息
      return new Promise((resolve,reject) => {
        commit('SET_TOKEN');
        commit('SET_USERNAME');
        commit('SET_USERINFO');
        resolve();
      })
    },
    getUserInfo({ store, commit }){
      return store.dispatch('fetch', {}).then(data => {
        commit('SET_URSER_INFO', data);
      })
    }
  }
};

export default user;
