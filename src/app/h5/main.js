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
import wxsdk from "./assets/js/wx.js";

Vue.mixin({
  filters: filters
});

var app = {
  tool,
  filters,
  wxsdk
};

Vue.prototype.app = window.app = app;
import { getconfig } from 'h5Api/jie.js';

const editFlag = app.tool.parseQuery(location.hash).edit;
if (editFlag == 1){
  store.commit("set_isEdit", true);
  new Vue({ el: "#app", router, store, render: h => h(App) });
}else {
  store.commit("set_isEdit", false);
  getconfig().then(res => {
    if (res.errorCode == 0) {
      let config = { //配置微信jssdk
        debug: false,
        appId: res.data.jsConfig.appId,
        timestamp: res.data.jsConfig.timestamp,
        nonceStr: res.data.jsConfig.nonceStr,
        signature: res.data.jsConfig.signature
      }
      app.wxsdk.setConfig(config);
      new Vue({ el: "#app", router, store, render: h => h(App) });
    }
  });
}