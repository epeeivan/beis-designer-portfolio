<script setup lang="ts">
import websites from "@/assets/datas/achievements/ui_ux/websites";
import webApps from "@/assets/datas/achievements/ui_ux/web_apps";
import apps from "@/assets/datas/achievements/ui_ux/apps";
import designSystems from "@/assets/datas/achievements/ui_ux/design_systems";
import TabBodyContainer from "@/components/TabBodyContainer.vue";

const items = [...websites, ...webApps, ...apps, ...designSystems];
</script>
<template>
  <TabBodyContainer :title="$t('labels.all')" :items="items" />
</template>
