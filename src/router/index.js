import { createRouter, createWebHashHistory } from "vue-router";

import AuthView from "@/views/AuthView.vue";
import BonusView from "@/views/BonusView.vue";
import RecognitionsView from "@/views/RecognitionsView.vue";
import AdminView from "@/views/AdminView.vue";
import ProfileView from "@/views/ProfileView.vue";

const routes = [
  {
    path: "/",
    name: "bonuses",
    component: BonusView,
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/bonuses",
    name: "bonuses",
    component: BonusView,
  },
  {
    path: "/recognitions",
    name: "recognitions",
    component: RecognitionsView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
