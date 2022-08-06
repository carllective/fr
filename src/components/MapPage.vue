<template>
  <div id="map_page">
    <div id="map"></div>
  </div>
</template>

<script>
var L = require('leaflet');
import {mapState} from "vuex";

// var leafletMap = require('leaflet-map');
export default {
  name: 'MeetsPage',
  components: {
  },
  watch: {
    your_location: {
      handler(e) {
        console.log(e);
          if (e) {
            this.getMyLocation();
          }
      },
      deep:true
    }
  },
  computed: {
    ...mapState(["your_location", "lang"])
  },
  methods: {
    renderMap() {
      return new Promise((res) => {
        if (this.your_location) {
          this.centerLat = this.your_location.lat;
          this.centerLong = this.your_location.lon;
        }
        this.map = L.map('map', {
            center: [this.centerLat , this.centerLong],
            zoom: this.your_location ? 10 : 4
        });
        L.tileLayer('https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=UhqYthhZlPgjJOmBxOln', {attribution: '<a href="https://carto.com/" target="_blank">&copy; CARTO</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}).addTo(this.map);
        res(this.map);
      })
      
    },

    async getMeetsLocations() {

      var meetsIcon = L.icon({
          iconUrl: require('../assets/C_Map_Marker_Car_Meets.png'),
          iconSize: [30, 42],
          iconAnchor: [15, 42],
      });

       var meetsIconToday = L.icon({
          iconUrl: require('../assets/C_Map_Marker_Car_Meets_TODAY.png'),
          iconSize: [30, 42],
          iconAnchor: [15, 42],
      });


      this.$meets.forEach((i => {

        // Only place markers if they have latitude and longitudes
        if (i.Lat && i.Long) {

          var marker = L.marker([i.Lat, i.Long], {icon: i.Today ? meetsIconToday : meetsIcon}).addTo(this.map)
          .bindPopup(`${i.Today ? `<h3 style="color: red; text-align: center;">TODAY!</h3>` : ``}<h3 style="color: black; margin: 0; text-align: center;">${i.Name}</h3>
          <p style="color: black; margin: 0; text-align: center;">${i.Address}</p>
          <p style="text-align: center;"><a href="${i.url}" >${this.lang === 'en' ? 'Read More' : 'Lire Plus'}</a></p>`, {offset: L.point(0, -30)});
          marker.on("mouseover", () => {
            marker.openPopup();
          });
          // marker.on("mouseout", () => {
          //   marker.closePopup();
          // })
        }
      }))
    },

    async getMyLocation() {
      if (this.your_location) {
        this.map.setZoom(10);
        this.map.panTo(new L.LatLng(this.your_location.lat, this.your_location.lon));

        var myIcon = L.icon({
          iconUrl: require('../assets/C_Map_Marker.png'),
          iconSize: [38, 53],
          iconAnchor: [19, 53],
        });

        var yourmarker = L.marker([this.your_location.lat, this.your_location.lon], {icon: myIcon}).addTo(this.map)
        .bindPopup('<p style="color: black;">Your Location</p>', {offset: L.point(0, -40)});

        yourmarker.on("mouseover", () => {
          yourmarker.openPopup();
        });
        yourmarker.on("mouseout", () => {
          yourmarker.closePopup();
        })
      }
    }
  },
  data() {
    return {
      map: null,
      centerLat: 56.1304,
      centerLong: -106.3468
    }
  },
  mounted() {
   this.renderMap().then(() => Promise.all([this.getMeetsLocations(), this.getMyLocation()]));
   window.scrollTo(0, 0);
  }
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";
#map {
    min-height: 86vh;
    z-index: 0;
}
p {

}
</style>
