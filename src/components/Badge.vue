<script setup>
import { computed, ref } from "vue";
import Icon from "@/components/Icon.vue";

const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
});
const typeClasses = computed(() => {
  switch (props.type) {
    case "yellow":
      return "bg-base_yellow text-dark-100";

    default:
      return "bg-silver dark:bg-dark-300 dark:text-silver";
  }
});

const hasIcon = computed(() => props.icon);
</script>

<template>
  <a
    v-bind="$attrs"
    :class="[
      ' h-min space-x-2 p-2 text-xs rounded-lg text-dark-100 flex w-min font-semibold py-1',
      typeClasses,
    ]"
  >
    <slot name="flag" />
    <Icon v-if="hasIcon" :name="icon" :stroke-width="2" :size="15" />
    <span v-if="text" class="block">{{ text }}</span>
  </a>
</template>
