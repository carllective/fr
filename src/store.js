import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    your_location: null,
    your_ip: null,
    loading: true
  },

  mutations: {
    setYourLocation(state, your_location) {
      Vue.set(state, "your_location", your_location);
    },
    setYourIp(state, your_ip) {
      Vue.set(state, "your_ip", your_ip);
    },
    setLoading(state, loading) {
      Vue.set(state, "loading", loading);
    },
  },

  actions: {
    setYourIp(context, your_ip) {
      context.commit("setYourIp", your_ip);
    },
    setLoading(context, loading) {
      context.commit("setLoading", loading);
    },
  },
  plugins: [createPersistedState()],
});
