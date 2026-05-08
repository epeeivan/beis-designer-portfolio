<script setup>
import websites from "@/assets/datas/achievements/ui_ux/websites.js";
import TabBodyContainer from "@/components/TabBodyContainer.vue";
</script>
<template>
  <TabBodyContainer :title="$t('labels.websites')" :items="websites" />
</template>
