<template>
  <div id="meets">
     <!-- <div id="map"></div> -->
    <div class="title-section">
      <h1 class="header">{{$header}}</h1>
      <h3 class="pre-title">{{$smalltext}}</h3>

      <table class="today">

        <tr class="small">
          <h3>
            <img class="icon" src="../assets/white/Calendar.svg"/>
            <span v-html="todaysDate()"></span>
          </h3>
        </tr>
        <tr class="small" id="currentLocation" @click="location() === locationCTA ? requestLocation() : null">
          <h3>
            <img class="icon" src="../assets/white/Location.svg"/>
            <span v-html="location()"></span>
          </h3>
        </tr>

    </table>
      <div class="select">
        <h3>{{$sort_CTA}}</h3>
        <div class="dropdown">
          <p class="mainoption" @click="showDropdown = !showDropdown">{{activeOption}} <span :class="`chevron ${showDropdown ? `up` : `down`}`">▼</span></p>
          <ul :style="showDropdown ? 'height: auto; overflow: visible' : 'height: 0%; overflow: hidden'">
            <li @click="sortBy(`0`)">Date</li>
            <li @click="sortBy(`Distance`)">Distance</li>
            <li @click="sortBy(`10`)">Within 10km</li>
            <li @click="sortBy(`20`)">Within 20km</li>
            <li @click="sortBy(`50`)">Within 50km</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="meets_cards">
      <router-link class="meet_card_link" name="meet_card_link" v-for="(item, i) in meets" :key="i" :to="`/${item.url}`">
        <div :class="`meet_card ${item.Today ? `todaymeet` : ``}`" :style="`background-image: url(${item.Image ? item.Image[0].url : ''})`">
          <div class="meet_card_inner">
              <div class="title">
                <h2 v-if="item.Name">{{item.Name}}</h2>
                <h3 class="location" v-if="item.Town && item.Province">{{item.Town}}, {{item.Province}}</h3>
              </div>
              <div class="date">
                <span v-if="lang === 'en'">
                  <h4 class="month" v-if="item.Month">{{item.Month}}</h4>
                  <h3 class="day" v-if="item.Day">{{item.Day}}</h3>
                </span>
                <span v-else-if="lang === 'fr'">
                  <h3 class="day" v-if="item.Day">{{item.Day}}</h3>
                  <h4 class="month" v-if="item.Month">{{item.Month}}</h4>
                </span>
                <p class="time"><span class="small">{{item.Time}}</span></p>
              </div>
            </div>
          
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: 'MeetsList',
  components: {
  },
  watch: {
  
  },
  computed: {
    ...mapState(["your_location", "lang"])
  },
  methods: {
    requestLocation() {
      console.log("Requesting to make location API call");
      this.$geoAPI.init();
    },
    todaysDate() {
      if (this.lang === "fr") {
        return new Date().toLocaleString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      } else {
        return new Date().toString().split(" ").splice(0, 4).join(" ");
      }
      
    },
    location() {
      if (!this.your_location || !this.your_location.city) {
        return this.locationCTA;
      }
      return `${this.your_location.city}, ${this.your_location.state_code}, ${this.your_location.country}`;
    },
    sortBy(km) {
      if (km === "0") {
        console.log(this.$meets);
        this.meets = this.$meets;
        this.activeOption = `Date`;
        this.showDropdown = false;

        return;
      }
      if (km === "Distance") {
        this.meets = [...this.$meets].sort((a, b) => a.DistanceFromMe - b.DistanceFromMe);
        this.activeOption = `Distance`;
        this.showDropdown = false;
        return;
      }
      this.activeOption = `Within ${km} km`;
      this.showDropdown = false;
      
      
      this.meets = [...this.$meets].filter(i => i.DistanceFromMe <= km);
    }
  },
  data() {
    return {
      meets: this.$meets,
      showDropdown: false,
      activeOption: "Date",
      locationCTA: "Please enable location, then click me."
    }
  },
  mounted() {


  }
  
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";
#meets {
  // max-width: 1240px;
  max-width: 700px;

  padding: 40px 20px;
  margin: 40px auto 0;
  //  @media screen and (max-width: 1239px){
  //   max-width: 600px;
  //  }
}
.today {
  span {
    text-transform: capitalize;
  }
  margin: 0;
  width: 60%;
  display: inline-block;
   vertical-align: middle;
  span, img {
    vertical-align: middle;
  }
}
h1 {
  color: white;
  padding:0 0 20px;
}

.meet_card_link {
  display:inline-block;
  max-width: 700px;
  width: 100%;
  // @media screen and (min-width: 1240px){
  //   padding: 0 10px;
  // }
  &:not(:last-child) {
    .meet_card {
      margin: 0 auto 20px;
    }
  }
}

.meets_cards {
  margin: auto;
  text-align: center;

}
.meet_card {
  background: black;
  min-height: 150px;
  border-radius: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  color: white;
  padding: 20px;
  position: relative;
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

.dropdown {

  .chevron {
    display: inline-block;
    position: absolute;
    right: 20px;
    transition: all .5s ease;
    z-index: 3;
  }
  .up {
    transform:rotate(180deg);
    transition: all .5s ease;
    transform-origin: center;
  }
  .mainoption {
    cursor: pointer;
    border-radius: 10px;
  }
  position: relative;
  p {
    margin: 0;
    padding: 10px 0 10px 10px;
    background: #424242;
    width: calc(100% - 20px);
    display: block;
  }
  ul {
    overflow: hidden;
    list-style: none;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 2;
    width: 100%;
    margin-top: 0;
    padding: 0;
  }
  li {
    width: calc(100% - 20px);
    background: #424242;
    padding: 10px 0 10px 10px;
    cursor: pointer;
    font-family: Helvetica;
      transition: all .5s ease;
    border-bottom: 1px solid #424242;
    &:hover {
      transition: all .5s ease;
      background: grey;
    }
  }
}

.icon {
  width: 20px;
  padding-right: 10px;
}

.title {
  text-align: left;
  vertical-align: bottom;
  height: 100%;
  display: inline-block;
  width: 75%;
}
.date {
  width: 25%;
  text-align: right;
  vertical-align: bottom;
  display: inline-block;

  p {
    margin: 0;
  }
  .day {
    font-family: 'Reservation Wide Blk';
    font-size: 30px;
    margin: 0;
    display: inline-block;
    height: 100%;
  }
}

.pre-title {
  color: $highlightcol;
  margin-bottom: 40px;
}
.meet_card_inner {
  position: absolute;
  width: calc( 100% - 40px);
  bottom: 20px;
  z-index: 1;
}
.location {
  color: $highlightcol;
}
.header, .select {
  display: inline-block;
}
.select {
 width: 40%;
 padding-bottom: 20px;
 vertical-align: middle;
 h3 {
  padding-bottom: 10px;
 }
}
.header {
    width: 100%;
   margin-bottom: 10px;
}
.meet_card_link-enter-active {
  transition: all .5s ease;
  min-height: 0;
}

.meet_card_link-enter-to {
    transition: all .5s ease;
    min-height: 150px;
}
.meet_card_link-leave-to {
  min-height: 0;
}

.small {
  font-weight: 200;
  font-size: 14px;
  h3 {
    padding-bottom: 10px;
  }
  h3 span {
    // font-family: "Reservation Wide Bd";
    font-weight: 200;
    display: inline-block;
  }
  span {
    max-width: calc(100% - 30px);
  }
}
.todaymeet {
  &:before {
    content: 'Today!';
    position: absolute;
    left: 0;
    top: 0;
    background: $highlightcol;
    padding: 20px;
    z-index: 4;
    font-family: "Reservation Wide Bd";
    pointer-events: none;
  }
}
#currentLocation {
  cursor: pointer;
}
#map { 
  height: 180px;
}
.time {
  padding-top: 10px;
}
.title-section {
  padding-bottom: 30px;
}
</style>
