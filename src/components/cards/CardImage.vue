<script setup lang="ts">
import { computed } from "vue";
import Badge from "@/components/Badge.vue";
import { resolveTools } from "@/assets/datas/tools";

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});

const resolvedTools = computed(() => resolveTools(props.item?.tools));
</script>
<template>
  <div class="space-y-2">
    <div :class="[
      'group relative overflow-hidden aspect-3/2 w-full rounded-lg flex bg-no-repeat bg-center ',
      item.bg ? '' : 'bg-silver dark:bg-dark-300 ',
    ]" :style="[
        item?.cover
          ? `background-image: url(/images/${item.cover});background-size: cover;`
          : ``,
        item.bg
          ? `background: radial-gradient(circle, ${item.mid_bg ?? 'rgba(0,0,0,1)'} 1%, ${item.bg} 100%) `
          : ``,
      ]">
      <img v-if="item.img" class="w-2/4 block m-auto" :src="`/images/${item?.img}`" :alt="$t(item?.title ?? '')"
        loading="lazy" decoding="async" />
      <div v-if="resolvedTools.length"
        class="absolute bottom-2 left-2 flex gap-1.5 opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0">
        <span v-for="(tool, i) in resolvedTools" :key="`card-tool-${i}`" :title="tool.label"
          class="size-7 rounded-full bg-white/90 dark:bg-dark-300/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
          <img :src="tool.img" :alt="tool.label" class="size-4/6 object-contain" loading="lazy" decoding="async" />
        </span>
      </div>
    </div>
    <div class="flex flex-row space-x-2">
      <div class="flex flex-row mr-auto space-x-2">
        <div class="w-6 h-6 rounded-full bg-neutral-100 dark:bg-dark-300 my-auto overflow-hidden flex">
          <img
            v-if="item.logo"
            :src="`/images/${item.logo}`"
            :alt="$t(item?.title ?? '')"
            class="block m-auto w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <h1 class="font-oswald font-normal text-sm my-auto">{{ $t(item?.title ?? "") }}</h1>
      </div>
      <div class="space-x-2 my-auto">
        <slot name="badges">
          <div v-if="item.badges" class="flex space-x-2">
            <Badge v-for="(badge, index) in item.badges" :key="`card-badge-${index}`" :icon="badge?.icon" :type="badge?.type" :href="badge?.to"
              @click.stop="" />
          </div>
        </slot>
      </div>
    </div>
    <!-- <span class="block my-auto mr-auto font-medium">{{
      $t(item?.subTitle ?? "")
    }}</span> -->

    <!-- <div class="flex">
      <div class="space-x-2 my-auto">
        <slot name="badges">
          <div v-if="item.badges" class="flex space-x-2">
            <Badge
              v-for="(badge, index) in item.badges"
              :key="`card-badge-${index}`"
              :text="badge.text ? $t(badge.text) : ''"
              :icon="badge?.icon"
              :type="badge?.type"
              :href="badge?.to"
              @click.stop=""
            />
          </div>
        </slot>
      </div>
    </div>
    <p class="">
      {{
        item.description
          ? $t(item?.description).length > 100
            ? `${$t(item?.description).substr(0, 100)}...`
            : $t(item?.description)
          : ""
      }}
    </p> -->
  </div>
</template>
