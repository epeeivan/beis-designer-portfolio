<script setup>
import flyers from "@/assets/datas/achievments/graphic_design/flyers.js";
import TabBodyContainer from "@/components/TabBodyContainer.vue";
</script>
<template>
  <TabBodyContainer :title="$t('labels.flyers')" :items="flyers" />
</template>
