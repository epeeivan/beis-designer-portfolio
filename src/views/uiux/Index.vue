<script setup lang="ts">
import softwares from "@/assets/datas/softwares";
import websites from "@/assets/datas/achievements/ui_ux/websites";
import webApps from "@/assets/datas/achievements/ui_ux/web_apps";
import apps from "@/assets/datas/achievements/ui_ux/apps";
import designSystems from "@/assets/datas/achievements/ui_ux/design_systems";
import SkillsPageLayout from "@/layouts/SkillsPageLayout.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const infos = {
  softwares: {
    description: "softwares.ui_ux.description",
    items: softwares.ui_ux,
  },
  headers: [
    {
      to: "home.ui-ux",
      text: t("labels.all"),
      count: websites.length + webApps.length + apps.length + designSystems.length,
    },
    {
      to: "home.ui-ux.websites",
      text: t("labels.websites"),
      count: websites.length,
    },
    {
      to: "home.ui-ux.web-app",
      text: t("labels.web_apps"),
      count: webApps.length,
    },
    {
      to: "home.ui-ux.apps",
      text: t("labels.apps"),
      count: apps.length,
    },
    {
      to: "home.ui-ux.design-systems",
      text: t("labels.design_systems"),
      count: designSystems.length,
    },
  ],
};
</script>
<template>
  <SkillsPageLayout :infos="infos" />
</template>
