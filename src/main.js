// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';

import 'common/stylus/index.styl';

Vue.config.productionTip = false;

// 这是postman的 mock rest api地址
axios.defaults.baseURL = 'https://3ef68e2a-2514-4ebc-8d8d-afa2bb8bc62f.mock.pstmn.io';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

// history replace 一个路由 /goods
router.replace({
  name: 'goods'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
