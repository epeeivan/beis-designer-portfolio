<script setup>
defineProps({
  isLink: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <router-link v-if="!isLink" v-bind="$attrs">
    <slot />
  </router-link>
  <a v-else v-bind="$attrs">
    <slot />
  </a>
</template>
