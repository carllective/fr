<template>

  <div id="app" :class="lang === 'fr' ? 'fr' : 'en'">
    <!-- <transition appear name="loading" :key="loading">
      <div class="loading" v-if="loading">
        <img class="loadingimage" alt="Carllective loading animation" src="./assets/C.gif"/>
      </div>
    </transition> -->
    <div class="logobar">
      <ul class="logobar-inner">

          <li>
            <router-link to="/" class="logolink">
              <img class="logo" alt="Carllective logo" src="./assets/Carllective Wht.png"/>
            </router-link>
          </li>
            <ul class="desktop nav">
              <li>
               <router-link :to="lang === 'en' ? '/calendar' : '/calendrier'">{{lang === "en" ? 'Calendar' : 'Calendrier'}}</router-link>
              </li>
              <li>
                <router-link to="/map">Map</router-link>
              </li>
              <li>
                <router-link to="/shop">Shop</router-link>
              </li>
              <li class="submitevent" @click="showSubmitForm = !showSubmitForm">
                <a>Submit An Event!</a>
              </li>
              <li>
                <div class="langs">
                  <small><a class="langs_a" href="https://carllective.ca">English</a></small>
                  <small><a class="langs_a" href="https://fr.carllective.ca">Français</a></small>
                </div>
              </li>
              
          </ul>
          <div class="langs mobile">
            <small><a href="https://carllective.ca">English</a></small>
            <small><a href="https://fr.carllective.ca">Français</a></small>
            </div>
      </ul>
      
    </div>
    <transition appear>
    <div class="submitForm" v-if="showSubmitForm">
      <div class="close" @click="showSubmitForm = false"><h2>X</h2></div>
      <h2>Submit a Car Meet, Automotive Event, or Car Expo/Show!</h2>
      <form @submit.prevent="submitForm" ref="form">
        <label><p>Name</p></label>
        <input ref="name" type="text"/>
        <br/>
        <label><p>Date *</p></label>
        <input required ref="date" type="text"/>
        <br/>
        <label><p>Instagram @</p></label>
        <input ref="ig" type="text"/>
        <br/>
        <br/>
        <label><p>Website / Original Post URL *</p></label>
        <input required ref="website" type="text"/>
        <br/>
        <label><p>Poster Image</p></label>
        <input type="file" id="img" name="img" ref="img" accept="image/*"/>
        <input class="button submitbutton" type="submit"/>
      </form>
      <!-- <VueRecaptcha sitekey="6Ld50JkiAAAAAM4DehBWvXoy4_4LeHRNTq6uQYp0"></VueRecaptcha> -->
    </div>
  </transition>
    <router-view :scroll="scroll" class="view"></router-view>

    <FooterArea/>
    <div class="mobile_logobar">
        <ul>
          <li>
            <router-link to="/" class="mobile_a"></router-link>
            Home
          </li>
           <li>
            <router-link class="mobile_a" to="/shop"></router-link>
            {{lang === "en" ? 'Shop' : 'Magasin'}}
          </li>
           <li>
               <router-link class="mobile_a" :to="lang === 'en' ? '/calendar' : '/calendrier'"></router-link>
               {{lang === "en" ? 'Calendar' : 'Calendrier'}}
            </li>
           <li>
              <router-link to="/map" class="mobile_a"></router-link>
              {{lang === "en" ? 'Map' : 'Carte'}}
          </li>
          <!-- <li class="coming_soon">
            {{lang === "en" ? 'Settings' : 'Réglages'}}
          </li> -->
        </ul>
      </div>
  </div>

</template>

<script>
import FooterArea from './components/FooterArea.vue'
import {mapState} from "vuex";
import Airtable from "./airtable.js";
// import { VueRecaptcha } from 'vue-recaptcha';
export default {
  name: 'App',
  components: {
    FooterArea,
    // VueRecaptcha
  },
  watch: {

  },

  computed: {
    ...mapState(["loading", "lang"])
  },
  methods: {
    async submitForm() {
      
      new Promise((resolve) => {
        if (this.$refs.img.files[0]) {
          var axios = require('axios');
          var fileinput = this.$refs.img.files[0];
          const formData = new FormData();
          formData.append( "image", fileinput ); // has to be named 'image'!

          axios.post( 'https://api.imgbb.com/1/upload?key=3314dc7a8197bab1f6f1b512c8595eb7', formData )
            .then( res => { 
              resolve(res.data.data.display_url);
            } )
        } else {
          resolve('');
        }
      }).then((imgUrl) => { 
        
        var submission = {
          name: this.$refs.name.value,
          date: this.$refs.date.value,
          ig: this.$refs.ig.value,
          website: this.$refs.website.value,
          img: imgUrl
        }
        this.$refs.form.reset();
        this.showSubmitForm = false;
        Airtable.submitEvent(submission);

      })
    }
  },
  data() {
    return {
      scroll: null,
      showSubmitForm: false,
    }
  },
  mounted() {
    window.addEventListener("scroll", (e) => {
      this.scroll = e;
    })
    
  }
  
}
</script>

<style lang="scss">
@import "./styles.scss";


* {
  -webkit-font-smoothing: antialiased;
}
body, html {
  margin: 0;
  overscroll-behavior: none;
  overflow-x: hidden;
  background-color: $bg;
  max-width: 100vw;
}
.logo {
    height: auto;
    max-width: 130px;
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
  @media screen and (max-width: 1000px) {
    li {
      width: calc(50% - 20px);
      text-align: left;
      display: inline-block;
      padding: 0;
      margin-left: 10px;
    }
  }
}
.logobar {
  position: fixed;
  // background: #2F2F2F;
  background: black;
  padding: 2vh 0;
  width: 100%;
  top: 0;
  z-index: 10;
  // position: relative;
  -webkit-box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.2); 
  box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.2);
}
ul {
  padding: 0;
  li {
    font-family: "Reservation Wide Bd";
    padding: 0 10px;
    position: relative;
  }
  a {
    font-family: "Reservation Wide Bd";
    text-decoration: none;
    font-size: 12px;
  }
}
.nav {
  // position: absolute;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  top: 50%;
  // transform: translateY(-50%);
  width: calc(45vw - 30px);
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
    justify-content: center;
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
  background: black;
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
    content: "À venir!" !important;
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
  opacity: 1;
  transition: all .5s ease;
  filter: invert(1);
  .loadingimage {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 20%;
    max-width: 150px;
  }
}
.loading-leave-active {
  opacity: 1;
}
.loading-leave-to {
  opacity: 0;
}
.langs{
  // @media screen and (min-width: 1001px) {
  //   position: absolute;
  //   right: 0;
  //   top: 50%;
  //   transform: translateY(-50%);
  // }
  text-align: center;
  small:first-child {
    padding-right: 5px;
  }
  small {
    font-size: 10px;
  }
  a {
    text-decoration: none;
    background: lightgrey;
    padding: 5px;
    border-radius: 5px;
    color: black;
    font-size: 10px;
  }
  small:last-child {
    padding-left: 5px;
  }
  
  @media screen and (max-width: 1000px) {
    padding-top: 20px;
  }
}
.mobile {
  width: calc(50% - 20px);
  display: inline-block;
  text-align: right;
  margin-right: 10px;
  @media screen and (min-width: 1001px) {
    display: none;
  }
}
.router-link-active {
  color: red;
}
.logobar a:not(.langs_a, .logolink, .submitevent a) {
    position: relative;
    &:before, &:after {
      content: '';
      position: absolute;
      width: 0%;
      height: 3px;
      background: white;
      bottom: 0;
    }
    .router-link-active {
      width: 100%;
    }
    &:after {
      width: 0%;
      right: 0;
      opacity: 1;
      transition: width .5s ease;
    }
  &:hover {
    &:before {
      content: '';
      width: 100%;
      transition: width .5s ease;
    }
    &:after {
      width: 100%;
      right: 0;
      opacity: 0;
    }
  }
}
.submitevent {
  padding-right: 20px;
  a {
    background: $highlightcol;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
  }
}
.submitForm {
  overflow-y: scroll;
  position: fixed;
  z-index: 10;
  width: 80%;
  height: 80%;
  background: rgba(49, 2, 2, 0.85);
  border-radius: 20px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  max-width: 600px;
  h2 {
    padding: 40px 0 20px;
    line-height: 1.25;
    text-align: center;
    margin: auto;
    width: 80%;
    max-width: 400px;
    font-family: "Reservation Wide Blk";
  }
  p {
    margin-bottom: 5px;
  }
  form {
    width: 80%;
    padding: 0;
    margin: auto;
  }
  input:not(#img,.submitbutton) {
    width: 100%;
    color: black;
  }
  input:focus {
    outline: none;
  }
  .submitbutton {
    background: green;
    color: white;
    margin-top: 30px;
    width: 100%;
    margin-bottom: 30px;
  }
  .close {
    position: absolute;
    right: 20px;
    top: 20px;
    background: white;
    padding: 5px;
    border-radius: 20px;
    width: 30px;
    height:30px;
    margin: auto;
    cursor: pointer;
    h2 {
      margin: auto;
      padding: 0;
      color: black;
    }
  }
}
</style>
