<template>
  <div id="meets" :class="lang === 'fr' ? 'fr' : 'en' ">
     <!-- <div id="map"></div> -->
    <div class="title-section">
      <h1 class="header">{{$header}}</h1>
      <h2 class="pre-title">{{$smalltext}}</h2>

      <div class="today">
        <div class="small" id="currentLocation" @click="location() === locationCTA ? requestLocation() : null">
          <h3>
            <img class="icon" alt="Location icon" src="../assets/white/Location.svg"/>
            <span v-html="location()"></span>
          </h3>
        </div>

        <div class="small" id="currentDate">
        <h3>
          <img class="icon" alt="Calendar icon" src="../assets/white/Calendar.svg"/>
          <div class="date">
            <span>
              <h4>{{todaysDate("month")}}</h4>
              <h3>{{todaysDate("day")}}</h3>
            </span>
          </div>
        </h3>
      </div>
    </div>
      <div class="select">
        <div :class="`dropdown-wrapper ${!your_location ? `disabled` : ``}`">
          <p class="label">{{$sort_CTA}}</p>
          <div class="dropdown">
            <p class="mainoption" @click="showDropdownHandler">{{Number.isInteger(activeFilter) ? (lang === "fr" ? `Rayon de ${activeFilter} km` : `Within ${activeFilter} km`) : activeFilter}} <span :class="`chevron ${showDropdown ? `up` : `down`}`">▼</span></p>
            <ul :style="showDropdown ? 'height: auto;' : 'height: 0%;'">
            <li @click="sortBy(`Date`)">Date</li>
              <li @click="sortBy(`Distance`)">Distance</li>
              <li @click="sortBy(10)">{{lang === "fr" ?  `Rayon de 10 km` : `Within 10 km`}}</li>
              <li @click="sortBy(20)">{{lang === "fr" ?  `Rayon de 20 km` : `Within 20 km`}}</li>
              <li @click="sortBy(50)">{{lang === "fr" ?  `Rayon de 50 km` : `Within 50 km`}}</li>
            </ul>
          </div>
        </div>
        <div class="dropdown-wrapper">
          <p class="provincetitle label">Province</p>
          <div class="dropdown">
            <p class="mainoption" @click="showProvDropdownHandler">{{lang === "fr" ? activeProvince.fr : activeProvince.en}} <span :class="`chevron ${showProvDropdown ? `up` : `down`}`">▼</span></p>
            <ul :style="showProvDropdown ? 'height: auto; ' : 'height: 0%; '">
                <li v-for="(item, i) in provinces" :key="i" @click="sortByProvince(item)">{{lang === "fr" ? item.fr : item.en}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="meets_cards" v-if="meets.length">
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
    <div v-else>
      <p>{{lang === "fr" ? 'Aucun résultat.' : 'No Results.'}}</p>
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
    scroll() {
      this.$store.commit("setScrollY", window.scrollY);
    }
  },
  props: {
    scroll: {
      type: Event
    }
  },
  computed: {
    ...mapState(["your_location", "lang", "activeFilter", "activeProvince", "scrollY"])
  },
  methods: {
    requestLocation() {
      console.log("Requesting to make location API call");
      this.$geoAPI.init();
    },
    todaysDate(what) {
      if (what === "month") {
        if (this.lang === "fr") {
          return new Date().toLocaleString('fr-FR', { month: 'long'});
        } else {
          return new Date().toLocaleString('en-US', { month: 'long'});
        }
      }
      else if (what === "day") {
        return new Date().toString().split(" ")[2];
      }
      
  
    },
    showDropdownHandler() {
      this.showDropdown = !this.showDropdown;
      if (this.showDropdown) this.showProvDropdown = false;
    },
    showProvDropdownHandler() {
      this.showProvDropdown = !this.showProvDropdown;
      if (this.showProvDropdown) this.showDropdown = false;
    },
    location() {
      if (!this.your_location || !this.your_location.city) {
        return this.locationCTA;
      }
      return `${this.your_location.city}, ${this.your_location.state_code}, ${this.your_location.country}`;
    },
    sortByProvince(prov) {
       if (prov.en === "Canada-Wide") {
        this.meets = [...this.$meets];
        this.meets_sorted_by_province = [...this.$meets];
        this.showProvDropdown = false;
        this.$store.commit("setActiveProvince",  prov);
        this.sortBy(this.activeFilter);
        return;
      }
      this.meets_sorted_by_province = [...this.$meets].filter(i => i.Province === prov.en);
      this.meets = this.meets_sorted_by_province;
      this.showProvDropdown = false;
      this.$store.commit("setActiveProvince",  prov);
      this.sortBy(this.activeFilter);
      // console.log(this.meets);

    },
    sortBy(km) {
      // this.activeFilter = km;
      this.$store.commit("setActiveFilter", km);
      // Reset to default sortin with province filter, by date
      if (km === "Date") {
        
        this.meets = this.meets_sorted_by_province;
        this.showDropdown = false;
        return;
      }
      // Sort by Distance closest to you
      if (km === "Distance") {
        this.meets = [...this.meets_sorted_by_province].sort((a, b) => a.DistanceFromMe - b.DistanceFromMe);
        this.showDropdown = false;
        return;
      }
      // Within x km from you
      else if (Number.isInteger(km)) {
        // this.activeFilter = km;
      this.$store.commit("setActiveFilter", km);
        this.showDropdown = false;
        this.meets = [...this.meets_sorted_by_province].filter(i => i.DistanceFromMe <= km);
        return
      }
      
    }
  },
  data() {
    return {
      provinces: [
      {en: 'Alberta', fr: 'Alberta'},
      {en: 'British Columbia', fr: 'Colombie-Britannique'},
      {en: 'Manitoba', fr: 'Manitoba'},
      {en: 'New Brunswick', fr: 'Nouveau-Brunswick'},
      {en: 'Newfoundland and Labrador', fr:'Terre-Neuve-et-Labrador'},
      {en: 'Northwest Territories', fr: 'Territoires du Nord-Ouest'},
      {en: 'Nova Scotia', fr: 'Nouvelle-Écosse'},
      {en: 'Nunavut', fr: 'Nunavut'},
      {en: 'Ontario', fr: 'Ontario'},
      {en: 'Prince Edward Island', fr: 'Île-du-Prince-Édouard '},
      {en: 'Quebec', fr: 'Québec'},
      {en: 'Saskatchewan', fr: 'Saskatchewan'},
      {en: 'Yukon', fr: 'Yukon'},
      {en: 'Canada-Wide', fr: 'À travers le Canada'}
      ],
      meets: this.$meets,
      meets_sorted_by_province: this.$meets,
      showDropdown: false,
      showProvDropdown: false,
      locationCTA: "Please enable location, then click me.",
    }
  },
  mounted() {
    // if (this.your_location) 
    //   this.sortByProvince(this.provinces.find(i => i.en === this.your_location.state));

    if (this.activeProvince === undefined) {
       this.$store.commit("setActiveProvince", {en: 'Ontario', fr: 'Ontario'});
    } else {
      this.$store.commit("setActiveProvince", this.activeProvince);
    }
    this.sortByProvince(this.activeProvince);
    window.scrollTo(0, this.scrollY);
  }
  
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";
#meets {
  // max-width: 1240px;
  max-width: 700px;

  padding: 150px 20px 40px;
  margin: 40px auto 0;
  //  @media screen and (max-width: 1239px){
  //   max-width: 600px;
  //  }
}
.today {
  width: 100%;
.small {
  font-weight: 200;
  font-size: 14px;
  width: 50%;
  display: inline-block;
}
  span {
    text-transform: capitalize;
  }
  margin: 0;
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
    padding: 10px;
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
    z-index: 5;
    width: 100%;
    margin-top: 0;
    padding: 0;
    max-height: 200px;
    overflow: scroll;
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

#currentDate {
  text-align: right;
  vertical-align: middle;
}

.icon {
  width: 20px;
  padding-right: 10px;
  vertical-align: middle;
}

.title {
  text-align: left;
  vertical-align: bottom;
  height: 100%;
  display: inline-block;
  width: 75%;
}
.date {
  // width: 25%;
  text-align: right;
  vertical-align: middle;
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
    @media screen and (max-width: 800px) {
        font-size: 18px;
        line-height: 1.2;
    }
  }
  h3 {
    font-family: "Reservation Wide Blk";
    font-size: 30px;
    margin: 0;
    display: inline-block;
    height: 100%;
    color: $highlightcol;
  }
  h4 {
    color: $highlightcol;

  }
}

.pre-title {
  margin-bottom: 40px;
  font-family: Helvetica;
}
.meet_card_inner {
  position: absolute;
  width: calc( 100% - 40px);
  bottom: 20px;
  z-index: 1;
  .date {
    width: 25%;
  }
}
.location {
  color: $highlightcol;
}
.header, .select {
  display: inline-block;
}
.select {
  .dropdown-wrapper {
    display: inline-block;
    width: calc(50% - 10px);
    &:first-child {
      padding-right: 20px;
    }
  }
 width: 100%;
 padding-bottom: 20px;
 vertical-align: middle;
 .label {
  padding-bottom: 5px;
  margin: 0;
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
  vertical-align: middle;
  cursor: pointer;
  img {
    display: inline-block;
  }
  h3 span {
    font-family: "Reservation Wide Bd";
    color: $highlightcol;
    // font-size: 20px;
    width: calc(100% - 30px);
    display: inline-block;
  }
}
#map { 
  height: 180px;
}
.time {
  padding-top: 10px;
  .small {
    @media screen and (max-width: 800px) {
      font-size: 12px;
      line-height: 1.2;
    }
  }
}
.title-section {
  padding-bottom: 30px;
}
.provincetitle {
  padding-top: 20px;
}
.fr .todaymeet {
  &:before {
    content: 'Aujourd`hui!' !important;
  }
}
.disabled {
  filter: invert(.4);
  pointer-events: none;
}
</style>
