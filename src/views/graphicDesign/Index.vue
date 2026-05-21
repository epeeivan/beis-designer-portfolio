<script setup lang="ts">
import softwares from "@/assets/datas/softwares";
import brandIdentity from "@/assets/datas/achievements/graphic_design/brand_identity";
import catalogs from "@/assets/datas/achievements/graphic_design/catalogs";
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
      text: t("labels.all"),
      count: brandIdentity.length + catalogs.length,
    },
    {
      to: "home.graphic-design.brand-identity",
      text: t("labels.brand_identity"),
      count: brandIdentity.length,
    },
    {
      to: "home.graphic-design.catalogs",
      text: t("labels.catalogs"),
      count: catalogs.length,
    },
  ],
};
</script>
<template>
  <SkillsPageLayout :infos="infos" />
</template>
