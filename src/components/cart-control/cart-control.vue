<template>
  <div class="cart-control">
    <div class="remove icon-remove_circle_outline" @click="addCart"></div>
    <div class="count">1</div>
    <div class="add icon-add_circle" @click="removeCart"></div>
  </div>

</template>

<script type="es6">
  export default {
    name: "cart-control",
    props: {
      food: {
        type: Object
      }
    },
    created() {
      console.log(this.food);
    },
    methods: {
      addCart() {
        console.log('click');
      },
      removeCart() {
        console.log('click');
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart-control
    font-size 0
    .remove, .add
      display: inline-block
      padding: 6px
      font-size 24px
      line-height 24px
      color: rgb(0, 160, 220)
    .count
      display: inline-block
      font-size 10px
      line-height 24px
      vertical-align top
      padding-top 6px
</style>
