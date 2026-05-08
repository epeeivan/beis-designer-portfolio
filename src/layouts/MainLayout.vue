<script setup>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isSidebar = computed(() => route.name !== "home");
</script>
<template>
  <div
    :class="[
      'flex lg:flex-row h-dvh relative dark:bg-dark-200 dark:text-silver',
      isSidebar ? 'flex-col' : '',
    ]"
  >
    <Sidebar
      :is-sidebar="isSidebar"
      class="order-last lg:order-first"
    />
    <div
      :class="[
        'lg:h-dvh h-full overflow-y-auto overflow-x-hidden',
        isSidebar ? 'lg:p-10 p-5 w-full ' : '',
      ]"
    >
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>
<style>
.slide-enter-active,
.slide-leave-active {
  transition:
    all 0.5s,
    transform 0.6s;
}

.slide-enter-from {
  margin-right: -10px;
  opacity: 0;
  transform: translateX(-30deg);
}

.slide-leave-to {
  margin-left: -10px;
  opacity: 0;
  transform: translateX(-30deg);
}

@media (prefers-reduced-motion: reduce) {
  .slide-enter-active,
  .slide-leave-active {
    transition: none;
  }
}
</style>
