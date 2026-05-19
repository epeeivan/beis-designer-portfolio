<script setup lang="ts">
import brandIdentity from "@/assets/datas/achievements/graphic_design/brand_identity";
import TabBodyContainer from "@/components/TabBodyContainer.vue";
</script>
<template>
  <TabBodyContainer
    :title="$t('labels.brand_identity')"
    :items="brandIdentity"
  />
</template>
