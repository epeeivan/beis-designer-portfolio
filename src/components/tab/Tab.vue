<script setup>
import TabItem from "./TabItem.vue";
defineProps({
  headers: {
    type: Array,
    default: [],
  },
});
</script>
<template>
  <div class="space-y-5">
    <!-- headers -->
    <div class="flex space-x-4 sticky top-0">
      <TabItem
        v-for="(header, index) in headers"
        :key="`tab-header-${index}`"
        :item="header"
      />
    </div>
    <!-- content -->
    <div class="w-full">
      <router-view v-slot="{ Component, route }">
        <transition name="slide" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>
