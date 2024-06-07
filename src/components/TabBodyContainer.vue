<script setup>
import CardImage from "@/components/cards/CardImage.vue";
import Preview from "@/components/Preview.vue";
import { computed, reactive, ref } from "vue";

defineEmits(["showDetails"]);

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
const isDetailsShowed = computed(() => {
  return selectedItem.value != null ? true : false;
});

const selectedItem = ref(null);

function setSelectedItem(item = null) {
  selectedItem.value = item;

}
</script>

<template>
  <div class="">
    <div class="space-y-5">
      <h1 class="text-lg capitalize font-bold">{{ title }}</h1>

      <div
        class="grid xl:grid-cols-3 3xl:grid-cols-4 lg:grid-cols-2 gap-10 transition-all duration-100 ease-linear"
      >
        <CardImage
          v-for="(item, index) in items"
          :key="`${title}-acheivments-${index}`"
          :item="item"
          @click="setSelectedItem(item)"
        />
      </div>
    </div>
    <Preview
      v-if="isDetailsShowed"
      :item="selectedItem"
      @hide-details="setSelectedItem()"
    />
  </div>
</template>
