import Vue from 'vue'
import Router from 'vue-router'
import Edit from 'pc/pages/edit/edit.vue'
import Home from "pc/pages/home";
import Login from "pc/pages/login/login";
import Register from "pc/pages/login/register";
import Verification from "pc/pages/verification/verification.vue";

// const HelloWorld = () => import("@/components/HelloWorld");
// const Edit = () => import("@/pages/edit/edit");
Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/verification",
      name: "verification",
      component: Verification
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: Edit
    }
  ]
});


