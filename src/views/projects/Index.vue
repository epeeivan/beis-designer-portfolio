<script setup lang="ts">
import projects from "@/assets/datas/projects";
import Tab from "@/components/tab/Tab.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const headers = [
  {
    to: "home.projects",
    text: t("labels.all"),
    count: projects.length,
  },
  {
    to: "home.projects.ui-ux",
    text: t("labels.ui_ux"),
    count: projects.filter((p) => p.disciplines.includes("ui_ux")).length,
  },
  {
    to: "home.projects.branding",
    text: t("labels.branding"),
    count: projects.filter((p) => p.disciplines.includes("branding")).length,
  },
];
</script>
<template>
  <div class="space-y-5">
    <h1 class="text-lg capitalize font-semibold">{{ $t("labels.projects") }}</h1>
    <Tab :headers="headers" />
  </div>
</template>
