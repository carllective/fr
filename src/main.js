import Vue from 'vue'
import App from './App.vue'
import airtable from './airtable';
import geo from './geo';
import store from './store';
import router from './router';


Vue.config.productionTip = false;
airtable.init_airtable().then(() => {
  Vue.prototype.$geoAPI = geo;
  Vue.prototype.$geoAPI.init({format: 'json'});

    new Vue({
      store,
      router,
      render: h => h(App),
    }).$mount('#app')

});


