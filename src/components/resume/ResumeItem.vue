<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => { }
    }
})
</script>
<template>
    <div class="lg:flex lg:space-x-10 lg:space-y-0 space-y-2 space-x-0">
        <div class="bg-silver dark:bg-dark-300 rounded-lg lg:min-w-[100px] lg:max-w-[100px] lg:h-[100px] w-full h-[150px] flex">
            <img :src="item.src" alt="" class="m-auto">
        </div>

        <div class="space-y-2">
            <h1 class="text-lg font-bold">{{ $t(item.title) }}</h1>
            <h2 class="font-bold">{{ $t(item.subtitle) }}</h2>
            <span class="">{{ $t(item.date) }}</span>
            <span class="">{{ $t(item.location) }}</span>
            <p>{{ $t(item.description) }}</p>
        </div>
    </div>
</template>