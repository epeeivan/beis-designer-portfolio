<script setup>
import Badge from "@/components/Badge.vue";
defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <div class="space-y-2">
    <div
      :class="[
        'max-h-[200px] overflow-hidden min-h-[200px] w-full rounded-xl flex bg-no-repeat bg-center ',
        item.bg ? '' : 'bg-silver dark:bg-dark-300 ',
      ]"
      :style="[
        item?.cover
          ? `background-image: url(/images/${item.cover});background-size:${item.logo ? '30%' : 'cover'};`
          : ``,
        item.bg
          ? `background: radial-gradient(circle, ${item.mid_bg ?? 'rgba(0,0,0,1)'} 1%, ${item.bg} 100%) `
          : ``,
      ]"
    >
      <img
        v-if="item.img"
        class="w-2/4 block m-auto"
        :src="`/images/${item?.img}`"
        alt=""
      />
    </div>
    <h1 class="font-semibold text-sm">{{ $t(item?.title ?? "") }}</h1>
    <span class="block my-auto mr-auto font-medium">{{
      $t(item?.subTitle ?? "")
    }}</span>

    <div class="flex">
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
    </p>
  </div>
</template>
