<script setup>
import softwares from "@/assets/datas/softwares";
import SkillsPageLayout from "@/layouts/SkillsPageLayout.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const infos = {
  softwares: {
    description: t("softwares.ui_ux.description"),
    items: softwares.ui_ux,
  },
  headers: [
    {
      to: "home.ui-ux",
      text: t("labels.websites"),
      count: 8,
    },
    {
      to: "home.ui-ux.web-app",
      text: t("labels.web_apps"),
      count: 8,
    },
    {
      to: "home.ui-ux.apps",
      text: t("labels.apps"),
      count: 4,
    },
  ],
};
</script>
<template>
  <SkillsPageLayout :infos="infos" />
</template>
