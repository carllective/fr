<template>
  <div :id="`app ${lang === 'fr' ? 'fr' : 'en'}`">
    <transition appear name="loading" :key="loading">
      <div class="loading" v-if="loading">
        <img class="loadingimage" src="./assets/C.gif"/>
      </div>
    </transition>
    <div class="logobar">
      <ul class="logobar-inner">
          <ul class="desktop nav left">
            <li class="coming_soon">
              {{lang === "en" ? 'Shop' : 'Magasin'}}
            </li>
            <li class="coming_soon">
              {{lang === "en" ? 'Calendar' : 'Calendrier'}}
            </li>
          </ul>

          <li>
            <router-link to="/">
              <img class="logo" src="./assets/Carllective Wht.png"/>
            </router-link>
            </li>
            <ul class="desktop nav right">
            <li>
              <router-link to="/map">{{lang === "en" ? 'Map' : 'Carte'}}</router-link>
            </li>
            <li class="coming_soon">
              {{lang === "en" ? 'Settings' : 'Réglages'}}
            </li>
          </ul>
      </ul>
      <div class="langs">
        <small><a href="https://carllective.ca">English</a></small>
       <small><a href="https://fr.carllective.ca">Français</a></small>
      </div>
    </div>
    
    <router-view></router-view>

    <FooterArea/>
    <div class="mobile_logobar">
        <ul>
          <li>
            <router-link to="/" class="mobile_a"></router-link>
            Home
          </li>
           <li class="coming_soon">
            {{lang === "en" ? 'Shop' : 'Magasin'}}
          </li>
           <li class="coming_soon">
            {{lang === "en" ? 'Calendar' : 'Calendrier'}}
          </li>
           <li>
              <router-link to="/map" class="mobile_a"></router-link>
              {{lang === "en" ? 'Map' : 'Carte'}}
          </li>
          <li class="coming_soon">
            {{lang === "en" ? 'Settings' : 'Réglages'}}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import FooterArea from './components/FooterArea.vue'
import {mapState} from "vuex";
export default {
  name: 'App',
  components: {
    FooterArea
  },
  watch: {

  },
  computed: {
    ...mapState(["loading", "lang"])
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
    height: 100%;
    // max-height: 10vh;
    width: 10vw;
    min-width: 120px;
}
.logobar-inner {
  margin: auto;
  position: relative;
  text-align: center;
  a, li {
    display: inline-block;
    vertical-align: middle;
  }
}
.logobar {
  background: #2F2F2F;
  padding: 2vh 0;
  position: relative;
-webkit-box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.2); 
box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.2);
}
ul {
  padding: 0;
  li {
    font-family: Helvetica;
    padding: 0 30px;
    position: relative;
  }
}
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: calc(45vw - 40px);
}
.left {
  left: 0;
  text-align: right;
}
.right {
  right: 0;
  text-align: left;
}
.small {
  font-size: 12px;
  color: $highlightcol;
}
.desktop {
  @media screen and (max-width: 1000px) {
    display: none;
  }
}
.mobile_logobar {
  -webkit-box-shadow: 0px -7px 14px 0px rgba(0,0,0,0.2); 
  box-shadow: 0px -7px 14px 0px rgba(0,0,0,0.2);
  .mobile_a {
    position: absolute;
    left: 0;
    height: calc(100% + 2em);
    width: 100%;
    top: -1em;
  }
  a {
    text-decoration: none;
  }
  @media screen and (min-width: 1001px) {
    display: none;
  }
  border-radius: 15px 15px 0 0;
  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;
    li {
      padding: 10px 0;
      width: calc(20% - 1px);
      &:not(:last-child) {
        border-right: 1px solid grey;
      }
    }
   
  }
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #2F2F2F;
  z-index: 11;
}
.coming_soon {
  text-decoration: line-through;
  &:after {
    content: "Coming Soon";
    position: absolute;
    left: 50%;
    font-size: 12px;
    top: 100%;
    width: 100%;
    text-align: center;
    transform: translateX(-50%);
    color: $highlightcol;
    z-index: 3;
  }
}
.fr .coming_soon {
  &:after {
    content: "À venir!";
  }
}
.loading {
  position: fixed;
  background: white;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  .loadingimage {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 20%;
    max-width: 150px;
  }
}
.loading {
  opacity: 1;
  transition: all .5s ease;
  filter: invert(1);
}
.loading-leave-active {
  opacity: 1;
}
.loading-leave-to {
  opacity: 0;
}
.langs {
  text-align: center;
  small:first-child {
    padding-right: 5px;
  }
  a {
    text-decoration: none;
    background: lightgrey;
    padding: 5px;
    border-radius: 10px;
    color: black;
  }
  small:last-child {
    padding-left: 5px;
  }
  padding-top: 20px;
}
</style>
