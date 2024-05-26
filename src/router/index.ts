import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import LandingPage from "@/views/Landing/LandingPage.vue";

import * as constants from "@/router/constants";

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

router.beforeEach((to, from, next) => {
  const location = to.meta && to.meta.title ? to.meta.title : null;
  document.title = location
    ? `${location} ${constants.DIVIDER} ${constants.BASE_TITLE}`
    : constants.BASE_TITLE;
  next();
});

export default router;
