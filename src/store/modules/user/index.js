
const user = {
  state: {
    token : '123',
    firstHint : false //首次登陆提示
  },
  mutations: {
    SET_TOKEN: (state, token) => {
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
    }
  }
};

export default user;
