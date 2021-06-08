import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/a",
  },
  {
    path: "/a",
    name: "a",
    component: () => import("@/views/a.vue"),
  },
  {
    path: "/b",
    name: "b",
    component: () => import("@/views/b.vue"),
  },
  {
    path: "/c",
    name: "c",
    component: () => import("@/views/c.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
