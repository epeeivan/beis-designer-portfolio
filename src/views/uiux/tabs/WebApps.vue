<script setup>
import webapps from "@/assets/datas/achievements/ui_ux/web_apps.js";
import TabBodyContainer from "@/components/TabBodyContainer.vue";
</script>
<template>
  <TabBodyContainer :title="$t('labels.web_apps')" :items="webapps" />
</template>
