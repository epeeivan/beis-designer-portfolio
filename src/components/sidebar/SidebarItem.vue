<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import SidebarItemBase from "./SidebarItemBase.vue";

const route = useRoute();

const props = defineProps({
  mode: {
    type: String,
    default: "",
  },
  item: {
    type: Object,
    default: () => {},
  },
  isSidebar: {
    type: Boolean,
    default: "",
  },
  isDark: {
    type: Boolean,
    default: "",
  },
});
const isActiveRoute = computed(() => {
  const routeName = route.name;
  return props.item.to === routeName || routeName.includes(props.item.to);
});
</script>
<template>
  <SidebarItemBase
    :is-link="!item.to"
    :href="item?.link ?? ''"
    :to="{ name: item?.to ?? '' }"
    :class="['capitalize',
      !isSidebar
        ? 'lg:space-y-2 space-x-2 lg:space-x-0 lg:block  lg:dark:bg-transparent  lg:shadow-none rounded-xl lg:border-0 border-2 border-transparent hover:border-base_yellow'
        : '',
    ]"
  >
    <div
      :class="[
        'border-2 h-min lg:bg-white  dark:bg-dark-100 dark:text-silver  hover:border-base_yellow transition-all  ease-linear duration-100',
        isSidebar
          ? 'rounded-lg lg:flex lg:space-x-2 px-3 py-2 '
          : 'lg:p-7 p-5  rounded-xl shadow-2xl w-[fit-content] mx-auto ',
        isActiveRoute ? 'border-base_yellow' : ' border-transparent',
      ]"
    >
      <img
        :src="isDark ? item.dark_src ?? '' : item.src"
        :class="[
          isSidebar ? 'w-[20px] lg:mx-0 mx-auto' : 'lg:w-[70px] w-[40px]',
        ]"
      />
      <span v-if="isSidebar" class="block my-auto lg:text-right text-center">
        <span class="lg:block hidden">{{ $t(item.text) }}</span>
        <span class="block lg:hidden">{{
          $t(item.text).split(" ")[0].substr(0, 7)
        }}</span>
      </span>
    </div>
    <span
      v-if="!isSidebar"
      class="block dark:text-silver text-center capitalize my-auto lg:text-lg"
      >{{ $t(item.text) }}</span
    >
  </SidebarItemBase>
</template>
