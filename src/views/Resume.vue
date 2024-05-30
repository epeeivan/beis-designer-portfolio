<script setup>
import ResumeItem from '@/components/resume/ResumeItem.vue';
import experiences from '@/assets/datas/experiences.js';

</script>
<template>
    <div class="lg:space-y-5">
        <ResumeItem v-for="(experience,index) in experiences " :key="`resume-experience-${index}`" :item="experience"/>
    </div>
</template>