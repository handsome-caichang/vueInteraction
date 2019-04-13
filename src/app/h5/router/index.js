import Vue from 'vue'
import Router from 'vue-router'
// 拼团
// import Home from 'h5/pages/pingtuan/home'
// import Product from 'h5/pages/pingtuan/child/product'
// import Order from "h5/pages/pingtuan/child/order";
// import Detail from "h5/pages/pingtuan/child/detail";
/* 抽奖大转盘 */
// import LuckDraw from "h5/pages/luckDraw/luckDraw";
/* 奖品详情 */
import AwardDetail from "h5/pages/awardDetail/awardDetail";
const LuckDraw = () =>
  import(/*webpackChunkName: "luckDraw"*/ "h5/pages/luckDraw/luckDraw.vue");
const ContactInfo = () =>
  import(/*webpackChunkName: "contactInfo"*/ "h5/pages/contactInfo/contactInfo.vue");


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/luckDraw"
    },
    {
      path: "/luckDraw",
      name: "luckDraw",
      component: LuckDraw
    },
    {
      path: "/awardDetail",
      name: "awardDetail",
      component: AwardDetail
    },
    {
      path: "/contactInfo",
      name: "contactInfo",
      component: ContactInfo
    }
  ]
});
