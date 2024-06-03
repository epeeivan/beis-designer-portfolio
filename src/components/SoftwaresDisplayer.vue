<script setup>
defineProps({
  description: {
    type: String,
    default: "",
  },
  sofwares: {
    type: Array,
    default: [],
  },
});
</script>
<template>
  <div class="space-y-5">
    <h1 class="text-lg font-semibold capitalize">
      {{ $t("labels.softwares") }}
    </h1>
    <p>
      {{ description }}
    </p>
    <div class="flex flex-wrap space-x-10">
      <img
        v-for="(software, index) in softwares"
        :key="`ui-ux-sofware-${index}`"
        class="block h-[70px] my-auto"
        :src="`/images/softwares/graphic_design/${software?.img}.png`"
        alt=""
      />
    </div>
  </div>
</template>
