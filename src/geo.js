
var axios = require('axios');
import Vue from "vue";


export default new class Geo {
  constructor() {

  }

  init(params) {
    return new Promise((res) => {
     const options = {
        method: 'GET',
        url: 'https://ip-geo-location.p.rapidapi.com/ip/check',
        params: params,
        headers: {
            'X-RapidAPI-Key': '6d50373928msh8ea7650abbc2053p1c1465jsn8d11a1823388',
            'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
        }
        };

        axios.request(options).then(function (response) {
            Vue.prototype.$geo = response.data;
            res(response.data);
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
      })
    }

    nearest(params, ) {
      
     return new Promise((res) => {
        const options = {
          method: 'GET',
          url: `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${Vue.prototype.$geo.location.latitude}${Vue.prototype.$geo.location.longitude}/nearbyCities`,
          params: params,
          headers: {
            'X-RapidAPI-Key': '6d50373928msh8ea7650abbc2053p1c1465jsn8d11a1823388',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
          res(response.data)
        }).catch(function (error) {
          console.error(error);
        });
     })
    }

}
