
<template>
  <div id="meetspage">
    <div :style="`position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; opacity: .05; background-image: url(${$bg_image}); background-size: 20px;`"></div>

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
      <img class="image" v-if="info.Image" :src="info.Image ? info.Image[0].url : ''"/>
        
        <br/>
        <div class="instagrams" v-if="instagrams.length">
          <transition v-for="(item, i) in instagrams" :key="i">
            <a :href="instagramsLink(item)" target="_blank">
              <div class="instagramicon">
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"/></svg>
              </div>
              <small v-html="item"></small>
            </a>
          </transition>
        </div>
        <div class="title">
          <h1 v-if="info.Name">{{info.Name}}</h1>
        </div>
        <div class="date">
          <span v-if="lang === 'en'">
            <h3 class="month" v-if="info.Month">
              <span class="month padright">{{info.Month.slice(0, 3)}}. {{info.Day}}</span>
              <span class="boldreserv">{{info.Time}}</span>
            </h3>
        </span>
        <span v-else>
            <h3 class="day" v-if="info.Day">{{info.Day}}</h3>
            <h4 class="month" v-if="info.Month">{{info.Month}}</h4>
        </span>
        </div>
        <div class="location">
            <p class="addy" v-if="info.Address">{{info.Address}} 
              <br/>
              <b>(<a :href="`https://maps.google.com/?q=${info.Address}`" target="_blank"><small>View in Maps</small></a>)</b>
            </p>
          
          <!-- <h3 v-if="info.Town">{{info.Town}}, {{info.Province}}</h3> -->
        </div>

        <!-- <div class="border"></div> -->

       
        
      </div>
    </div>
    <img :src="dataUrl" v-if="dataUrl"/>

    <div class="page-wrapper">
      <div class="page"  v-if="info">
        <h2>{{lang === "en" ? "Details" : "Détails"}}</h2>

        <p v-if="info.Name"><strong>Meet:</strong> {{info.Name}}</p>
          <p v-if="info.Address"><strong>Address:</strong> {{info.Address}}</p>
          <p v-if="info.Month"><strong>Date:</strong> {{info.Month}} {{info.Day}}</p>
          <p v-if="info.Time"><strong>Time:</strong> {{info.Time}}</p>
          
        <div v-if="info.Info">
          <p v-html="parsedInfo(info.Info)"></p>
        </div>
        
          <div class="ctas">
            <a class="button black" target="_blank" v-if="info.Website_Link" :href="info.Website_Link">{{lang === "en" ? "Visit Website" : "Consulter le Site-web"}}</a>
            <a class="button" target="_blank" v-if="info.Calendar_Link" :href="info.Calendar_Link">{{lang === "en" ? "Save To Calendar" : "Télécharger dans le Calendrier"}}</a>
            <a class="button red" target="_blank" v-if="info.Buy_Tickets_Link" :href="info.Buy_Tickets_Link">{{lang === "en" ? "Register/Tickets" : "Registrer/Billets"}}</a>
          </div>
      </div>
      <!-- <br/> -->
      <div class="imageandmap">
        <div id="map"></div>
        <img v-if="info.Image" :src="info.Image ? info.Image[0].url : ''"/>
       
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
          padding-top: 0px;
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
  position: relative;
}
.page {
  padding: 60px 20px;
  margin: 0 auto;
  display: inline-block;
  text-align: left;
  z-index: 2;
  position: relative;
}
.banner {
  padding-top: 00px;
  height: 95vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  background-color: black;
  overflow: hidden;
  .image {
    box-shadow: 0px 0px 14px 0px rgb(0 0 0 / 90%);
    // position: absolute;
    height: 300px;
    margin-bottom: 20px;
    z-index: 2;
    left: 50%;
    // transform: translateX(-50%);

  }
    &:after {
      content:'';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      // height: 60%;
      height: 100%;
      opacity: .8;
      background: rgb(0,0,0);
      // background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(20,20,20,0.6167060574229692) 47%, rgba(0,0,0,0) 100%);
      z-index: 0;
      pointer-events: none;
    }
}
.title, .date, .location {
  display: inline-block;
  vertical-align: middle;
}

.title {
  // margin-left: 20px;
  max-width: calc(100% - 40px);
  text-shadow: 4px 4px 10px rgba(0,0,0,0.85);
  h1 {
    margin-bottom: 10px;
    @media screen and (min-width: 800px) {
      font-size: 50px;
    }  
  }
}

.padright {
  padding-right: 15px;
}
.date {
  // text-align: right;
  text-align: center;
  right: 20px;
  // position: absolute;
  bottom: 20px;
  z-index: 1;
  // width: calc(30% - 20px);
  width: 100%;
}
.location {
  // width: calc(70% - 40px);
  width: 100%;
  // margin: 0 20px;
}
.addy {
  margin-top: 0;
  b, small {
    font-weight: bold;
  }
  b {
    padding-left: 10px;
  }
}
.border {
  width: 50%;
  margin: auto;
  border-bottom: 1px solid white;
}
.time {
  margin-bottom: 0;
  color: $highlightcol;
}

.info {
  padding: 0 20px 20px;
  position: absolute;
  text-align: center;
  bottom: 0;
  z-index: 1;
  max-width: 900px;
  width: calc(100% - 40px);
  left: 50%;
  transform: translateX(-50%);
  // width: 50%;
  // right: 0;
  // padding-right: 20px;
  // top: 50%;
  // transform: translateY(-40%);
}

.day {
  font-family: 'Reservation Wide Blk';
  font-size: 30px;
  color: $highlightcol;
  padding-bottom: 5%;
}
.month {
  font-size: 24px;
  margin-bottom: 20px;
  color: $highlightcol;
  span {
  font-size: 24px;
  color: $highlightcol;
  }
  font-family: "ReservationWide-Regular";
}

.boldreserv {
  font-family: 'Reservation Wide Blk';
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
  // &:not(.fullwidth) {
  //   width: calc(50% - 20px);
  // }
  padding: 12px;
  max-width: 400px;
  margin: 10px 0;
  display: block;
}
.fullwidth {
    width: calc(100% - 20px);
    background: $highlightcol;
}
.ctas {
  padding-top: 40px;
}
.page {
  width: calc(80% - 440px);
  // @media screen and (min-width: 801px) {
  //   max-width: 400px;
  // }
  @media screen and (max-width: 800px) {
    width: calc(100% - 40px);
  }
  h2, p {
    color: black;
  }
  display: inline-block;

}
.imageandmap {
  // @media screen and (max-width: 800px) {
  //   width: 100%;
  // }
  z-index: 2;
  position: relative;
  img {
    width: 100%;
    box-shadow: 0px 9px 14px 0px rgb(0 0 0 / 20%);
    margin: auto;
    border-radius: 20px;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }
  // min-width: 500px;
  // min-height: 300px;
  @media screen and (min-width: 801px) {
    max-width: 400px;
    height: 100%;
  }
  display: inline-block;
}
#map {
  margin-bottom: 40px;
  box-shadow: 0px 9px 14px 0px rgb(0 0 0 / 20%);
  border-radius: 20px;
  // width: 80%;
  width: 100%;
  @media screen and (max-width: 800px) {
    height: 200px;
  }
  // min-width: 500px;
  // min-height: 300px;
  @media screen and (min-width: 801px) {
    // width: 50%;
    min-height: 300px;
    height: 100%;
  }
  
  display: inline-block;
  // margin-right: 20px;
  z-index: 0;
}

#map, .imageandmap {
  vertical-align: top;
}
.instagrams {
  .instagramicon {
    display: inline-block;
    height: calc(100% - 4px);
    vertical-align: middle;
  }
  svg {
    height: 20px;
    vertical-align: top;
  }
  margin-bottom: 20px;
  a {
    background: white;
    padding: 2px 10px 2px 2px;
    border-radius: 100px;
    display: inline-block;
    margin: 0 5px;
  }
  small {
    // margin-left: 20px;
    vertical-align: middle;
    display: inline-block;
    // font-size: 10px;
    font-family: Helvetica;
    // color: white;
    color: black;
  }
}

#canvas {
  width: 100%;
  background: black;
  // min-height: 80vh;
}

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
  top: 50px;
  left: 50%;
  width: 60px;
  transform: translateX(-50%);
  filter: invert(1);
  z-index: 2;
}
.banner-image-wrapper {
  height: 100%;
  // width: 50%;
  // padding-top: 100px;
  position: relative;
  background-size: cover;
  // background-size: contain;
  background-position: top;
  @media screen and (min-width: 800px) {
    background-size: cover;
    background-position: center;
  }
  background-repeat: no-repeat;
  background-color: #2F2F2F;
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


.page-wrapper {
  position: relative;
  text-align: center;
  @media screen and (min-width: 801px) {
    width: 80%;
    margin: auto;
    padding: 50px 0;
  }
  @media screen and (max-width: 800px) {
    padding: 20px;
  }
}


.red {
  background: red;
}
.black {
  background: black;
}
strong {
  color: black;
}
</style>
