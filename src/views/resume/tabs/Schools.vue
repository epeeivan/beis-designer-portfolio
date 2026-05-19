<script setup lang="ts">
import ResumeItem from "@/components/resume/ResumeItem.vue";
import schools from "@/assets/datas/schools";
</script>
<template>
  <div class="space-y-5 lg:divide-y-0 divide-y-2 dark:divide-dark-300">
    <h1 class="font-bold text-xl capitalize">{{ $t("labels.experiences") }}</h1>
    <ResumeItem
      v-for="(school, index) in schools"
      :key="`resume-school-${index}`"
      :item="school"
    />
  </div>
</template>
