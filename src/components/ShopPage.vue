
<template>
  <div id="shopPage">
Shop
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import {mapState} from "vuex";

export default {
  name: 'ShopPage',
  components: {
  },
  watch: {

  },
  computed: {
    ...mapState([ "lang"])
    
  },
  methods: {
 
  },

  data() {
    return {

    }
  },
  beforeDestroy() {
  },
  mounted() {

  }
  
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";
#shopPage {
  min-height: 100vh;
  background: white;
  overscroll-behavior: none;
  overflow-x: hidden;
  position: relative;
}
</style>
