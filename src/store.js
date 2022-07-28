import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    your_location: null,
    your_ip: null
  },

  mutations: {
    setYourLocation(state, your_location) {
      Vue.set(state, "your_location", your_location);
    },
    setYourIp(state, your_ip) {
      Vue.set(state, "your_ip", your_ip);
    },
  },

  actions: {
    setYourIp(context, your_ip) {
      context.commit("setYourIp", your_ip);
    },
  },
  plugins: [createPersistedState()],
});
