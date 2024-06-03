<script setup>
import logos from "@/assets/datas/achievments/graphic_design/logos.js";
import TabBodyContainer from "@/components/TabBodyContainer.vue";
</script>
<template>
  <TabBodyContainer :title="$t('labels.logos')" :items="logos" />
</template>
