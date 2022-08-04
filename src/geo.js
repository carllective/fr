
var axios = require('axios');
// import Vue from "vue";
import store from "./store.js";


export default new class Geo {
  constructor() {
  }

  async init() {
    return new Promise((res) => {
     
      // Fetch your IP (Free unlimited API)
      axios.get("https://api.bigdatacloud.net/data/client-ip").then((ip) => {
        console.log(navigator.language);
        return ip.data.ipString;
      }).then((fetched_ip) => {

        var check_if_location_data_is_valid = [];
        if (store.state.your_location) {
            check_if_location_data_is_valid = [
            typeof store.state.your_location.city === 'string',
            typeof store.state.your_location.state_code === 'string',
            typeof store.state.your_location.country === 'string',
          ]
        }
        

        // If cookie hasn't stored your location (ie. first time logging in),
        // OR your IP address changes, 
        // OR the location data is gibbberish (can happen if I push changes and user ahsn't refreshed cookies),
        // then request API call to fetch your location/
        // I based this off of IP change because it's safe to say if your IP changes, there's possibility you changed location. Reduce API calls
      if (!store.state.your_location || fetched_ip !== store.state.your_ip || check_if_location_data_is_valid.indexOf(false) > -1) {

        // Store your IP
        store.commit("setYourIp", fetched_ip);

        // Fetch your Latitude and Longitude and Location
        this.fetchLocation().then((location) => res(location));
        
        }
        else {
          res(store.state.your_location);
        }
       })
      })
    }

    fetchLocation() {
      console.log("setting Location...");

      return new Promise((res) => {
        navigator.geolocation.getCurrentPosition((e) => {
        // Get your EXACT Location ("Reverse Geocoding"). Location based on IP alone was inaccurate when in public places.
          axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${e.coords.latitude}&lon=${e.coords.longitude}&apiKey=7f74dc1e41fd4ffaa8377ea7d95ce297`).then((location) => {
          console.log("making API call");
          // Set your location
          store.commit("setYourLocation", location.data.features[0].properties);
          // Return promise.
          res(location.data.features[0].properties);

          }, (error) => {
            console.log(error, "Try again in a minute.");
          }) 
        })
      })
    }

    nearest(params) {
      
     return new Promise((res) => {
      if (store.state.your_location) {
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
          console.log("Please set your location", error);
        });
      } else {
        res();
      }
     })
    }

}
