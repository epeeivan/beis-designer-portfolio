<script setup>
import softwares from '@/assets/datas/softwares';
import acheivments from '@/assets/datas/acheivments';
import Tab from '@/components/tab/Tab.vue';
import { useI18n } from 'vue-i18n';

const { t,locale } = useI18n({useScope: 'global'});
const headers = [
    {
        to:'home.graphic-design.flyers',
        text:t('labels.flyers'),
    },
    {
        to:'home.graphic-design.logos',
        text:t('labels.logos'),
    },
    {
        to:'home.graphic-design.catalogs',
        text:t('labels.catalogs'),
    },
]

</script>
<template>
    <div class="space-y-5">
        <h1 class="text-lg font-semibold capitalize">{{ $t('labels.software') }}</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur. Porttitor pharetra consequat vulputate molestie vehicula risus. Ut
            ac enim dui gravida sit tellus magna sem. Diam semper eu dapibus nulla dis diam eget. Mattis auctor
            fermentum ut et consectetur in luctus morbi curabitur.
        </p>
        <div class="flex flex-wrap space-x-10">
            <img v-for="(software, index) in softwares.ui_ux" :key="`ui-ux-sofware-${index}`"
                class=" block h-[70px]  my-auto" :src="`/public/images/${software?.img}.png`" alt="">
        </div>

        <h1 class="text-lg capitalize font-semibold">{{ $t('labels.acheivments') }}</h1>

        <Tab :headers="headers" />

    </div>
</template>