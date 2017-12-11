import Vue from 'vue';
import VueRouter from 'vue-router';
import goods from 'components/goods/goods';
import seller from 'components/seller/seller';
import rating from 'components/rating/rating';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  // base: '/app/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: goods
    // },
    { path: '/goods',
      name: 'goods',
      component: goods
    },
    { path: '/seller',
      name: 'seller',
      component: seller
    },
    { path: '/rating',
      name: 'rating',
      component: rating
    }
  ]
});
