import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: () => {
      return { name: "home" };
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "ui-ux",
        component: () => import("@/views/uiux/Index.vue"),
        children: [
          {
            path: "",
            name: "home.ui-ux",
            component: () => import("@/views/uiux/tabs/Websites.vue"),
          },
          {
            path: "webapps",
            name: "home.ui-ux.web-app",
            component: () => import("@/views/uiux/tabs/WebApps.vue"),
          },
          {
            path: "apps",
            name: "home.ui-ux.apps",
            component: () => import("@/views/uiux/tabs/Apps.vue"),
          },
        ],
      },
      {
        path: "graphic-design",
        component: () => import("@/views/graphicDesign/Index.vue"),
        children: [
          {
            path: "",
            name: "home.graphic-design",
            component: () => import("@/views/graphicDesign/tabs/Flyers.vue"),
          },
          {
            path: "logos",
            name: "home.graphic-design.logos",
            component: () => import("@/views/graphicDesign/tabs/Logos.vue"),
          },
          {
            path: "catalog",
            name: "home.graphic-design.catalogs",
            component: () => import("@/views/graphicDesign/tabs/Catalogs.vue"),
          },
        ],
      },
      {
        name: "home.resume",
        path: "resume",
        component: () => import("@/views/Resume.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkExactActiveClass: "active",
});

export default router;
