import Vue from 'vue'
import App from './App.vue'
import airtable from './airtable';
import geo from './geo';
import store from './store';
import router from './router';
import VueHead from 'vue-head';
Vue.config.productionTip = false;
Vue.use(VueHead);

if (window.location.href.includes("fr.")) {
  store.commit("setLang", "fr");
} else {
  store.commit("setLang", "en");
}

store.commit("setLoading", true);
setTimeout(() => {
  store.commit("setLoading", false);
}, 2000);

function initVue() {
  return new Promise((res) => {
      new Vue({
        store,
        router,
        render: h => h(App),
      }).$mount('#app');
      res();
    })
}
Vue.prototype.$geoAPI = geo;
Vue.prototype.$geoAPI.init({format: 'json'}).then((Promise.all([airtable.init_airtable(), airtable.init_airtable2()]).then(() => initVue())));

  
  



