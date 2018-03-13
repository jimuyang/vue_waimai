<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
        <router-link class="tab-item" tag="div" to="/goods">商品</router-link>
        <router-link class="tab-item" tag="div" to="/rating">评价</router-link>
        <router-link class="tab-item" tag="div" to="/seller">店铺</router-link>
    </div>
    <router-view :seller="seller"></router-view>

  </div>
</template>

<script>
  import header from 'components/header/header';

  // const RESULTCODE_OK = 0;

  export default {
    data() {
      return {
        seller: {}
      };
    },
    components: {
      'v-header': header
    },
    created() {
      this.$http.get('/waimai/api/seller').then((response) => {
          console.log(response);
          this.seller = response.data.seller;
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      //border-bottom: 1px solid rgba(7,17,27,0.1)
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex: 1
        text-align:center



</style>
