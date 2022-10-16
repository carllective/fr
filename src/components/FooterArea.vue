<template>
  <div id="footer">
   <div class="footer-inner">
    <a class="button signup" href="http://eepurl.com/h7ok6D">{{$CTA}}</a>
    <p v-if="lang === 'en'">© Copyright {{year()}} Carllective. All Rights Reserved. </p>
    <p v-else>© Copyright {{year()}} Carllective. Tous droits reservés. </p>
   <p>{{lang === "en" ? 'Created by ' : 'Crée par '}} Rebecca Jane <a href="https://www.instagram.com/designbyrebj" target="_blank">(@designbyrebj)</a></p>
   </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'FooterArea',
  components: {
  },
  watch: {

  },
  computed: {
    ...mapState(["lang"])
    
  },
  methods: {
    year() {
      return new Date().toString().split(" ")[3];
    }
  },
  data() {
    return {
    }
  },
  mounted() {

  }
  
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";
#footer {
  min-height: 10vh;
  // background: #2F2F2F;
  background: rgb(37,37,37);
background: linear-gradient(0deg, rgba(37,37,37,1) 0%, rgba(0,0,0,1) 100%);
  position: relative;
  padding: 20px 20px;
  @media screen and (max-width: 1000px) {
    padding-bottom: 100px;
  }
  .signup {
    padding: 20px;
    max-width: 400px;
    margin: 20px auto;
    background: $highlightcol;
    text-align: center;
    display: block;
  }
  p {
    margin: 0;
    text-align: center;
    font-size: 12px;
    padding: 5px 0;
  }
  .footer-inner {
    width: 100%;
    a {
      font-size: 12px;
      font-weight: bold;  
    }
    p {
      padding: 0;
    }
  }
}


</style>
