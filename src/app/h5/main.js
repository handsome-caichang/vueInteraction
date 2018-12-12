import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex";
import allStore from "./store"
Vue.use(Vuex);

const store = new Vuex.Store({
  ...allStore
});

Vue.config.productionTip = false

window.h5Store = store;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
