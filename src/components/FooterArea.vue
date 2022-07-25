<template>
  <div id="footer">
   <div class="footer-inner">
    <a class="button signup" href="http://eepurl.com/h7ok6D">SIGN UP TO BE THE FIRST TO KNOW OF THE OFFICIAL APP LAUNCH</a>
    <p>Copyright {{year()}} Carllective. All Rights Reserved. </p>
   <p>Created by Rebecca Jane <a href="https://www.instagram.com/designbyrebj" target="_blank">(@designbyrebj)</a></p>
   </div>
  </div>
</template>

<script>

export default {
  name: 'FooterArea',
  components: {
  },
  watch: {

  },
  computed: {
    
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
  background: #2F2F2F;
  position: relative;
  padding: 20px 20px;
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
  }
}


</style>
