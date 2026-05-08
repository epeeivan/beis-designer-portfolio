<script setup>
defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "BEBE EPEE Ivan Sampi",
  },
});
</script>
<template>
  <div
    class="p-5 border-4 border-dashed border-base_yellow rounded-full w-fit h-fit"
  >
    <img :src="src" class="rounded-full" :alt="alt" />
  </div>
</template>
