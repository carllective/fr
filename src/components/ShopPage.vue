
<template>
  <div id="shopPage">
    <div class="banner" 
    :style="`background-image: url(${$shop.Header_Image ? $shop.Header_Image[0].url : ''})`">
        <h1 v-if="$shop.Header">{{$shop.Header}}</h1>
    </div>

    <div class="products">
      <transition v-for="(item, i) in $shopItems" :key="i">
        <div class="product_card">
          <div class="product_image" :style="`background-image: url(${item.fields.Image ? item.fields.Image[0].url : ''});`"></div>
          <h2 v-if="item.fields.Product_Name">{{item.fields.Product_Name}}</h2>
          <p v-if="item.fields.Price">${{item.fields.Price}}</p>
          <a class="button" :href="item.fields.Purchase_Link ? item.fields.Purchase_Link : ''" target="_blank">Buy Now</a>
        </div>
      </transition>
      <div v-if="$shopItems.length === 0">
        <h2>
          Nothing is currently in the shop.<br/>Please check back later!
        </h2>
      </div>
    </div>

    <div class="banner" 
    v-if="$shop.Second_Image && $shop.Second_Image[0].url" 
    :style="`background-image: url(${$shop.Second_Image[0].url})`">
      <h2 v-if="$shop.Small_Text">{{$shop.Small_Text}}</h2>
    </div>

    <div v-if="$externalShopItems.length > 0">
      <h2 class="black">CHECK OUT THESE OTHER AMAZING <br/>AUTOMOTIVE BUSINESSES</h2>
      <div class="products external_products">
        <transition v-for="(item, i) in $externalShopItems" :key="i">
          <div class="product_card">
            <div class="product_image" :style="`background-image: url(${item.fields.Image ? item.fields.Image[0].url : ''});`"></div>
            <h2 v-if="item.fields.Product_Name">{{item.fields.Product_Name}}</h2>
            <a class="button" :href="item.fields.Purchase_Link ? item.fields.Purchase_Link : ''" target="_blank">VISIT SHOP</a>
          </div>
        </transition>
      </div>
    </div>

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
.banner {
  height: 50vh;
  background: grey;
  width: 100%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 100%;
    height:100%;
    background: rgba(0,0,0,0.5);
  }
  h1, h2 {
    display: inline-block;
    left: 50%;
    text-align: center;
    position: absolute;
    z-index: 2;
    width: 90%;
    @media screen and (min-width: 1001px) {
      width: 50%;
    }
  }
  h1 {
    font-size: 40px;
    margin-bottom: 40px;
    transform: translateX(-50%);
    bottom: 0;
    vertical-align: bottom;
    @media screen and (max-width: 800px) {
      font-size: 30px;
    }
  }
  h2 {
    font-size: 20px;
    top: 50%;
    transform:translateY(-50%) translateX(-50%);
  }
}
h1, h2, p {
  line-height: 1.25;
}

.products {
  padding: 40px 10%;
  @media screen and (max-width: 1000px) {
    padding: 40px 20px;
  }
    h2 {
      color: black;
      font-size: 14px;
    }
    p {
      color: black;
      margin: 0 0 20px;
    }
    text-align: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  .product_card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    padding: 40px;
    @media screen and (max-width: 1000px) {
      padding: 10px;
    }
    img {
      max-width: 150px;
      max-height: 200px;
      height: 100%;
      width: auto;
    }
    width: calc(25% - 80px);
    @media screen and (max-width: 1000px) {
      width: calc(33% - 40px);
    }
    @media screen and (max-width: 800px) {
      width: calc(50% - 40px);
    }
    .product_image {
      height: 200px;
      width: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin-bottom: 20px;
    }
  }
}
.button {
  width: 80%;
  margin: 0 auto;
  background: #00A651;
  margin-top: auto;
}
.external_products {
  .product_card {
    background: black;
    border-radius: 10px;
    margin: 10px;
    padding: 40px 10px;
    .button {
      background: white;
      color: black;
    }
    .product_image {
      height: 100px;
      width: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin-bottom: 20px;
    }
  }
}
.black {
  color: black;
  text-align: center;
  max-width: 800px;
  margin: auto;
  font-size: 20px;
  padding-top: 40px;
}
</style>
