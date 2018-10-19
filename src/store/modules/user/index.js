import apis from '@/api'
// console.log(apis);
const user = {
  state: {
    token : '123',
    userinfo : {}
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token || '';
    },
    SET_URSER_INFO: (state, userinfo) => {
      state.userinfo = userinfo || {};
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
    getUserInfo({ dispatch, commit }){
      return dispatch('fetch', apis.user.getUserInfo).then(data => {
        commit('SET_URSER_INFO', data.data);
      })
    }
  }
};

export default user;
