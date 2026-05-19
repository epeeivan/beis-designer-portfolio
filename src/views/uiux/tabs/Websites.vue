<script setup lang="ts">
import websites from "@/assets/datas/achievements/ui_ux/websites";
import TabBodyContainer from "@/components/TabBodyContainer.vue";
</script>
<template>
  <TabBodyContainer :title="$t('labels.websites')" :items="websites" />
</template>
