<script setup>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const mode = ref("sidebar");
const isSidebar = computed(() => route.name !== "home");
const theme = ref("dark");

function changeTheme() {
  theme.value = theme.value == "dark" ? "light" : "dark";
}
</script>
<template>
  <div
    :class="[
      'flex lg:flex-row h-dvh relative ',
      theme,
      isSidebar ? 'flex-col' : '',
    ]"
  >
    <!-- <div class="w-screen h-screen absolute bg- blur-2xl"></div> -->
    <!-- <Preview /> -->
    <sidebar
      :isSidebar="isSidebar"
      :theme="theme"
      @change-theme="changeTheme()"
      class="order-last lg:order-first "
    />
    <div
      :class="[
        'lg:h-dvh h-full overflow-y-auto overflow-x-hidden dark:bg-dark-200 dark:text-silver ',
        isSidebar ? 'lg:p-10 p-5 w-full ' : '',
      ]"
    >
      <router-view v-slot="{ Component, route }">
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
</style>
