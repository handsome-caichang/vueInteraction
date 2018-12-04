import Vue from 'vue'
import Router from 'vue-router'
import Edit from '@/pages/edit/edit.vue'
import Home from "@/pages/home";
import Login from "@/pages/login/login";
import Register from "@/pages/login/register";
import Verification from "@/pages/verification/verification.vue";

// const HelloWorld = () => import("@/components/HelloWorld");
// const Edit = () => import("@/pages/edit/edit");
console.log(Verification);
Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: "/register" },
    {
      path: "/login",
      name: "login",
      component: Login
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
    },
    {
      path: "/verification",
      name: "verification",
      component: Verification
    }
  ]
});


