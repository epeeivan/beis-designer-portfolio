<script setup lang="ts">
import catalogs from "@/assets/datas/achievements/graphic_design/catalogs";
import TabBodyContainer from "@/components/TabBodyContainer.vue";
</script>
<template>
  <TabBodyContainer :title="$t('labels.catalogs')" :items="catalogs" />
</template>
