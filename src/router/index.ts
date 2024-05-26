import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import LandingPage from "@/views/Landing/LandingPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "landing-page",
    component: LandingPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
