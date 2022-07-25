<template>
  <div id="meets">
    
    <div class="title-section">
      <h3 class="pre-title">Beta Version! :)</h3>
      <h1 class="header">Upcoming Car Meets</h1>
      <table class="today">

        <tr class="small">
          <img class="icon" src="../assets/white/Calendar.svg"/>
          <span v-html="todaysDate()"></span>
        </tr>
        <tr class="small">
          <img class="icon" src="../assets/white/Location.svg"/>
          <span v-html="location()"></span>
        </tr>

    </table>
      <div class="select">
        <h3>Sort By</h3>
        <div class="dropdown">
          <p class="mainoption" @click="showDropdown = !showDropdown">{{activeOption}} <span :class="`chevron ${showDropdown ? `up` : `down`}`">▼</span></p>
          <ul :style="showDropdown ? 'height: auto; overflow: visible' : 'height: 0%; overflow: hidden'">
            <li @click="sortBy(`0`)">All</li>
            <li @click="sortBy(`10`)">Within 10km</li>
            <li @click="sortBy(`50`)">Within 50km</li>
            <li @click="sortBy(`100`)">Within 100km</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="meets_cards">
      <a class="meet_card_link" name="meet_card_link" v-for="(item, i) in meets" :key="i" :href="`/${item.url}`">
        <div class="meet_card" :style="`background-image: url(${item.Image[0].url})`">
        
          <div class="meet_card_inner">
              <div class="title">
                <h2>{{item.Name}}</h2>
                <h3 class="location">{{item.Town}}, {{item.Province}}</h3>
              </div>
              <div class="date">
                <h4 class="month">{{item.Month}}</h4>
                <h3 class="day">{{item.Day}}</h3>
              </div>
            </div>
          
        </div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MeetsList',
  components: {
  },
  watch: {
  
  },
  computed: {
    
  },
  methods: {
    todaysDate() {
      return new Date().toString().split(" ").splice(0, 4).join(" ");
    },
    location() {
      return `${this.$geo.city.name}, ${this.$geo.area.code.split("-")[1]}, ${this.$geo.country.name}`;
    },
    sortBy(km) {
      this.activeOption = `Within ${km} km`;
      this.showDropdown = false;
      if (km === "0") {
        this.meets = this.$meets;
        this.activeOption = `All`;
        return;
      }
     this.$geoAPI.nearest({radius: km, limit: '10', distanceUnit: 'KM', minPopulation: '100000'}).then((res) => {
      var towns = res.data.map(i => `${i.city}, ${i.regionCode}`);
        this.meets = this.$meets.filter(i => {
          if (towns.indexOf(`${i.Town}, ${i.Province}`) > -1) {
            return i;
          }
        })
      })
    }
  },
  data() {
    return {
      meets: this.$meets,
      showDropdown: false,
      activeOption: "All"
    }
  }
  
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";
#meets {
  // max-width: 1240px;
  max-width: 600px;

  padding: 60px 20px;
  margin: 40px auto 0;
  //  @media screen and (max-width: 1239px){
  //   max-width: 600px;
  //  }
}
.today {
  margin: 0;
  width: 70%;
  display: inline-block;
   vertical-align: middle;
  span, img {
    vertical-align: middle;
    padding-bottom: 5px;
  }
}
h1 {
  color: white;
  padding:0 0 20px;
}

.meet_card_link {
  display:inline-block;
  max-width: 580px;
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
    top: 0;
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
  padding-top: 5px;
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
  margin: 0;
  color: $highlightcol;
}
.meet_card_inner {
  position: absolute;
  width: calc( 100% - 40px);
  bottom: 20px;
  z-index: 1;
}
.day, .location, .month {
  color: $highlightcol;
}
.header, .select {
  display: inline-block;
}
.select {
 width: 30%;
 padding-bottom: 20px;
 vertical-align: middle;
 h3 {
  padding-bottom: 10px;
 }
}
.header {
    width: 100%;
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
</style>
