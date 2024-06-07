<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <div class="lg:py-0 py-5 lg:space-y-2 space-y-5">
    <!-- head -->
    <div class="flex space-x-5">
      <div
        class="bg-silver flex-col dark:bg-dark-300 rounded-lg min-w-[100px] max-w-[100px] h-[100px] w-full flex"
      >
        <img :src="item.logo" alt="" class="m-auto lg:w-1/2 lg:h-auto h-2/3" />
      </div>
      <div class="my-auto">
        <h1 class="text-lg font-bold dark:text-base_yellow">
          {{ $t(item.title) }}
        </h1>
        <h2 class="font-bold text-gray-500 dark:text-gray-300">
          {{ $t(item.subtitle) }}
        </h2>
        <span class="block">{{ $t(item.date) }}</span>
        <span class="block">{{ $t(item.location) }}</span>
      </div>
    </div>
    <!--  -->
    <div class="space-y-2 lg:pl-5 lg:ml-[100px]">
      <p>{{ item.description ? $t(item.description) : "" }}</p>
    </div>
  </div>
</template>
