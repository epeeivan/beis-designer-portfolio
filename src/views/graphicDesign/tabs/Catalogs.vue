<script setup>
import catalogs from "@/assets/datas/achievments/graphic_design/catalogs.js";
import TabBodyContainer from "@/components/TabBodyContainer.vue";
</script>
<template>
  <TabBodyContainer :title="$t('labels.catalogs')" :items="catalogs" />
</template>
