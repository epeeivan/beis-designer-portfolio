<script setup>
import ResumeItem from "@/components/resume/ResumeItem.vue";
import experiences from "@/assets/datas/experiences.js";
</script>
<template>
  <div class="space-y-5 lg:divide-y-0 divide-y-2 dark:divide-dark-300">
    <h1 class="font-bold text-xl">{{ $t("labels.experiences") }}</h1>
    <ResumeItem
      v-for="(experience, index) in experiences"
      :key="`resume-experience-${index}`"
      :item="experience"
    />
  </div>
</template>
