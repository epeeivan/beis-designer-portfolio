<script setup>
import Tab from "@/components/tab/Tab.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const headers = ref([
  {
    to: "home.resume",
    text: t("labels.experiences"),
    count: 3,
  },
  {
    to: "home.resume.schools",
    text: t("labels.schools"),
    count: 4,
  },
]);
</script>

<template>
  <Tab :headers="headers" />
</template>
