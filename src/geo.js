
var axios = require('axios');
// import Vue from "vue";
import store from "./store.js";


export default new class Geo {
  constructor() {

  }

  init(params) {
    return new Promise((res) => {

      // This one seems to give the locations all for free, but would have to test from different places (VPNs are flagged)
      // axios.get("https://api.bigdatacloud.net/data/reverse-geocode-client").then((res) => {
      //   console.log(res);
      // })


      axios.get("https://api.bigdatacloud.net/data/client-ip").then((ip) => {
        return ip.data.ipString;
      }).then((fetched_ip) => {

        // If cookie hasn't stored your location OR your IP address changes, request API call to fetch your location
      if (!store.state.your_location || fetched_ip !== store.state.your_ip) {

        store.commit("setYourIp", fetched_ip);

        const options = {
          method: 'GET',
          url: 'https://api.geoapify.com/v1/ipinfo?&apiKey=7f74dc1e41fd4ffaa8377ea7d95ce297',
          params: params
        };
  
          axios.request(options).then(function (response) {
              store.commit("setYourLocation", response.data);
              console.log("made Location API call");
              res(response.data);
          }).catch(function (error) {
              console.error(error);
          });
        }
        else {
          res(store.state.your_location);
        }

      })

      
      })
    }

    nearest(params, ) {
      
     return new Promise((res) => {
        const options = {
          method: 'GET',
          url: `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${store.state.your_location.location.latitude}${store.state.your_location.location.longitude}/nearbyCities`,
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
