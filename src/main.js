import Vue from 'vue'
import App from './App.vue'
import airtable from './airtable';
import geo from './geo';
import store from './store';
import router from './router';
Vue.config.productionTip = false;
store.commit("setLoading", true);
setTimeout(() => {
  store.commit("setLoading", false);
}, 1500);

function initVue() {
  return new Promise((res) => {
    Vue.prototype.$geoAPI = geo;
    Vue.prototype.$geoAPI.init({format: 'json'});

      new Vue({
        store,
        router,
        render: h => h(App),
      }).$mount('#app');
      res();
    })
}
airtable.init_airtable().then(() => initVue());
  
  



