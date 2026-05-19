<script setup lang="ts">
import type { PropType } from "vue";
import type { RouteLocationRaw } from "vue-router";

defineProps({
  isLink: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object] as PropType<RouteLocationRaw>,
    default: "",
  },
  href: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <router-link v-if="!isLink" :to="to" v-bind="$attrs">
    <slot />
  </router-link>
  <a v-else :href="href" v-bind="$attrs" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
</template>
