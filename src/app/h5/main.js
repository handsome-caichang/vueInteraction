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
import base from "./assets/js/base.js";
import wxsdk from "./assets/js/wx.js";

Vue.mixin({
  filters: filters
});

var app = {
  tool,
  base,
  filters,
  wxsdk
};

Vue.prototype.app = window.app = app;
import { getconfig } from "h5Api/jie.js";

import JDialog from "./components/popup/dialog.js";
import { getLotteryData } from "./api/jie.js";
Vue.use(JDialog, { root: app });

const editFlag = app.tool.parseQuery(location.hash).edit;
if (editFlag == 1) {
  store.commit("set_isEdit", true);
  window.h5AllData = {
    // 模拟数据
    luckDraw: {
      id: "b5c3da18ccc74376b3492802e9c6d9f0",
      templateID: null,
      createTime: "2018-12-10T03:47:03.421Z",
      updateTime: "2018-12-14T03:17:37.278Z",
      createUserID: "00000000000000000000000000000000",
      baseInfo: {
        name: "参与活动赢大奖",
        startTime: "2018-12-14T02:58:21Z",
        endTime: "2018-12-14T02:58:21Z",
        isPublish: false,
        url: "",
        limitCount: 10000,
        visualUserCount: 0,
        isShowUserCount: true,
        userCount: 0,
        activityInfo: "点击“开始”转盘开始转动，最终指针指着的即为您所中的奖品"
      },
      advancedSetting: {
        isCanShare: true,
        shareImage: "1",
        shareWinContent: "​我已经在活动中抽到了奖品，你也快来抽大奖吧！",
        shareNowinContent:
          "​轻轻松松就能抽到大奖，积攒多年的人品终于有用了，你也赶紧来抽奖吧！！"
      },
      lotteryInfo: {
        totalLimit: -1,
        dailyLimit: 3,
        winLimit: 1,
        totalWinPrecent: 10.0,
        noGiftNotify: "奖品已经派完",
        contactType: 0
      },
      gifts: [
        {
          id: "36fb60143991409283db8c6c942a2dab",
          levelName: "一等奖",
          name: "价值100元礼品",
          count: 0,
          operationNotify: "凭券联系现场工作人员兑奖",
          address: "请填写您的兑奖地址或者门店地址",
          telphone: "88888888",
          cashStartTime: "2018-12-14T02:58:21Z",
          cashEndTime: "2018-12-14T02:58:21Z",
          isConsolation: false
        },
        {
          id: "fca6d44bfdc940ee87a4242a0a145050",
          levelName: "二等奖",
          name: "价值50元礼品",
          count: 0,
          operationNotify: "凭券联系现场工作人员兑奖",
          address: "请填写您的兑奖地址或者门店地址",
          telphone: "88888888",
          cashStartTime: "2018-12-14T02:58:21Z",
          cashEndTime: "2018-12-14T02:58:21Z",
          isConsolation: false
        },
        {
          id: "4f8674907d594b9fa8595ca1477cd7e0",
          levelName: "三等奖",
          name: "价值10元礼品",
          count: 0,
          operationNotify: "凭券联系现场工作人员兑奖",
          address: "请填写您的兑奖地址或者门店地址",
          telphone: "",
          cashStartTime: "2018-12-14T02:58:21Z",
          cashEndTime: "2018-12-14T02:58:21Z",
          isConsolation: false
        }
      ],
      h5Data: {
        awardDetailName: "长沙市校管家教育科技有限公司",
        awardDetaiInfo: "兑换券详情"
      },
      address: {
        name: "xiaogj",
        mobile: "13800000000",
        province: "北京市",
        city: "市辖区",
        region: "东城区",
        address: "平安街道103号"
      }
    },
    awardDetail: {
      giftId: "1",
      id: "", // id
      levelName: "一等奖", // 奖品等级名称
      name: "价值100元礼品", // 奖品名称
      count: 0, // 奖品数量
      operationNotify: "凭券联系现场工作人员兑奖", // 操作提示
      address: "请填写您的兑奖地址或者门店地址", // 兑换地址
      telphone: "88888888", // 联系电话
      cashStartTime: app.tool.getNowFormatDate(), // 兑换开始时间
      cashEndTime: app.filters.formatDatetime(
        new Date().getTime() + 3600 * 1000 * 24 * 7,
        "yyyy-MM-dd hh:mm:ss"
      ), // 兑换结束时间
      isConsolation: false // 是否是安慰奖
    }
  };
  new Vue({ el: "#app", router, store, render: h => h(App) });
} else {
  getLotteryData({ id: app.tool.parseQuery(location.hash).id }).then(res => {
    if (res.errorCode == 0) {
      console.log(res);
      let data = res.data;
      window.h5AllData = {
        // 模拟数据
        luckDraw: {
          id: data.id,
          baseInfo: {
            name: data.bizData.name,
            startTime: data.bizData.startTime,
            endTime: data.bizData.endTime,
            isPublish: data.bizData.isPublish, // url: "",
            // limitCount: 10000,  //  参与人数限制，没用
            visualUserCount: 0,
            isShowUserCount: data.bizData.isShowUserCount,
            userCount: data.statisticData.customerCount,
            activityInfo: data.bizData.activityInfo
          },
          advancedSetting: {
            isCanShare: data.bizData.isCanShare,
            shareImage: data.bizData.shareImage,
            shareWinContent: data.bizData.shareWinContent,
            shareNowinContent: data.bizData.shareNowinContent,
            shareUrl: data.bizData.shareUrl
          },
          lotteryInfo: {
            dailyLimit: data.myData.dailyLeftCount,
            totalLimit: data.myData.totalLeftCount,
            noGiftNotify: data.bizData.noGiftNotify,
            contactType: data.bizData.contactType
          },
          gifts: data.bizData.gifts,
          h5Data: JSON.parse(data.h5Data),
          myDataGifts: data.myData.gifts,
          address: data.myData.address
        },
        awardDetail: {}
      }; // 抽奖的时候没用， // 分享的url // 0 不用填写 1 参与前，2 参与后
      app.tool.setDocTitle(data.bizData.name);
      // next();
    } else {
      app.alert(res.errorMessage);
    }
  });
  store.commit("set_isEdit", false);
  getconfig().then(res => {
    if (res.errorCode == 0) {
      let config = {
        //配置微信jssdk
        debug: false,
        appId: res.data.jsConfig.appId,
        timestamp: res.data.jsConfig.timestamp,
        nonceStr: res.data.jsConfig.nonceStr,
        signature: res.data.jsConfig.signature
      };
      app.wxsdk.setConfig(config);
      new Vue({ el: "#app", router, store, render: h => h(App) });
    }
  });
}
