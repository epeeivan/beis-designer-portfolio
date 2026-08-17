<script setup lang="ts">
import CardImage from "@/components/cards/CardImage.vue";
import Preview from "@/components/Preview.vue";
import { computed, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const selectedIndex = ref<number | null>(null);

const selectedItem = computed(() =>
  selectedIndex.value != null ? props.items[selectedIndex.value] : null,
);
const hasPrev = computed(
  () => selectedIndex.value != null && selectedIndex.value > 0,
);
const hasNext = computed(
  () =>
    selectedIndex.value != null && selectedIndex.value < props.items.length - 1,
);

function open(index: number) {
  selectedIndex.value = index;
}
function close() {
  selectedIndex.value = null;
}
function prev() {
  if (hasPrev.value && selectedIndex.value != null) selectedIndex.value -= 1;
}
function next() {
  if (hasNext.value && selectedIndex.value != null) selectedIndex.value += 1;
}
</script>

<template>
  <div>
    <div class="space-y-5">
      <h1 v-if="title" class="text-lg capitalize font-bold">{{ title }}</h1>

      <div
        class="grid xl:grid-cols-3 2xl:grid-cols-6 lg:grid-cols-2 gap-5 transition-all duration-100 ease-linear"
      >
        <CardImage
          v-for="(item, index) in items"
          :key="`${title}-achievements-${index}`"
          :item="item"
          @click="open(index)"
        />
      </div>
    </div>
    <Preview
      v-if="selectedItem"
      :item="selectedItem"
      :has-prev="hasPrev"
      :has-next="hasNext"
      @prev="prev"
      @next="next"
      @hide-details="close"
    />
  </div>
</template>
