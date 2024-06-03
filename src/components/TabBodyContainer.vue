<script setup>
import CardImage from "@/components/cards/CardImage.vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <div class="space-y-5">
    <h1 class="text-lg capitalize font-bold">{{ title }}</h1>

    <div
      class="grid xl:grid-cols-3 3xl:grid-cols-4 lg:grid-cols-2 gap-10 transition-all duration-100 ease-linear"
    >
      <CardImage
        v-for="(item, index) in items"
        :key="`${title}-acheivments-${index}`"
        :item="item"
      />
    </div>
  </div>
</template>
