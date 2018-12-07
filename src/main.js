import Vue from 'vue'
import App from './App'
import router from './router'
import vueFilters from "./assets/js/filter.js";
import JDialog from "./components/popup/dialog.js";
Vue.config.productionTip = false
import Vuex from "vuex";
import allStore from "./store";
Vue.use(Vuex);

const store = new Vuex.Store({
  ...allStore
});
var app = {};
Vue.prototype.app = window.app = app;
  Vue.use(JDialog, {root: app });

Vue.mixin({
  filters: vueFilters
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
