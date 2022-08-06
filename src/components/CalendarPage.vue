<template>
  <div id="calendar">
<iframe class="airtable-embed" src="https://airtable.com/embed/shrDuWcmsmep8vOeq?backgroundColor=red&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
  </div>
</template>

<script>
// import {mapState} from "vuex";
// var L = require('leaflet');

export default {
  name: 'CalendarPage',
  components: {
  },
  watch: {

  },
  computed: {
    // ...mapState([ "lang"])
    
  },
  methods: {
  
  },
  data() {
    return {

    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
  
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";
#calendar {
    max-width: 1000px;
    margin: auto;
    position: relative;
    padding-top: 100px;
    
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 24px;
        width: 110%;
        background: #131313;
        z-index: 3;
    }
}
</style>
