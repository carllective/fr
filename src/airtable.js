
var axios = require('axios');
import Vue from "vue";
import latlng from "latitude-longitude";
import store from "./store";
// import store from "./store.js";
const baseId = "appTstPp0g20fQA2b";
const tables = "tblkFpWzKkk9IbNIf";
const tables2 = "tbljvU0FGVULYx6rM";
const api = "keyaJEowLnEfKAamU";
const url = `https://api.airtable.com/v0/${baseId}/${tables}?api_key=${api}`;
const url2 = `https://api.airtable.com/v0/${baseId}/${tables2}?api_key=${api}`;



export default new class Airtable {
  constructor() {
    // this.process_latlng();
  }

  distance(coords) {
    if (!store.state.your_location) {
      return null;
    }
    return latlng.getDistance([store.state.your_location.lat, store.state.your_location.lon], [coords.lat, coords.lng]);
  }

  process_latlng(id, address) {
    return new Promise((coordsRes) => {
      var Airtable = require('airtable');
      var base = new Airtable({apiKey: api}).base('appTstPp0g20fQA2b');
      var parsedString = address.split(" ").join("%20");
      axios.get(`https://api.geoapify.com/v1/geocode/search?text=${parsedString}&apiKey=7f74dc1e41fd4ffaa8377ea7d95ce297`).then((res) => {
        return {
          lat: res.data.features[0].properties.lat,
          long: res.data.features[0].properties.lon
        }
      }).then((coords) => {
        base('Table 1').update([
          {
            "id": id,
            "fields": {
              "Lat": coords.lat.toString(),
              "Long": coords.long.toString(),
            }
          }]);
          coordsRes(coords);
      });
    })
  }

  // Fetch the rest of the website content from Airtable
  init_airtable2() {
    return new Promise((resolved) => {
      axios.get(url2).then((res) => {
        // console.log(res.data.records[0].fields);

        // French translation
        if (store.state.lang === "fr") {
          Vue.prototype.$header = res.data.records[0].fields.Header_fr;
          Vue.prototype.$smalltext = res.data.records[0].fields.Small_Text_fr;
          Vue.prototype.$CTA = res.data.records[0].fields.CTA_fr;
          Vue.prototype.$sort_CTA = res.data.records[0].fields.Sort_CTA_fr;

        // English translation
        } else {
          Vue.prototype.$header = res.data.records[0].fields.Header;
          Vue.prototype.$smalltext = res.data.records[0].fields.Small_Text;
          Vue.prototype.$CTA = res.data.records[0].fields.CTA;
          Vue.prototype.$sort_CTA = res.data.records[0].fields.Sort_CTA;
        }
        Vue.prototype.$og_image =  res.data.records[0].fields.og_image;
        resolved(res);
      });
    });
  }

  // Fetch the meets from Airtable
  init_airtable() {
    return new Promise((resolved) => {
      axios.get(url).then((res) => {
        
        // Meets object to include its fields and ID
        var meets = res.data.records.map(i => {
          return {...i.fields, id: i.id};
        })
        // Hide past ones by date
        .filter((i => parseInt(i.Date.split("-").join("")) >= this.numericDate()))
        // Hide the "Hidden" ones
        .filter(i => i.Hidden !== true)
        // Sort in order by Date
        .sort((a, b) => parseInt(a.Date.split(":")[0].split("T")[0].split("-").join("")) - parseInt(b.Date.split(":")[0].split("T")[0].split("-").join("")));
        console.log(meets, this.numericDate(), parseInt(meets[0].Date.split("-").join("")));
        var counter = 0;

        for (let i = 0; i < meets.length; i++) {
          if (meets[i]['Date'])  {
            var month_int = meets[i]['Date'].split(":")[0].split("T")[0].split("-")[1];
            var day_int = meets[i]['Date'].split(":")[0].split("T")[0].split("-")[2];
            var year_int = meets[i]['Date'].split("-")[0];
          }
          if (!meets[i]['Lat'] || !meets[i]['Long']) {
            this.process_latlng(meets[i].id, meets[i].Address).then((coords) => {

              // Sets the coordinates right after it logs it into Airtable
              meets[i]['Lat'] = coords.lat;
              meets[i]['Long'] = coords.long;
              // console.log(meets[i]['Lat'], meets[i]['Long']);

            });  
          } else {
            meets[i]['DistanceFromMe'] = this.distance({lat: parseFloat(meets[i]['Lat']), lng: parseFloat(meets[i]['Long'])});
          }

          if (day_int) 
            meets[i]['Day'] = day_int;
        
          // English month and if Today or not
          if (month_int && store.state.lang !== "fr")  {
            meets[i]['Month'] = this.getMonth(month_int);

            var parsedDate = new Date().toString().split(" ").splice(0, 4).join(" "); //eg. "Thu Aug 11 2022"
           // If this meet is today, add an extra property to the array so you can highlight it in the DOM
            if (parsedDate.includes(`${meets[i]['Month'].substr(0, 3)} ${meets[i]['Day']} ${year_int}`)) {
              // console.log(meets[i].Date, parsedDate.includes(`${meets[i]['Month'].substr(0, 3)} ${meets[i]['Day']} ${year_int}`));
              meets[i]['Today'] = true;
            } 

          }

          // French month and if Today or not
          else if (month_int && store.state.lang === "fr") {
            meets[i]['Month'] = this.getMonth_fr(month_int);

            var parsedDateFr =  new Date().toLocaleString('fr-FR', {month: "long", day: "2-digit", year: "numeric"}); //eg. "11 août 2022"
            // If this meet is today, add an extra property to the array so you can highlight it in the DOM
            if (parsedDateFr.normalize('NFD').replace(/\p{Diacritic}/gu, "") === `${meets[i]['Day']} ${meets[i]['Month']} ${year_int}`.toLowerCase()) {
              meets[i]['Today'] = true;
            } 

          }
            
          
          if (meets[i].Name) 
            meets[i]['url'] = `${meets[i].Name.toLowerCase().split(" ").join("-")}-${meets[i].Month.toLowerCase()}-${meets[i].Day.toLowerCase()}`;


          counter++;
        }
        
        if (counter === meets.length) {
          // console.log(meets);
          Vue.prototype.$meets = meets;
          resolved(meets);
        }
    
      })
    })
  }

  numericDate() {
    console.log(new Date().getMonth() + 1);
    return parseInt(`${new Date().getFullYear()}${("0" + (new Date().getMonth() + 1)).slice(-2)}${("0" + new Date().getDate()).slice(-2)}`);
  }

  getMonth_fr(int) {
    switch(int) {
      case "01": {
        return "Janvier";
      }
      case "02": {
        return "Fevrier";
      }
      case "03": {
        return "Mars";
      }
      case "04": {
        return "Avril";
      }
      case "05": {
        return "Mai";
      }
      case "06": {
        return "Juin";
      }
      case "07": {
        return "Juillet";
      }
      case "08": {
        return "Aout";
      }
      case "09": {
        return "Septembre";
      }
      case "10": {
        return "Octobre";
      }
      case "11": {
        return "Novembre";
      }
      case "12": {
        return "Decembre";
      }
    }
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
