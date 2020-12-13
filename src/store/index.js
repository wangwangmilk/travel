import Vue from 'vue'
import VueX from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(VueX)

export default new VueX.Store({
  state,
  mutations,
  actions: {
    // cxt上下文
    // changeCity({ commit, state }, payload) {
    //   console.log(commit, state, payload);
    //   commit("change", payload);
    // }
  }

})
