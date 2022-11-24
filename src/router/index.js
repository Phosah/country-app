import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import CountryDetailsPage from "../pages/CountryDetailsPage.vue";
import PageNotFound from "../pages/PageNotFound.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/country/:id", name: "country", component: CountryDetailsPage },
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
