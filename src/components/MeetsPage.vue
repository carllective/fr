
<template>
  <div id="meetspage">
    <div class="snapshot">
      <a @click="isolate(`prompt`)">
      <img  src="../assets/snapshot.png"/> <p>Fullscreen Banner</p>
      </a>
    </div>
    <div class="banner" id="banner" v-if="info" @click="isolate(``)">
    <div class="banner-image-wrapper" ref="bannerimagewrapper" id="bannerimagewrapper" :style="`background-image: url(${info.Image ? info.Image[0].url : ''});`">
      <!-- <img class="banner-image" ref="bannerimage" id="bannerimage" :src="`${info.Image ? info.Image[0].url : ''})`" /> -->
    </div>
    <div class="logo">
      <img src="../assets/Icon.png"/>
    </div>
      <div class="info" id="info">
        <div class="instagrams" v-if="instagrams.length">
          <transition v-for="(item, i) in instagrams" :key="i">
            <a :href="instagramsLink(item)" target="_blank">
              <small v-html="item"></small>
            </a>
          </transition>
        </div>
        
        <br/>
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
    <img :src="dataUrl" v-if="dataUrl"/>

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
/* eslint-disable no-unused-vars */
import * as htmlToImage from 'html-to-image';
import domtoimage from "dom-to-image";
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
        L.tileLayer('https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {attribution: '<a href="https://carto.com/" target="_blank">&copy; CARTO</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}).addTo(this.map);
        
        var meetsIconToday = L.icon({
          iconUrl: require('../assets/C_Map_Marker_Car_Meets_TODAY.png'),
          iconSize: [30, 42],
          iconAnchor: [15, 42],
      });

      L.marker([this.info.Lat, this.info.Long], {icon: meetsIconToday}).addTo(this.map);
        
        res(this.map);
      })
      
    },
    isolate(opt) {
      if (opt === `prompt`) {
        this.isolated = true;
      } else {
        this.isolated = false;
      }
      if (this.isolated) {
        document.getElementById("banner").style = `
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 100;
          height: 100%;
          margin-bottom: 100px;
          cursor: pointer;
      `;
      document.getElementById("info").style = `
          padding-bottom: 50px;
      `
      } else {
         document.getElementById("banner").style = ``;
         document.getElementById("info").style = `
          padding-bottom: 20px;
      `
      }
  
    },
    resizeImage(img) {
      const defaults = `position: absolute;
            display: block;
            left: 50%;
            top: 50%;
            transform: translateY(-50%)  translateX(-50%);`;

            // bannerimagewrapper height
            //image height
            var calculatedWidth = window.innerWidth / this.info.Image[0].width * this.info.Image[0].height;
            var bannerWrapperHeight = document.getElementById("bannerimagewrapper").getBoundingClientRect().height;
            // console.log(bannerWrapperHeight, calculatedWidth);

      if (img.width > img.height || calculatedWidth < bannerWrapperHeight) {
        document.getElementById("bannerimage").style = `
          height: 100%;
          ${defaults}
          `;
      } else {
        // this.resizeBannerImageWrapper();
        document.getElementById("bannerimage").style =  `
          width: 100%;
          ${defaults}
        `;
      }
    },

    instagramsLink(item) {
      if (item.includes("@")) {
        return `https://www.instagram.com/${item.split("@")[1]}`;
      }
      else if (item.includes("#")) {
        return `https://www.instagram.com/explore/tags/${item.split("#")[1]}`;
      }
    },

    screenGrab() {
      console.log(this.info.id);
      var div = document.getElementById('banner');
      htmlToImage.toPng(div)
        .then((dataUrl) => {
          console.log(dataUrl);
        // download(dataUrl);
        }, err => {
          console.warn(err);
        });
    }
  },

  data() {
    return {
      info:null,
      map: null,
      dataUrl: ``,
      isolated: false,
      instagrams: []
    }
  },
  beforeDestroy() {
    // window.removeEventListener("resize", () => this.resizeImage(this.info.Image[0]));
  },
  mounted() {
    // document.webkitCancelFullScreen();
    window.scrollTo(0, 0);
    new Promise((res) => {
      try {
        this.info = this.$meets.filter(i => `/${i.url}` === window.location.pathname)[0];

        res(this.info);
        if (this.info.Instagram) {
          // this.instagrams = this.info.Instagram.split("\n");
          this.instagrams = this.info.Instagram;
        }
      } catch {
        window.location.href = "/";
      }
    }).then(() =>{
      this.renderMap();
      this.$nextTick(() => {
        // this.resizeImage(this.info.Image[0]);
        window.addEventListener("resize", () => this.resizeImage(this.info.Image[0]));
      })
    });
  }
  
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";
#meetspage {
  min-height: 100vh;
  background: white;
  overscroll-behavior: none;
  overflow-x: hidden;
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
  overflow: hidden;
    &:after {
      content:'';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 60%;
      background: rgb(0,0,0);
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(20,20,20,0.6167060574229692) 47%, rgba(0,0,0,0) 100%);
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
small {
  margin-left: 20px;
  display: inline-block;
  font-size: 14px;
  font-family: Helvetica;
  color: black;
  background: white;
  padding: 10px;
  border-radius: 100px;
}
#canvas {
  width: 100%;
  background: black;
  // min-height: 80vh;
}
// #banner {
//   width: 600px;
// }
.snapshot {
  position: absolute;
  z-index: 2;
  top: 180px;
  right: 20px;
  padding-right: 10px;
  border-radius: 100px;
  background: black;
  cursor: pointer;
  img {
    width: 25px;
  }
  img, p {
    display: inline-block;
    margin: 0;
    vertical-align: middle;
    font-size: 10px;
  }
}
.logo img {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 60px;
}
.banner-image-wrapper {
  height: 100%;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  img {
      &:after {
      content:'';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 60%;
      background: rgb(0,0,0);
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(20,20,20,0.6167060574229692) 47%, rgba(0,0,0,0) 100%);
      z-index: 0;
      pointer-events: none;
    }
  }
}
</style>
