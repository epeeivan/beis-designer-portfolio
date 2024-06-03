<script setup>
import softwares from "@/assets/datas/softwares";
import ui_ux from "@/assets/datas/achievments/ui_ux.js";
import CardImage from "@/components/cards/CardImage.vue";
</script>
<template>
  <div class="space-y-5">
    <h1 class="text-lg font-semibold capitalize">
      {{ $t("labels.software") }}
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur. Porttitor pharetra consequat
      vulputate molestie vehicula risus. Ut ac enim dui gravida sit tellus magna
      sem. Diam semper eu dapibus nulla dis diam eget. Mattis auctor fermentum
      ut et consectetur in luctus morbi curabitur.
    </p>
    <div class="flex flex-wrap space-x-10">
      <img
        v-for="(software, index) in softwares.ui_ux"
        :key="`ui-ux-sofware-${index}`"
        class="block h-[70px] my-auto"
        :src="`/public/images/${software?.img}.png`"
        alt=""
      />
    </div>

    <h1 class="text-lg capitalize font-bold">{{ $t("labels.acheivments") }}</h1>

    <div class="grid lg:grid-cols-3 gap-10">
      <CardImage
        v-for="(acheivment, index) in ui_ux"
        :key="`ui-ux-acheivments-${index}`"
        :item="acheivment"
      />
    </div>
  </div>
</template>
