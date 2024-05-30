<script setup>
import Sidebar from '@/components/sidebar/Sidebar.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mode = ref('sidebar');
const isSidebar = computed(() => route.name !== 'home');
const theme = ref('light');


function changeTheme() {
    theme.value = theme.value == "dark" ? 'light' : 'dark';
}

</script>
<template>
    <div :class="['flex  ', theme]">
        <sidebar :isSidebar="isSidebar" :theme="theme" @change-theme="changeTheme()" />
        <div class="p-10  h-screen overflow-y-auto dark:bg-dark-200 dark:text-silver">
            <router-view
          v-slot="{ Component, route }"
        >
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
  margin-right: -100px;
  opacity: 0;
  transform: translateX(-30deg);
}
.slide-leave-to {
  margin-left: -100px;
  opacity: 0;
  transform: translateX(-30deg);
}
</style>