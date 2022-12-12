import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import BusinessInformation from "../views/BusinessInformation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/businessInformation",
      name: "BusinessInformation",
      component: BusinessInformation,
    },
  ],
});

export default router;
