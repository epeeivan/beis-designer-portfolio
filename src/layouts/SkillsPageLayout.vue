<script setup lang="ts">
import Tab from "@/components/tab/Tab.vue";

defineProps({
  infos: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="space-y-5">
    <div class="space-y-5">
      <div class="space-y-2">
              <h1 class="text-lg font-semibold capitalize">
        {{ $t("labels.softwares") }}
      </h1>
      <p>
        {{ $t(infos?.softwares?.description) }}
      </p>
      </div>

      <div class="flex flex-wrap space-x-10">
        <div
          v-for="(software, index) in infos?.softwares?.items"
          :key="`software-${index}`"
          class="space-y-2"
        >
          <img
            class="block h-[70px]"
            :src="`${software?.img}`"
            :alt="software?.label ?? ''"
            loading="lazy"
            decoding="async"
          />
          <span class="block text-center">{{ software?.label }}</span>
        </div>
      </div>
    </div>
    <h1 class="text-lg capitalize font-semibold">
      {{ $t("labels.achievements") }}
    </h1>

    <Tab :headers="infos?.headers" />
  </div>
</template>
