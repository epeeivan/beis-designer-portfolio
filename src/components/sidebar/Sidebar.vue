<script setup>
import { computed } from "vue";
import ProfileImage from "./ProfileImage.vue";
import SidebarItem from "./SidebarItem.vue";
import Badge from "@/components/Badge.vue";
import LanguageFlag from "@/components/LanguageFlag.vue";
import { useTheme } from "@/composables/useTheme";
import { useLocale } from "@/composables/useLocale";

defineEmits(["changeSideMode"]);
defineProps({
  isSidebar: {
    type: Boolean,
    default: false,
  },
});

const { theme, toggle: toggleTheme } = useTheme();
const { locale, toggle: toggleLocale } = useLocale();

const isDark = computed(() => theme.value === "dark");
const isFr = computed(() => locale.value === "fr");

const menuItems = [
  {
    text: "labels.ui_ux",
    src: "/images/icons/ui-ux/dark.webp",
    dark_src: "/images/icons/ui-ux/light.webp",
    to: "home.ui-ux",
  },
  {
    text: "labels.graphic_design",
    src: "/images/icons/graphic/dark.webp",
    dark_src: "/images/icons/graphic/light.webp",
    to: "home.graphic-design",
  },
  {
    text: "labels.resume",
    src: "/images/icons/resume/dark.webp",
    dark_src: "/images/icons/resume/light.webp",
    to: "home.resume",
  },
  {
    text: "labels.contact_me",
    src: "/images/icons/contact/dark.webp",
    dark_src: "/images/icons/contact/light.webp",
    link: "https://wa.me/237655946828",
  },
];
</script>
<template>
  <div
    :class="[
      'flex border-t-2 dark:border-t-dark-400 lg:border-t-0 dark:bg-dark-300 dark:border-r-dark-300 bg-cover bg-center bg-fixed  transition-all ease-in-out duration-500',
      !isSidebar
        ? 'min-w-full max-w-full h-dvh lg:flex-nowrap flex-wrap'
        : 'flex lg:min-w-[400px] lg:max-w-[400px] border-r-2',
    ]"
    :style="`background-image: url(/images/${
      isDark ? 'sidebgDark200.webp' : 'sidebg.webp'
    })`"
  >
    <div
      :class="[
        'm-auto flex flex-col transition-all ease-in-out duration-1000 ',
        !isSidebar
          ? 'lg:w-6/12 w-10/12 space-y-5'
          : 'w-10/12 lg:space-y-5 space-y-2 py-2',
      ]"
    >
      <div
        :class="[
          'space-y-5 flex flex-wrap w-full',
          isSidebar ? 'lg:block hidden' : 'lg:block',
        ]"
      >
        <div class="flex lg:block lg:space-y-5">
          <ProfileImage
            :class="[
              'mx-auto block transition-all ease-in-out duration-500 ',
              isSidebar ? 'max-w-[200px]' : 'lg:max-w-[300px] max-w-[200px]',
            ]"
            src="/images/profile.webp"
          />

          <div
            class="flex flex-wrap mx-auto space-y-2 dark:text-silver my-auto"
          >
            <span
              :class="[
                'block font-ink text-center w-full',
                !isSidebar ? 'lg:text-3xl text-xl ' : 'text-xl',
              ]"
            >
              {{ $t("labels.i_am") }} BEBE EPEE IVAN SAMPI
            </span>
            <span
              :class="[
                'block font-ink text-center font-bold w-full',
                !isSidebar ? 'lg:text-2xl text-xl ' : 'text-lg',
              ]"
            >
              {{ $t("labels.ui_ux_designer") }}
            </span>
          </div>
        </div>

        <p
          :class="[
            'text-center block dark:text-silver leading-5 mx-auto',
            isSidebar ? 'lg:w-[300px]' : 'lg:w-[500px]',
          ]"
        >
          {{ $t("labels.profile_description") }}
        </p>
      </div>

      <div
        :class="[
          'grid',
          !isSidebar
            ? 'lg:grid-cols-4 lg:gap-4 gap-2 grid-cols-2'
            : 'lg:grid-cols-1 grid-cols-4 gap-2',
        ]"
      >
        <SidebarItem
          v-for="(item, index) in menuItems"
          :key="`side-item-${index}`"
          :item="item"
          :is-sidebar="isSidebar"
          :is-dark="isDark"
          @click="$emit('changeSideMode')"
        />
      </div>

      <div class="flex capitalize">
        <div class="mx-auto space-x-2 flex">
          <Badge
            class="cursor-pointer dark:bg-dark-400"
            :text="isFr ? 'fr' : 'en'"
            :aria-label="`Switch language to ${isFr ? 'English' : 'French'}`"
            @click="toggleLocale"
          >
            <template #flag>
              <LanguageFlag :code="!isFr ? 'gb' : 'fr'" />
            </template>
          </Badge>
          <Badge
            :type="isDark ? '' : 'yellow'"
            :class="['cursor-pointer', isDark ? 'dark:bg-dark-400' : '']"
            :icon="isDark ? 'Moon' : 'Sun'"
            :text="$t(isDark ? 'labels.dark' : 'labels.light')"
            :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
            @click="toggleTheme"
          />
        </div>
      </div>
    </div>
  </div>
</template>
