<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab border-1px">
        <router-link class="tab-item" tag="div" to="/goods">商品</router-link>
        <router-link class="tab-item" tag="div" to="/rating">评价</router-link>
        <router-link class="tab-item" tag="div" to="/seller">店铺</router-link>
    </div>

    <router-view></router-view>

    <div class="footer">
      I am a footer
    </div>

  </div>
</template>

<script>
  import header from 'components/header/header';
  export default {
    data() {
      return {
        seller: {}
      };
    },
    components: {
      'v-header': header
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
