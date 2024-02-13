import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import HomePage from "@/views/Home/HomePage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
