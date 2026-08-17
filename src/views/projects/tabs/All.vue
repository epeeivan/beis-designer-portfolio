<script setup lang="ts">
import projects from "@/assets/datas/projects";
import TabBodyContainer from "@/components/TabBodyContainer.vue";
</script>
<template>
  <TabBodyContainer :title="''" :items="projects" />
</template>
