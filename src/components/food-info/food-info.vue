<template>
  <transition name="move">
    <div class="food" v-show="showFlag" ref="food">

      <div class="food-content">

        <div class="image-header">
          <img :src="food.image"/>
          <div class="back" @click="hide">
            <i class="icon-arrow_lift"></i>
          </div>
        </div>

        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>

          <div class="price">
            <span class="now">￥{{food.price}}</span>
            <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>

          <div class="cart-control-wrapper">
            <cart-control @add="addFood" :food="food"/>
          </div>

          <transition name="fade">
            <div @click.stop.prevent="addFirst" class="buy" v-show="!food.count || food.count===0">
              加入购物车
            </div>
          </transition>
        </div>

        <!--<split v-show="food.info"/>-->

        <!--<div class="info" v-show="food.info">-->
        <!--<h1 class="title">商品信息</h1>-->
        <!--<p class="text">{{food.info}}</p>-->
        <!--</div>-->

        <!--<split/>-->

        <!--<div class="rating">-->
        <!--<h1 class="title">商品评价</h1>-->
        <!--<ratingselect @select="selectRating" @toggle="toggleContent" :selectType="selectType"-->
        <!--:onlyContent="onlyContent" :desc="desc"-->
        <!--:ratings="food.ratings"></ratingselect>-->
        <!--<div class="rating-wrapper">-->
        <!--<ul v-show="food.ratings && food.ratings.length">-->
        <!--<li v-show="needShow(rating.rateType,rating.text)" v-for="rating in food.ratings"-->
        <!--class="rating-item border-1px">-->
        <!--<div class="user">-->
        <!--<span class="name">{{rating.username}}</span>-->
        <!--<img class="avatar" width="12" height="12" :src="rating.avatar">-->
        <!--</div>-->
        <!--<div class="time">{{rating.rateTime | formatDate}}</div>-->
        <!--<p class="text">-->
        <!--<span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>{{rating.text}}-->
        <!--</p>-->
        <!--</li>-->
        <!--</ul>-->
        <!--<div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>-->
        <!--</div>-->
        <!--</div>-->

      </div>
    </div>
  </transition>

</template>

<script type="es6">
  import CartControll from 'src/components/cart-control/cart-control';
  import BScroll from 'better-scroll';


  export default {
    name: "food-info",
    props: {
      food: {
        type: Object
      }
    },
    components: {
      'cart-control': CartControll
    },
    data() {
      return {
        showFlag: false
      }
    },
    methods: {
      show() {
        this.showFlag = true;

        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs['food'], {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      },

      // 商品详情页的添加购物车组件事件被抛出到goods组件
      addFood(target) {
        this.$emit('add', target);
      },

      hide() {
        this.showFlag = false;
      },

      //第一次加入购物车
      addFirst(event) {
        if (!event._constructed) {
          return;
        }
        this.$emit('add', event.target);
        Vue.set(this.food, 'count', 1);
      },

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background-color: #fff
    transform: translate3d(0, 0, 0)

    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter, &.move-leave-to
      transform: translate3d(100%, 0, 0)

    .image-header
      position: relative
      width: 100%
      height: 0
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-arrow_left
          display: block
          padding: 10px
          font-size: 20px
          color: #fff

    .content
      position: relative
      padding: 18px
      .title
        line-height: 14px
        margin-bottom: 8px
        font-size: 14px
        font-weight: 700
        color: rgb(7, 17, 27)
      .detail
        margin-bottom: 18px
        line-height 10px
        height: 10px
        font-size 0
        .sell-count, .rating
          font-size 10px
          color: rgb(147, 153, 159)
        .sell-count
          margin-right: 12px
      .price
        font-weight: 700
        line-height: 24px
        .now
          margin-right: 8px
          font-size: 14px
          color: rgb(240, 20, 20)
        .old
          text-decoration: line-through
          font-size: 10px
          color: rgb(147, 153, 159)
      .cart-control-wrapper
        position: absolute
        right: 12px
        bottom: 12px
      .buy
        position: absolute
        right: 18px
        bottom: 18px
        z-index: 10
        height: 24px
        line-height: 24px
        padding: 0 12px
        box-sizing: border-box
        border-radius: 12px
        font-size: 10px
        color: #fff
        background: rgb(0, 160, 220)
        opacity: 1
        &.fade-enter-active, &.fade-leave-active
          transition: all 0.2s
        &.fade-enter, &.fade-leave-active
          opacity: 0
          z-index: -1




</style>
