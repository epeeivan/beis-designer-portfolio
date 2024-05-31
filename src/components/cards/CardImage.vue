<script setup>
import Badge from '@/components/Badge.vue'
defineProps({
    item: {
        type: Object,
        default: () => { }
    },
})
</script>
<template>
    <div class=" space-y-2">
        <div class="min-h-[200px] w-full rounded-xl bg-cover bg-silver" :style="`background-image: url(/images/${item.cover}.PNG);`"></div>
        <h1 class="font-medium text-sm">{{ $t(item?.title??'') }}</h1>
        <span class="block my-auto mr-auto">{{ $t(item?.subTitle??'') }}</span>

        <div class="flex">
            <div class="space-x-2 my-auto">
                <slot name="badges">
                    <div v-if="item.badges" class="flex space-x-2">
                        <Badge v-for="(badge, index) in item.badges" 
                        :key="`card-badge-${index}`" 
                        :text="$t(badge?.text??'')"
                        :icon="badge?.icon" 
                        :type="badge?.type" 
                        :href="badge?.to" 
                        />
                    </div>
                </slot>
            </div>
        </div>
        <p class="">
            {{ $t(item?.description).length>100 ? `${$t(item?.description).substr(0,100)}...`:$t(item?.description) }}
        </p>
    </div>
</template>