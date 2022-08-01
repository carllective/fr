<template>
  <div id="app">
    <div class="logobar">
      <div class="logobar-inner">
        <a href="/"><img class="logo" src="./assets/Carllective Wht.png"/></a>
      </div>
    </div>
    <router-view></router-view>

    <FooterArea/>
  </div>
</template>

<script>
import FooterArea from './components/FooterArea.vue'

export default {
  name: 'App',
  components: {
    FooterArea
  },
  watch: {

  },
  computed: {
    
  },
  methods: {
    
  },
  data() {
    return {

    }
  },
  mounted() {
  }
  
}
</script>

<style lang="scss">
@import "./styles.scss";

body {
  margin: 0;
  overscroll-behavior: none;
  background-color: $bg;
}
.logo {
  max-width: 150px;

}
.logobar-inner {
  margin: auto;
  display: block;
  text-align: center;
  a {
    display: inline-block;
    vertical-align: middle;
    padding: 0 20px;
  }
}
.logobar {
  background: #2F2F2F;
  padding: 20px 0;
  
}
</style>
