<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useHead } from "@unhead/vue";
import { useLocale } from "@/composables/useLocale";

const route = useRoute();
const { t } = useI18n({ useScope: "global" });
const { locale } = useLocale();

const SITE_NAME = "BÉBÉ — Portfolio";
const SITE_URL = "https://beis-designer-portfolio.onrender.com";
const OG_IMAGE = `${SITE_URL}/images/projects/portfolio/ui_ux/landing/cover.webp`;

const ROUTE_META = {
  home: { titleKey: "labels.ui_ux_designer" },
  "home.ui-ux": { titleKey: "labels.all" },
  "home.ui-ux.websites": { titleKey: "labels.websites" },
  "home.ui-ux.web-app": { titleKey: "labels.web_apps" },
  "home.ui-ux.apps": { titleKey: "labels.apps" },
  "home.ui-ux.design-systems": { titleKey: "labels.design_systems" },
  "home.graphic-design": { titleKey: "labels.all" },
  "home.graphic-design.brand-identity": { titleKey: "labels.brand_identity" },
  "home.graphic-design.catalogs": { titleKey: "labels.catalogs" },
  "home.resume": { titleKey: "labels.experiences" },
  "home.resume.schools": { titleKey: "labels.schools" },
};

const pageTitle = computed(() => {
  const cfg = ROUTE_META[route.name];
  return cfg?.titleKey
    ? `${t(cfg.titleKey)} — ${SITE_NAME}`
    : SITE_NAME;
});

const pageDescription = computed(() => t("labels.profile_description"));
const pageUrl = computed(() => `${SITE_URL}${route.path}`);

useHead({
  title: pageTitle,
  htmlAttrs: { lang: locale },
  meta: [
    { name: "description", content: pageDescription },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:type", content: "website" },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:url", content: pageUrl },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: OG_IMAGE },
  ],
});
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
<style>
@import "@/assets/css/input.css";
</style>
