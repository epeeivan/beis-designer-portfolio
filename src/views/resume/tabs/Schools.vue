<script setup>
import ResumeItem from "@/components/resume/ResumeItem.vue";
import schools from "@/assets/datas/schools.js";
</script>
<template>
  <div class="space-y-5">
    <h1 class="font-bold text-xl">{{ $t("labels.experiences") }}</h1>
    <ResumeItem
      v-for="(school, index) in schools"
      :key="`resume-school-${index}`"
      :item="school"
    />
  </div>
</template>
