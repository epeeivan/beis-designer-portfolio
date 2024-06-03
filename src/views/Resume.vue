<script setup>
import ResumeItem from "@/components/resume/ResumeItem.vue";
import experiences from "@/assets/datas/experiences.js";
import schools from "@/assets/datas/schools.js";
</script>
<template>
  <div class="lg:space-y-5">
    <h1 class="font-bold text-xl">{{ $t("labels.experiences") }}</h1>
    <ResumeItem
      v-for="(experience, index) in experiences"
      :key="`resume-experience-${index}`"
      :item="experience"
    />
    <h1 class="font-bold text-xl">{{ $t("labels.schools") }}</h1>
    <ResumeItem
      v-for="(school, index) in schools"
      :key="`resume-experience-${index}`"
      :item="school"
    />
  </div>
</template>
