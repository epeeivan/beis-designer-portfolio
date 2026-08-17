<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import Icon from "@/components/Icon.vue";
import { resolveTools } from "@/assets/datas/tools";

const { t } = useI18n();

const emit = defineEmits(["hide-details", "prev", "next"]);

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  hasPrev: {
    type: Boolean,
    default: false,
  },
  hasNext: {
    type: Boolean,
    default: false,
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

const resolvedTools = computed(() => resolveTools(props.item?.tools));

const avatar = computed(() =>
  props.item?.logo ? `/images/${props.item.logo}` : "/images/profile.webp",
);

const contactUrl = "https://wa.me/237678377531";

watch(
  () => props.item,
  () => {
    selectedIndex.value = 0;
    isFullscreen.value = false;
  },
);

function openFullscreen(index: number) {
  selectedIndex.value = index;
  isFullscreen.value = true;
}

async function share() {
  const url = window.location.href;
  const title = t(props.item?.title ?? "");
  try {
    if (navigator.share) await navigator.share({ title, url });
    else await navigator.clipboard.writeText(url);
  } catch {
    /* user cancelled */
  }
}

function handleKey(e: KeyboardEvent) {
  if (e.key === "Escape") {
    if (isFullscreen.value) isFullscreen.value = false;
    else emit("hide-details");
    return;
  }
  if (isFullscreen.value) return;
  if (e.key === "ArrowLeft" && props.hasPrev) emit("prev");
  if (e.key === "ArrowRight" && props.hasNext) emit("next");
}

onMounted(() => window.addEventListener("keydown", handleKey));
onUnmounted(() => window.removeEventListener("keydown", handleKey));
</script>

<template>
  <div class="fixed inset-0 z-50 flex flex-col bg-black/80 backdrop-blur-sm">
    <!-- Top bar: title aligned with the image column -->
    <div class="shrink-0 py-3" @click.self="emit('hide-details')">
      <div
        class="mx-auto flex w-full max-w-[min(87.5rem,calc(100%_-_8rem))] items-center gap-3 text-white"
      >
        <img
          :src="avatar"
          :alt="$t(item?.title ?? '')"
          class="size-9 shrink-0 rounded-full object-cover bg-white/10"
          decoding="async"
        />
        <div class="min-w-0">
          <h1 class="truncate font-oswald text-base leading-tight">
            {{ $t(item?.title ?? "") }}
          </h1>
          <span v-if="item?.subTitle" class="block truncate text-xs text-white/60">
            {{ $t(item?.subTitle ?? "") }}
          </span>
        </div>
      </div>
    </div>

    <!-- Scroll area: centered column, dimmed page on the sides, images gapless -->
    <div class="flex-1 overflow-y-auto" @click.self="emit('hide-details')">
      <div
        class="mx-auto flex w-full max-w-[min(87.5rem,calc(100%_-_8rem))] flex-col"
        @click.self="emit('hide-details')"
      >
        <template v-if="item.cover">
          <button
            v-for="(src, index) in slides"
            :key="`slide-${index}`"
            type="button"
            class="group relative block w-full cursor-zoom-in"
            aria-label="Open fullscreen"
            @click="openFullscreen(index)"
          >
            <img
              :src="`/images/${src}`"
              :alt="$t(item?.title ?? '')"
              class="block w-full h-auto align-top"
              loading="lazy"
              decoding="async"
            />
            <span
              class="absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100"
            >
              <Icon name="Maximize2" :size="18" :stroke-width="2" />
            </span>
          </button>
        </template>

        <!-- Logo-on-gradient variant (no cover) -->
        <div
          v-else-if="item.img"
          class="aspect-3/2 w-full flex"
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
      </div>
    </div>

    <!-- Close (top-right corner) -->
    <button
      type="button"
      class="fixed top-4 right-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      aria-label="Close"
      @click="emit('hide-details')"
    >
      <Icon name="X" :size="24" :stroke-width="2" />
    </button>

    <!-- Right action rail (Behance-style): conversion + share + tools -->
    <div
      class="fixed top-1/2 right-[max(0.75rem,calc(50%_-_720px_-_3rem))] z-10 flex -translate-y-1/2 flex-col items-center gap-4 text-white"
    >
      <a
        :href="contactUrl"
        target="_blank"
        rel="noopener"
        class="flex flex-col items-center gap-1"
        :title="$t('labels.recruit')"
      >
        <span
          class="flex size-11 items-center justify-center rounded-full bg-base_yellow text-dark-400 shadow-lg"
        >
          <Icon name="Briefcase" :size="20" :stroke-width="2" />
        </span>
        <span class="text-[10px] capitalize">{{ $t("labels.recruit") }}</span>
      </a>
      <button
        type="button"
        class="flex flex-col items-center gap-1"
        :title="$t('labels.share')"
        @click="share"
      >
        <span
          class="flex size-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
        >
          <Icon name="Share2" :size="20" :stroke-width="2" />
        </span>
        <span class="text-[10px] capitalize">{{ $t("labels.share") }}</span>
      </button>
      <div
        v-if="resolvedTools.length"
        class="flex flex-col items-center gap-1"
      >
        <span
          class="flex w-11 flex-col items-center gap-2 rounded-2xl bg-white/10 py-2.5"
        >
          <img
            v-for="(tool, index) in resolvedTools"
            :key="`rail-tool-${index}`"
            :src="tool.img"
            :alt="tool.label"
            :title="tool.label"
            class="size-6 object-contain"
            decoding="async"
          />
        </span>
        <span class="text-[10px] capitalize">{{ $t("labels.tools") }}</span>
      </div>
    </div>

    <!-- Conversion CTA (Behance-style hire pill) -->
    <div
      class="fixed bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white px-3 py-2 shadow-xl dark:bg-dark-300"
    >
      <img
        src="/images/profile.webp"
        alt="BÉBÉ"
        class="size-8 shrink-0 rounded-full object-cover"
        decoding="async"
      />
      <span class="hidden text-sm text-dark-400 sm:block dark:text-white">
        {{ $t("labels.available_for_hire") }}
      </span>
      <a
        :href="contactUrl"
        target="_blank"
        rel="noopener"
        class="shrink-0 rounded-full bg-base_yellow px-4 py-1.5 text-sm font-medium text-dark-400 capitalize"
      >
        {{ $t("labels.contact") }}
      </a>
    </div>

    <!-- Prev / Next navigation between projects -->
    <button
      v-if="hasPrev"
      type="button"
      class="fixed bottom-5 left-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      aria-label="Previous project"
      @click="emit('prev')"
    >
      <Icon name="ChevronLeft" :size="24" :stroke-width="2" />
    </button>
    <button
      v-if="hasNext"
      type="button"
      class="fixed bottom-5 right-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      aria-label="Next project"
      @click="emit('next')"
    >
      <Icon name="ChevronRight" :size="24" :stroke-width="2" />
    </button>

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
