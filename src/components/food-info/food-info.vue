<template>
  <transition name="move">
    <div class="food" v-show="showFlag" ref="food">

      <div class="food-content">

        <div class="image-header">
          <img :src="food.image"/>
          <div class="back" @click="hide">
            <i class="icon-arrow_lift"/>
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

          <div class="cartcontrol-wrapper">
            <cartcontrol @add="addFood" :food="food"/>
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

      }


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
      position: absolute
      width: 100% 

</style>
