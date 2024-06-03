<script setup>
defineProps({
  src: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div
    class="p-5 border-4 border-dashed border-base_yellow rounded-full w-[fit-content] h-[fit-content]"
  >
    <img :src="src" class="rounded-full" alt="" />
  </div>
</template>
