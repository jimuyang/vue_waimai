<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li class="menu-item" :class="{'current':index===currentIndex}" v-for="(menuItem,index) in goods" :key="index"
            @click="selectMenu(index)">
          <span class="text border-1px">
            <act-icon class="act-icon" v-if="menuItem.type>0" :type="menuItem.type" :size="12">
            </act-icon>{{menuItem.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodWrapper">
      <ul>
        <li class="food-list food-list-hook" v-for="(menuItem,index) in goods" :key="index">
          <h1 class="title">{{menuItem.name}}</h1>
          <ul>
            <li class="food-item" v-for="(food,index) in menuItem.foods" :key="index">
              <div class="food-icon">
                <img width="57" height="57" :src="food.icon">
              </div>
              <div class="food-content">
                <h2 class="food-name">{{food.name}}</h2>
                <p class="food-desc">{{food.description}}</p>
                <div class="food-extra">
                  <span class="count">月售{{food.sellCount}}</span>
                  <span class="">好评率{{food.rating}}%</span>
                </div>
                <div class="food-price">
                  <span class="new">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import actIcon from 'components/act-icon/act-icon';
  import BScroll from 'better-scroll';

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: [],
        scrollY: 0,
        foodHeightList: []
      };
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.foodHeightList.length; i++) {
          let current = this.foodHeightList[i];
          let next = this.foodHeightList[i + 1];
          let focus = this.scrollY + 30;
          if (!next || (focus >= current && focus < next)) {
            return i;
          }
        }
        return 0;
      }
    },
    created() {
      this.$http.get('/waimai/api/goods').then((response) => {
        console.log(response);
        this.goods = response.data.goods;
        this.$nextTick(() => {
          this._initScroll();
          this._calcFoodListHeight();
        });
        // this._initScroll();
      });
    },
    components: {
      'act-icon': actIcon
    },
    methods: {
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodScroll = new BScroll(this.$refs.foodWrapper, {
          probeType: 3
        });
        this.foodScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      _calcFoodListHeight() {
        let foodHeightList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.foodHeightList.push(height);

        for (let i = 0; i < foodHeightList.length; i++) {
          let item = foodHeightList[i];
          height += item.clientHeight;
          this.foodHeightList.push(height);
        }
      },
      selectMenu(index) {
        // console.log(index);
        let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
        let el = foodList[index];
        this.foodScroll.scrollToElement(el, 300);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";

  .goods
    position: absolute
    display flex
    top 174px
    width 100%
    bottom 46px
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu-item
        display table
        height 54px
        width 56px
        line-height 14px
        padding 0 12px
        font-size 0
        &.current
          position relative
          margin-top -1px
          background white
          font-weight 700
          .text
            border-none()
        .text
          display table-cell
          width 56px
          vertical-align middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size 12px
          .act-icon
            display inline-block
            vertical-align top
            margin-right 2px
    .foods-wrapper
      flex 1
      .title
        padding-left 14px
        height 26px
        line-height 26px
        border-left 2px solid #d9dde1
        font-size 12px
        color rgb(147, 153, 159)
        background #f3f5f7
      .food-item
        display flex
        margin 18px
        padding-bottom 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom 0
        .food-icon
          flex: 0 0 57px
          margin-right 10px
        .food-content
          flex 1
          .food-name
            margin 2px 0 8px 0
            height 14px
            line-height 14px
            font-size 14px
            color rgb(7, 17, 27)
          .food-desc, .food-extra
            line-height 10px
            font-size 10px
            color rgb(147, 153, 159)
          .food-desc
            margin-bottom 8px
            line-height 12px
          .food-extra
            .count
              margin-right 12px
          .food-price
            font-weight 700
            line-height 24px
            .new
              margin-right 8px
              font-size 14px
              color rgb(240, 20, 20)
            .old
              text-decoration line-through
              font-size 10px
              color rgb(147, 153, 159)

</style>
