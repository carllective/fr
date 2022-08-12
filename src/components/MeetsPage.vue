<template>
  <div id="meetspage">
    <div class="snapshot">
      <img @click="screenGrab" src="../assets/snapshot.png"/>
    </div>
    <div class="banner" id="banner" :style="`background-image: url(${info.Image ? info.Image[0].url : ''})`" v-if="info">
    <div class="logo">
      <img src="../assets/Icon.png"/>
    </div>
      <div class="info">
        <div class="title">
          <h1 v-if="info.Name">{{info.Name}}</h1>
        </div>
        <div class="location">
          <p class="addy" v-if="info.Address">{{info.Address}}</p>
          <h3 v-if="info.Town">{{info.Town}}, {{info.Province}}</h3>
        </div>
        <div class="date">
          <span v-if="lang === 'en'">
            <h4 class="month" v-if="info.Month">{{info.Month}}</h4>
            <h3 class="day" v-if="info.Day">{{info.Day}}</h3>
        </span>
        <span v-else>
            <h3 class="day" v-if="info.Day">{{info.Day}}</h3>
            <h4 class="month" v-if="info.Month">{{info.Month}}</h4>
        </span>
         <p class="time">{{info.Time}}</p>
        </div>
      </div>
    </div>
    <div class="page-wrapper">
        <div id="map"></div>

    <div class="page"  v-if="info">
    
      <div v-if="info.Info">
       <h2>{{lang === "en" ? "Details" : "Détails"}}</h2>
        <p v-html="parsedInfo(info.Info)"></p>
      </div>
        <div class="ctas">
          <a class="button" target="_blank" v-if="info.Calendar_Link" :href="info.Calendar_Link">{{lang === "en" ? "Save To Calendar" : "Télécharger dans le Calendrier"}}</a>
          <a class="button" target="_blank" v-if="info.Website_Link" :href="info.Website_Link">{{lang === "en" ? "Visit Website" : "Consulter le Site-web"}}</a>
          <a class="button" target="_blank" v-if="info.Buy_Tickets_Link" :href="info.Buy_Tickets_Link">{{lang === "en" ? "Buy Tickets" : "Acheter des Billets"}}</a>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import * as htmlToImage from 'html-to-image';
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import {mapState} from "vuex";
var L = require('leaflet');
var download = require("downloadjs");
export default {
  name: 'MeetsPage',
  components: {
  },
  watch: {

  },
  computed: {
    ...mapState([ "lang"])
    
  },
  methods: {
    parsedInfo(string) {
      var parsed = string.replace(/(?:\r\n|\r|\n)/g, '<br />');
      return parsed;
    },
    renderMap() {
      return new Promise((res) => {
        
        this.map = L.map('map', {
            center: [this.info.Lat , this.info.Long],
            zoom: 12
        });
        L.tileLayer('https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=UhqYthhZlPgjJOmBxOln', {attribution: '<a href="https://carto.com/" target="_blank">&copy; CARTO</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}).addTo(this.map);
        
        var meetsIconToday = L.icon({
          iconUrl: require('../assets/C_Map_Marker_Car_Meets_TODAY.png'),
          iconSize: [30, 42],
          iconAnchor: [15, 42],
      });

      L.marker([this.info.Lat, this.info.Long], {icon: meetsIconToday}).addTo(this.map);
        
        res(this.map);
      })
      
    },
    screenGrab() {
      var div = document.getElementById('banner');
      htmlToImage.toPng(div)
        .then(function (dataUrl) {
        console.log(dataUrl);
        download(dataUrl);
      });
    }
  },
  data() {
    return {
      info:null,
      map: null,
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    new Promise((res) => {
      try {
        this.info = this.$meets.filter(i => `/${i.url}` === window.location.pathname)[0];
        res(this.info);
      } catch {
        window.location.href = "/";
      }
    }).then(() => this.renderMap());
  }
  
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";
#meetspage {
  min-height: 100vh;
  background: white;
}
.page {
  padding: 60px 20px;
  margin: 0 auto;
  display: inline-block;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (min-width: 801px) {
    width: 50%;
  }
}
.banner {
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  background-color: black;
  &:after {
    content:'';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgb(30,30,30);
    background: linear-gradient(0deg, rgba(30,30,30,0.8856136204481793) 0%, rgba(20,20,20,0.6167060574229692) 47%, rgba(0,0,0,0) 100%);
    z-index: 0;
    pointer-events: none;
  }
}
.title, .date, .location {
  display: inline-block;
  vertical-align: middle;
}

.title {
  margin-left: 20px;
  max-width: calc(100% - 40px);
}
.date {
  text-align: right;
  right: 20px;
  // position: absolute;
  bottom: 20px;
  z-index: 1;
  width: calc(30% - 20px);
}
.location {
  width: calc(70% - 40px);
  margin: 0 20px;
}
.addy {
  margin-top: 0;
}

.time {
  margin-bottom: 0;
  color: $highlightcol;
}

.info {
  position: absolute;
  bottom: 0;
  z-index: 1;
  max-width: 900px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 20px;
}
.day {
  font-family: 'Reservation Wide Blk';
  font-size: 30px;
  color: $highlightcol;
  padding-bottom: 5%;
}
.month {
  color: $highlightcol;
}
.page {
  @media screen and (min-width: 801px) {
    width: calc(50% - 60px);
  }
  @media screen and (max-width: 800px) {
    width: calc(100% - 40px);
  }
  h2, p {
    color: black;
  }
}
.pageinfo {
  width: 100%;
  p {
    margin-top: 10px;
  }
  td {
    padding-bottom: 40px;
    &:last-child {
      padding-left: 20px;
    }
  }
}
.button {
  &:not(.fullwidth) {
    width: calc(50% - 20px);
  }
  margin: 10px;
}
.fullwidth {
    width: calc(100% - 20px);
    background: $highlightcol;
}
.ctas {
  padding-top: 40px;
}
#map {
  
  @media screen and (max-width: 800px) {
    height: 200px;
    width: 100%;
  }
  @media screen and (min-width: 801px) {
    width: 50%;
    min-height: 500px;
    height: 100%;
  }
  
  display: inline-block;
  margin-right: 20px;
  z-index: 0;
}
#map, .page {
  vertical-align: middle;
}
#canvas {
  width: 100%;
  background: black;
  // min-height: 80vh;
}
#banner {
}
.snapshot {
  position: absolute;
  z-index: 2;
  top: 180px;
  right: 20px;
  cursor: pointer;
  img {
    width: 50px;
  }
}
.logo img {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 60px;
}
</style>
