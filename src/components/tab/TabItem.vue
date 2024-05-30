<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
    item: {
        type: Object,
        default: () => { }
    }
})

const isActiveRoute = computed(() => {
    const routeName = route.name;
    return props.item.to === routeName;
});
</script>
<template>
    <router-link :to="{ name: item.to }"
        :class="['p-1  flex space-x-2 rounded-[5px] border ', isActiveRoute ? 'bg-base_yellow border-dark-100 dark:text-dark-300 dark:border-base_yellow' : 'border-transparent']">
        <span class="block my-auto">{{ item.text }}</span> <span
            class="block px-2 bg-dark-100 text-silver rounded-sm">{{ item.count }}</span>
    </router-link>
</template>