import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Vuex from "vuex";
import allStore from "./store";
Vue.use(Vuex);

const store = new Vuex.Store({
  ...allStore
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
