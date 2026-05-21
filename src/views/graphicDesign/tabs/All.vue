<script setup lang="ts">
import brandIdentity from "@/assets/datas/achievements/graphic_design/brand_identity";
import catalogs from "@/assets/datas/achievements/graphic_design/catalogs";
import TabBodyContainer from "@/components/TabBodyContainer.vue";

const items = [...brandIdentity, ...catalogs];
</script>
<template>
  <TabBodyContainer :title="$t('labels.all')" :items="items" />
</template>
