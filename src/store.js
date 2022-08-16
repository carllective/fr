import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    your_location: null,
    your_ip: null,
    loading: true,
    lang: "en",
    activeFilter: "Date",
    activeProvince: "Ontario",
    scrollY: 0
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
    setLang(state, lang) {
      Vue.set(state, "lang", lang);
    },
    setActiveFilter(state, activeFilter) {
      Vue.set(state, "activeFilter", activeFilter);
    },
    setActiveProvince(state, activeProvince) {
      Vue.set(state, "activeProvince", activeProvince);
    },
    setScrollY(state, scrollY) {
      Vue.set(state, "scrollY", scrollY);
    },
  },

  actions: {
    setYourIp(context, your_ip) {
      context.commit("setYourIp", your_ip);
    },
    setLoading(context, loading) {
      context.commit("setLoading", loading);
    },
    setLang(context, lang) {
      context.commit("setLang", lang);
    },
  },
  plugins: [createPersistedState()],
});
