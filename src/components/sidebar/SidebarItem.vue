<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const props = defineProps({
    mode: {
        type: String,
        default: ''
    },
    item: {
        type: Object,
        default: () => { }
    },
    isSidebar: {
        type: Boolean,
        default: ''
    },
})
const isActiveRoute = computed(() => {
    const routeName = route.name;
    return props.item.to === routeName || routeName.includes(props.item.to);
});
</script>
<template>
    <router-link v-if="item.to" :href="item?.link ?? ''" :to="{ name: item?.to ?? '' }"
        :class="[!isSidebar ? 'space-y-2' : '']">
        <div :class="['border-2 bg-white dark:bg-dark-100 dark:text-silver  hover:border-base_yellow transition-all  ease-linear duration-100',
            isSidebar ? 'rounded-lg flex space-x-2 px-3 py-2 ' : 'p-7 rounded-xl shadow-2xl w-[fit-content] mx-auto ',
            isActiveRoute ? 'border-base_yellow' : ' border-transparent',
        ]">
            <img :src="item.src" :class="[isSidebar ? 'w-[20px]' : 'w-[70px]']" />
            <span v-if="isSidebar" class="block my-auto">{{ item.text }}</span>
        </div>
        <span v-if="!isSidebar" class="block text-center capitalize text-lg">{{ item.text }}</span>
    </router-link>
    <a v-else :href="item?.link ?? ''" target="blank" :class="[!isSidebar ? 'space-y-2' : '']">
        <div :class="['border-2 bg-white dark:bg-base_yellow hover:border-base_yellow transition-all  ease-linear duration-100',
            isSidebar ? 'rounded-lg flex space-x-2 px-3 py-2 ' : 'p-7 rounded-xl shadow-2xl w-[fit-content] mx-auto ',
            isActiveRoute ? 'border-base_yellow' : ' border-transparent',
        ]">
            <img :src="item.src" :class="[isSidebar ? 'w-[20px]' : 'w-[70px]']" />
            <span v-if="isSidebar" class="block my-auto">{{ item.text }}</span>
        </div>
        <span v-if="!isSidebar" class="block text-center capitalize text-lg">{{ item.text }}</span>
    </a>
</template>