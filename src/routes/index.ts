import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: () => ({ name: "home" }),
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
            component: () => import("@/views/uiux/tabs/All.vue"),
          },
          {
            path: "websites",
            name: "home.ui-ux.websites",
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
          {
            path: "design-systems",
            name: "home.ui-ux.design-systems",
            component: () => import("@/views/uiux/tabs/DesignSystems.vue"),
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
            component: () => import("@/views/graphicDesign/tabs/All.vue"),
          },
          {
            path: "brand-identity",
            name: "home.graphic-design.brand-identity",
            component: () => import("@/views/graphicDesign/tabs/BrandIdentity.vue"),
          },
          {
            path: "catalog",
            name: "home.graphic-design.catalogs",
            component: () => import("@/views/graphicDesign/tabs/Catalogs.vue"),
          },
        ],
      },
      {
        path: "resume",
        component: () => import("@/views/resume/Index.vue"),
        children: [
          {
            path: "",
            name: "home.resume",
            component: () => import("@/views/resume/tabs/Experiences.vue"),
          },
          {
            path: "schools",
            name: "home.resume.schools",
            component: () => import("@/views/resume/tabs/Schools.vue"),
          },
        ],
      },
    ],
  },
];
