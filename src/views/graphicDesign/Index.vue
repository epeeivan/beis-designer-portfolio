<script setup lang="ts">
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
      text: t("labels.brand_identity"),
      count: 6,
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
