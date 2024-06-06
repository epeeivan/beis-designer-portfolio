<script setup>
import Icon from "@/components/Icon.vue";
import Badge from "@/components/Badge.vue";
defineEmits(["hide-details"]);

defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <div
    class="w-screen flex flex-col top-0 left-0 h-dvh absolute z-50 bg-dark-100/[0.8]"
    style=""
  >
    <div class="p-5 ml-auto">
      <button class="ml-auto" @click="$emit('hide-details')">
        <Icon name="X" class="text-white" :size="50" :stroke-width="2" />
      </button>
    </div>
    <div class="bg-white dark:bg-dark-200 h-full flex py-5">
      <div class="lg:w-6/12 w-11/12 mx-auto space-y-5">
        <div
          class="w-full h-[350px] bg-silver rounded-lg"
          :style="`background-image: url(/images/${item.cover});background-size:${item.logo ? '30%' : 'cover'};`"
        ></div>
        <div class="space-y-2">
          <h1 class="text-lg font-bold">{{ $t(item?.title ?? "") }}</h1>
          <span class="text-gray-500">{{ $t(item?.subTitle ?? "") }}</span>
          <div v-if="item.badges" class="flex space-x-2">
            <Badge
              v-for="(badge, index) in item.badges"
              :key="`card-badge-${index}`"
              :text="$t(badge?.text ?? '')"
              :icon="badge?.icon"
              :type="badge?.type"
              :href="badge?.to"
            />
          </div>
        </div>
        <p>
          {{ $t(item?.description ?? "") }}
        </p>
      </div>
    </div>
  </div>
</template>
