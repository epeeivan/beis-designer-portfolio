import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes } from "@/routes";
import i18n from "@/i18n";

export const createApp = ViteSSG(
  App,
  { routes, base: "/", linkExactActiveClass: "active" },
  ({ app }) => {
    app.use(i18n);
  },
);
