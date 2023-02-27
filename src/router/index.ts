import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import CreateMap from "../views/CreateMap.vue";
import ViewMap from "../views/ViewMap.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/create-map",
      name: "CreateMap",
      component: CreateMap,
    },
    {
      path: "/view-map",
      name: "ViewMap",
      component: ViewMap,
    },
  ],
});

export default router;
