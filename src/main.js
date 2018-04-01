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
axios.defaults.baseURL = 'https://298ff561-1f9d-4c34-9878-138e51c46462.mock.pstmn.io';

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
