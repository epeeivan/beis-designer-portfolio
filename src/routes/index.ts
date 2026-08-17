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
        path: "projects",
        component: () => import("@/views/projects/Index.vue"),
        children: [
          {
            path: "",
            name: "home.projects",
            component: () => import("@/views/projects/tabs/All.vue"),
          },
          {
            path: "ui-ux",
            name: "home.projects.ui-ux",
            component: () => import("@/views/projects/tabs/UiUx.vue"),
          },
          {
            path: "branding",
            name: "home.projects.branding",
            component: () => import("@/views/projects/tabs/Branding.vue"),
          },
        ],
      },
      // Backward-compat: old discipline routes now point to the unified projects view.
      { path: "ui-ux", redirect: { name: "home.projects" } },
      { path: "ui-ux/:pathMatch(.*)*", redirect: { name: "home.projects" } },
      { path: "graphic-design", redirect: { name: "home.projects" } },
      { path: "graphic-design/:pathMatch(.*)*", redirect: { name: "home.projects" } },
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
