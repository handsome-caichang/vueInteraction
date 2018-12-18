import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuex from "vuex";
import allStore from "./store";
Vue.use(Vuex);

const store = new Vuex.Store({
  ...allStore
});

Vue.config.productionTip = false;

window.h5Store = store;

import filters from "./assets/js/filter.js";
import tool from "./assets/js/tool.js";
var app = {
  tool,
  filters
};
Vue.prototype.app = window.app = app;

const editFlag = app.tool.parseQuery(location.hash).edit;

if (editFlag == 1){
  store.commit("set_isEdit", true);
}else {
  store.commit("set_isEdit", false);
}


Vue.mixin({
  filters: filters
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});