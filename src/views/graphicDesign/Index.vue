<script setup>
import softwares from "@/assets/datas/softwares";
import SkillsPageLayout from "@/layouts/SkillsPageLayout.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const infos = {
  softwares: {
    description: t("softwares.graphic_design.description"),
    items: softwares.graphic_design,
  },
  headers: [
    {
      to: "home.graphic-design",
      text: t("labels.flyers"),
      count: 3,
    },
    {
      to: "home.graphic-design.logos",
      text: t("labels.logos"),
      count: 8,
    },
    {
      to: "home.graphic-design.catalogs",
      text: t("labels.catalogs"),
      count: 3,
    },
  ],
};
</script>
<template>
  <SkillsPageLayout :infos="infos" />
</template>
