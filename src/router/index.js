import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import CountryPage from "../pages/CountryPage.vue";
import PageNotFound from "../pages/PageNotFound.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/country", name: "country", component: CountryPage },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});
