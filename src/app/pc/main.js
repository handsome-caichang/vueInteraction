import Vue from 'vue'
import App from './App'
import router from './router'
import filters from "./assets/js/filter.js";
import JDialog from "./components/popup/dialog.js";
Vue.config.productionTip = false
import Vuex from "vuex";
import allStore from "./store";
Vue.use(Vuex);

import {
  DatePicker,
  TimePicker,
  Pagination,
  DropdownMenu,
  dropdownItem,
  Dropdown,
  Notification
} from "element-ui"; 
import "element-ui/lib/theme-chalk/index.css";
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Pagination);
Vue.use(DropdownMenu);
Vue.use(Dropdown);
Vue.use(dropdownItem);

Vue.prototype.$notify = Notification;

const store = new Vuex.Store({
  ...allStore
});

import tool from 'pcAssets/js/tool.js'
import oss from "pcAssets/js/oss.js";
var app = {
  tool,
  filters,
  oss,
  store
};

Vue.prototype.app = window.app = app;

Vue.use(JDialog, {root: app });

Vue.mixin({
  filters: filters,
});

/* eslint-disable no-new */
window._vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
