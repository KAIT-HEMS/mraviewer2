// router/index.ts
// Vue Router を利用して表示するページの定義
// ページを追加・削除する場合はこのファイルを修正する

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () =>
      import(/* webpackChunkName: "setting" */ "../views/SettingView.vue"),
  },
  {
    path: "/remark",
    name: "remark",
    component: () =>
      import(/* webpackChunkName: "remark" */ "../views/RemarkView.vue"),
  },
  {
    path: "/bitmap",
    name: "bitmap",
    component: () =>
      import(/* webpackChunkName: "remark" */ "../views/BitmapView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
