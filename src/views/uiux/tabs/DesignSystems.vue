<script setup lang="ts">
import designSystems from "@/assets/datas/achievements/ui_ux/design_systems";
import TabBodyContainer from "@/components/TabBodyContainer.vue";
</script>
<template>
  <TabBodyContainer
    :title="$t('labels.design_systems')"
    :items="designSystems"
  />
</template>
