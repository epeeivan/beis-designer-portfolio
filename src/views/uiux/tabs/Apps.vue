<script setup>
import apps from "@/assets/datas/achievements/ui_ux/apps.js";
import TabBodyContainer from "@/components/TabBodyContainer.vue";
</script>
<template>
  <TabBodyContainer :title="$t('labels.apps')" :items="apps" />
</template>
