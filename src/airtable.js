
var axios = require('axios');
import Vue from "vue";
const baseId = "appTstPp0g20fQA2b";
const tables = "tblkFpWzKkk9IbNIf";
const api = "keyaJEowLnEfKAamU";
const url = `https://api.airtable.com/v0/${baseId}/${tables}?api_key=${api}`;

export default new class Airtable {
  constructor() {

  }

  init_airtable() {
    return new Promise((resolved) => {
      axios.get(url).then((res) => {
        // Sort the meets by date if they are not yet in order
        var meets = res.data.records.map(i => i.fields).sort((a, b) => parseInt(a.Date.split(":")[0].split("T")[0].split("-").join("")) - parseInt(b.Date.split(":")[0].split("T")[0].split("-").join("")));

        for (let i = 0; i < meets.length; i++) {
          var month_int = meets[i]['Date'].split(":")[0].split("T")[0].split("-")[1];
          var day_int = meets[i]['Date'].split(":")[0].split("T")[0].split("-")[2];
          meets[i]['Month'] = this.getMonth(month_int);
          meets[i]['Day'] = day_int;
          meets[i]['url'] = `${meets[i].Name.toLowerCase().split(" ").join("-")}-${meets[i].Month.toLowerCase()}-${meets[i].Day.toLowerCase()}`;
        }

        Vue.prototype.$meets = meets;

        console.log(meets);
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
