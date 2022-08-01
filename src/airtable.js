
var axios = require('axios');
import Vue from "vue";
// import store from "./store.js";
const baseId = "appTstPp0g20fQA2b";
const tables = "tblkFpWzKkk9IbNIf";
const api = "keyaJEowLnEfKAamU";
const url = `https://api.airtable.com/v0/${baseId}/${tables}?api_key=${api}`;



export default new class Airtable {
  constructor() {
    // this.process_latlng();
  }

  process_latlng(id, address) {
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: api}).base('appTstPp0g20fQA2b');
    var parsedString = address.split(" ").join("%20");
    axios.get(`https://api.geoapify.com/v1/geocode/search?text=${parsedString}&apiKey=7f74dc1e41fd4ffaa8377ea7d95ce297`).then((res) => {
      return {lat: res.data.features[0].properties.lat,
        long: res.data.features[0].properties.lon}
    }).then((coords) => {
      base('Table 1').update([
        {
          "id": id,
          "fields": {
            "Lat": coords.lat.toString(),
            "Long": coords.long.toString(),
          }
        }]);
    });
    
  }

  init_airtable() {
    return new Promise((resolved) => {
      axios.get(url).then((res) => {
        console.log(res);
        // Sort the meets by date if they are not yet in order
        var meets = res.data.records.map(i => {
          return {...i.fields, id: i.id};
        }).sort((a, b) => parseInt(a.Date.split(":")[0].split("T")[0].split("-").join("")) - parseInt(b.Date.split(":")[0].split("T")[0].split("-").join("")));
        console.log(meets);
        // console.log(meets, store.state.your_location);
        for (let i = 0; i < meets.length; i++) {
          if (meets[i]['Date'])  {
            var month_int = meets[i]['Date'].split(":")[0].split("T")[0].split("-")[1];
            var day_int = meets[i]['Date'].split(":")[0].split("T")[0].split("-")[2];
            var year_int = meets[i]['Date'].split("-")[0];
          }
          if (!meets[i]['Lat'] || !meets[i]['Long']) {
            this.process_latlng(meets[i].id, meets[i].Address );  
          }
          if (month_int) 
            meets[i]['Month'] = this.getMonth(month_int);
          if (day_int) 
            meets[i]['Day'] = day_int;
          if (meets[i].Name) 
            meets[i]['url'] = `${meets[i].Name.toLowerCase().split(" ").join("-")}-${meets[i].Month.toLowerCase()}-${meets[i].Day.toLowerCase()}`;

          // If this meet is today, add an extra property to the array so you can highlight it in the DOM
          if (new Date().toString().includes(`${meets[i]['Month'].split("").splice(0, 3).join("")} ${meets[i]['Day']} ${year_int}`)) {
            meets[i]['Today'] = true;
          } 
            
        }
        Vue.prototype.$meets = meets;

        // console.log(meets);
        resolved(meets);
      })
    })
  }

  getMonth(int) {
    switch(int) {
      case "01": {
        return "January";
      }
      case "02": {
        return "February";
      }
      case "03": {
        return "March";
      }
      case "04": {
        return "April";
      }
      case "05": {
        return "May";
      }
      case "06": {
        return "June";
      }
      case "07": {
        return "July";
      }
      case "08": {
        return "August";
      }
      case "09": {
        return "September";
      }
      case "10": {
        return "October";
      }
      case "11": {
        return "November";
      }
      case "12": {
        return "December";
      }
    }
  }
}
