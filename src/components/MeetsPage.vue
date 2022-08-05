<template>
  <div id="meetspage">
    <div class="banner" :style="`background-image: url(${info.Image ? info.Image[0].url : ''})`" v-if="info">
      <div class="info">
        <div class="title">
          <h1 v-if="info.Name">{{info.Name}}</h1>
          <h3 class="location" v-if="info.Town">{{info.Town}}</h3>
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
        </div>
      </div>
    </div>
    <div class="page"  v-if="info">
      <table class="pageinfo">
        <tr>
          <td v-if="info.Address">
            <h2>Location</h2>
            <p>{{info.Address}}</p>
          </td>
          <td v-if="info.Time">
            <h2>{{lang === "en" ? "Time" : "Heure"}}</h2>
            <p>{{info.Time}}</p>
          </td>
        </tr>
      </table>
      <div v-if="info.Info">
       <h2>{{lang === "en" ? "Details" : "Détails"}}</h2>
        <p v-html="parsedInfo(info.Info)"></p>
      </div>
        <div class="ctas">
          <a class="button" target="_blank" v-if="info.Calendar_Link" :href="info.Calendar_Link">{{lang === "en" ? "Save To Calendar" : "Télécharger dans le Calendrier"}}</a>
          <a class="button" target="_blank" v-if="info.Website_Link" :href="info.Website_Link">{{lang === "en" ? "Visit Website" : "Consulter le Site-web"}}</a>
          <a class="button fullwidth" target="_blank" v-if="info.Buy_Tickets_Link" :href="info.Buy_Tickets_Link">{{lang === "en" ? "Buy Tickets" : "Acheter des Billets"}}</a>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

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
    }
  },
  data() {
    return {
      info:null
    }
  },
  mounted() {
    try {
      this.info = this.$meets.filter(i => `/${i.url}` === window.location.pathname)[0];
    } catch {
      // window.location.href = "/";
    }
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
}
.banner {
  height: 50vh;
    background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
.title, .date {
  display: inline-block;
}

.title {
  margin-left: 20px;
}
.date {
  text-align: right;
  right: 20px;
  position: absolute;
  bottom: 0;
  z-index: 1;
}
.info {
  position: absolute;
  bottom: 0;
  z-index: 1;
  max-width: 600px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 20px;
}
.day {
  font-family: 'Reservation Wide Blk';
  font-size: 30px;
  color: $highlightcol;
  padding-bottom: 20px;
}
.month {
  color: $highlightcol;
}
.page {
  max-width: 560px;
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
</style>
