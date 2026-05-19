<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "BÉBÉ — UI/UX & Graphic Designer",
  },
});

const route = useRoute();
const isAnimating = ref(false);

function triggerSpin() {
  isAnimating.value = false;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      isAnimating.value = true;
    });
  });
}

onMounted(triggerSpin);

watch(
  () => route.name,
  (name) => {
    if (name === "home") triggerSpin();
  },
);
</script>
<template>
  <router-link
    :to="{ name: 'home' }"
    :aria-label="alt"
    class="relative block p-5 w-fit h-fit cursor-pointer"
  >
    <span
      :class="[
        'absolute inset-0 border-4 border-dashed border-base_yellow rounded-full pointer-events-none',
        isAnimating ? 'spin-once' : '',
      ]"
      @animationend="isAnimating = false"
    ></span>
    <img
      :src="src"
      :alt="alt"
      class="block relative rounded-full"
      decoding="async"
      fetchpriority="high"
    />
  </router-link>
</template>
<style scoped>
@keyframes spin-once {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.spin-once {
  animation: spin-once 1.5s cubic-bezier(0.4, 0, 0.2, 1) both;
}
</style>
