<script setup>
import logos from "@/assets/datas/achievements/graphic_design/logos.js";
import TabBodyContainer from "@/components/TabBodyContainer.vue";
</script>
<template>
  <TabBodyContainer :title="$t('labels.logos')" :items="logos" />
</template>
