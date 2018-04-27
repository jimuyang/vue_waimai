<template>
  <div class="cart-control">
    <transition name="move">
      <div class="remove" v-show="food.count>0" @click.stop.prevent="removeCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>

    <div class="count" v-show="food.count>0">{{ food.count }}</div>

    <div class="add icon-add_circle" @click.stop.prevent="addCart"></div>

    <div class="ball-container">
      <transition name="drop">
        <div class="ball" v-for="ball in balls" v-show="ball.show">
          <div class="inner"></div>
        </div>
      </transition>
    </div>
  </div>

</template>

<script type="es6">
  import Vue from 'vue';

  export default {
    name: "cart-control",
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        balls: []
      }
    },
    created() {
      // console.log(this.food);
    },
    methods: {
      addCart() {
        // console.log('click');
        if (!this.food.count) {
          // this.food.count = 1;
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$emit('add', event.target);
      },
      removeCart() {
        // console.log('click');
        if (this.food.count) {
          this.food.count--;
        }
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart-control
    font-size 0
    .remove
      display: inline-block
      padding: 6px /*增加可点击区域*/
      &.move-enter-active, &.move-leave-active
        transition: all 0.4s linear
      &.move-enter, &.move-leave-to
        opacity: 0
        transform translate3d(24px, 0, 0)
        .inner
          transform rotate(180deg)
      .inner
        display: inline-block
        font-size 24px
        line-height 24px
        color: rgb(0, 160, 220)
        transition: all 0.4s linear
        transform: rotate(0)
    .count
      display: inline-block
      font-size 10px
      line-height 24px
      vertical-align top
      padding-top 6px
    .add
      display: inline-block
      padding: 6px /*增加可点击区域*/
      font-size 24px
      line-height 24px
      color: rgb(0, 160, 220)
</style>
