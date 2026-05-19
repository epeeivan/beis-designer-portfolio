<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import Icon from "@/components/Icon.vue";
import Badge from "@/components/Badge.vue";

const { t } = useI18n();

const emit = defineEmits(["hide-details"]);

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});

const selectedIndex = ref(0);
const isFullscreen = ref(false);

const slides = computed<string[]>(() => {
  if (!props.item?.cover) return [];
  const views: string[] = Array.isArray(props.item?.views) ? props.item.views : [];
  return [props.item.cover, ...views];
});

const currentSlide = computed(
  () => slides.value[selectedIndex.value] ?? props.item?.cover ?? "",
);

type Block = { type: "paragraph"; text: string } | { type: "list"; items: string[] };

const descriptionBlocks = computed<Block[]>(() => {
  const raw = props.item?.description ? t(props.item.description) : "";
  if (!raw) return [];
  return raw
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean)
    .map<Block>((block) => {
      const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
      const isList = lines.length > 0 && lines.every((l) => /^[-*]\s+/.test(l));
      if (isList) {
        return {
          type: "list",
          items: lines.map((l) => l.replace(/^[-*]\s+/, "")),
        };
      }
      return { type: "paragraph", text: block };
    });
});

watch(
  () => props.item,
  () => {
    selectedIndex.value = 0;
    isFullscreen.value = false;
  },
);

function handleKey(e: KeyboardEvent) {
  if (e.key !== "Escape") return;
  if (isFullscreen.value) isFullscreen.value = false;
  else emit("hide-details");
}

onMounted(() => window.addEventListener("keydown", handleKey));
onUnmounted(() => window.removeEventListener("keydown", handleKey));
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex flex-col bg-dark-100/80 backdrop-blur-[2px]"
  >
    <button
      type="button"
      class="self-end p-5"
      aria-label="Close"
      @click="emit('hide-details')"
    >
      <Icon name="X" class="text-white" :size="50" :stroke-width="2" />
    </button>
    <div class="flex-1 overflow-y-auto bg-white dark:bg-dark-200">
      <div
        class="mx-auto flex w-11/12 max-w-195 flex-col gap-5 py-10 lg:py-12"
      >
        <!-- Main image -->
        <button
          v-if="item.cover"
          type="button"
          class="group relative block w-full overflow-hidden rounded-[20px] bg-silver dark:bg-dark-300 cursor-zoom-in"
          aria-label="Open fullscreen"
          @click="isFullscreen = true"
        >
          <img
            :src="`/images/${currentSlide}`"
            :alt="$t(item?.title ?? '')"
            class="block w-full h-auto"
            decoding="async"
          />
          <span
            class="absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          >
            <Icon name="Maximize2" :size="18" :stroke-width="2" />
          </span>
        </button>
        <div
          v-else-if="item.img"
          class="aspect-3/2 w-full overflow-hidden rounded-[20px] flex bg-silver dark:bg-dark-300"
          :style="
            item.bg
              ? `background: radial-gradient(circle, ${item.mid_bg ?? 'rgba(0,0,0,1)'} 1%, ${item.bg} 100%);`
              : ''
          "
        >
          <img
            class="block m-auto w-1/3 max-h-[80%]"
            :src="`/images/${item.img}`"
            :alt="$t(item?.title ?? '')"
            decoding="async"
          />
        </div>

        <!-- Thumbnail strip -->
        <div
          v-if="slides.length > 1"
          class="flex w-full flex-wrap items-start gap-2.5"
        >
          <button
            v-for="(src, index) in slides"
            :key="`thumb-${index}`"
            type="button"
            :class="[
              'size-25 rounded-[10px] bg-silver dark:bg-dark-300 bg-no-repeat bg-center bg-cover transition-all duration-150 border-2',
              selectedIndex === index
                ? 'border-base_yellow'
                : 'border-transparent hover:border-base_yellow',
            ]"
            :style="`background-image: url(/images/${src});`"
            :aria-label="`View ${index + 1}`"
            @click="selectedIndex = index"
          ></button>
        </div>

        <!-- Info -->
        <div class="flex flex-col gap-5">
          <div class="space-y-1">
            <h1 class="text-xl font-bold text-dark-400 dark:text-white">
              {{ $t(item?.title ?? "") }}
            </h1>
            <span
              class="block text-[15px] text-dark-100 dark:text-silver"
            >
              {{ $t(item?.subTitle ?? "") }}
            </span>
          </div>
          <div v-if="item.badges" class="flex flex-wrap gap-2.5">
            <Badge
              v-for="(badge, index) in item.badges"
              :key="`preview-badge-${index}`"
              :text="$t(badge?.text ?? '')"
              :icon="badge?.icon"
              :type="badge?.type"
              :href="badge?.to"
            />
          </div>
          <div class="space-y-3 text-[15px] text-dark-300 dark:text-silver">
            <template
              v-for="(block, blockIndex) in descriptionBlocks"
              :key="`desc-block-${blockIndex}`"
            >
              <p v-if="block.type === 'paragraph'" class="whitespace-pre-line">
                {{ block.text }}
              </p>
              <ul
                v-else
                class="list-disc list-outside pl-5 space-y-1 marker:text-dark-100 dark:marker:text-silver"
              >
                <li
                  v-for="(line, lineIndex) in block.items"
                  :key="`desc-li-${blockIndex}-${lineIndex}`"
                >
                  {{ line }}
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Fullscreen viewer -->
    <div
      v-if="isFullscreen && currentSlide"
      class="fixed inset-0 z-60 overflow-auto bg-black/95"
      @click="isFullscreen = false"
    >
      <button
        type="button"
        class="fixed top-5 right-5 z-10"
        aria-label="Close fullscreen"
        @click.stop="isFullscreen = false"
      >
        <Icon name="X" class="text-white" :size="40" :stroke-width="2" />
      </button>
      <img
        :src="`/images/${currentSlide}`"
        :alt="$t(item?.title ?? '')"
        class="mx-auto my-10 block max-w-none"
        decoding="async"
        @click.stop
      />
    </div>
  </div>
</template>
