<script setup lang="ts">
import projects from "@/assets/datas/projects";
import TabBodyContainer from "@/components/TabBodyContainer.vue";

const items = projects.filter((p) => p.disciplines.includes("ui_ux"));
</script>
<template>
  <TabBodyContainer :title="''" :items="items" />
</template>
