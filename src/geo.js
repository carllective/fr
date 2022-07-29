
var axios = require('axios');
// import Vue from "vue";
import store from "./store.js";


export default new class Geo {
  constructor() {
    // console.log(this.distance(43.8648901,-79.2420533,43.7915939,-79.5532658));
  }

  distance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 + 
            c(lat1 * p) * c(lat2 * p) * 
            (1 - c((lon2 - lon1) * p))/2;
  
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }

  async init() {
    return new Promise((res) => {
     
      // Fetch your IP (Free unlimited API)
      axios.get("https://api.bigdatacloud.net/data/client-ip").then((ip) => {
        return ip.data.ipString;
      }).then((fetched_ip) => {

        // If cookie hasn't stored your location (ie. first time logging in) OR your IP address changes, request API call to fetch your location
        // I based this off of IP change because it's safe to say if your IP changes, there's possibility you changed location. Reduce API calls
      if (!store.state.your_location || fetched_ip !== store.state.your_ip) {

        // Store your IP
        store.commit("setYourIp", fetched_ip);

        // Fetch your Latitude and Longitude
        navigator.geolocation.getCurrentPosition((e) => {

          // Get your EXACT Location ("Reverse Geocoding"). Location based on IP alone was inaccurate when in public places.
          axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${e.coords.latitude}&lon=${e.coords.longitude}&apiKey=7f74dc1e41fd4ffaa8377ea7d95ce297`).then((location) => {
          
          // Set your location
          store.commit("setYourLocation", location.data.features[0].properties);

          // Return promise.
          res(location.data.features[0].properties);

          }, (error) => {
            console.log(error, "Try again in a minute.");
          }) 
        })
        }
        else {
          res(store.state.your_location);
        }
       })
      })
    }

    nearest(params) {
      
     return new Promise((res) => {
        const options = {
          method: 'GET',
          url: `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${store.state.your_location.lat}${store.state.your_location.lon}/nearbyCities`,
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
