import Vue from 'vue'
import Router from 'vue-router'
// 拼团
import Home from 'h5/pages/pingtuan/home'
import Product from 'h5/pages/pingtuan/child/product'
import Order from "h5/pages/pingtuan/child/order";
import Detail from "h5/pages/pingtuan/child/detail";
/* 抽奖大转盘 */
import LuckDraw from "h5/pages/luckDraw/luckDraw";
/* 奖品详情 */
import AwardDetail from "h5/pages/awardDetail/awardDetail";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/luckDraw"
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      redirect: "/home/product",
      children: [
        {
          path: "product",
          component: Product
        },
        {
          path: "order",
          component: Order
        },
        {
          path: "product/:id",
          component: Detail
        }
      ]
    },
    {
      path: "/luckDraw",
      name: "luckDraw",
      component: LuckDraw,
    },
    {
      path: "/awardDetail/:id",
      name: "awardDetail",
      component: AwardDetail
    }
  ]
});
