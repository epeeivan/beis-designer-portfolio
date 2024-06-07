<script setup>
import { computed } from "vue";
import ProfileImageVue from "./ProfileImage.vue";
import SidebarItem from "./SidebarItem.vue";
import Badge from "@/components/Badge.vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({ useScope: "global" });

const emit = defineEmits(["changeSideMode", "changeTheme"]);
const props = defineProps({
  isSidebar: {
    type: Boolean,
    default: "",
  },
  theme: {
    type: String,
    default: "",
  },
});
// locale.value='fr'

let menuItems = [
  {
    text: "labels.ui_ux",
    src: "/images/icons/ui-ux/dark.png",
    dark_src: "/images/icons/ui-ux/light.png",
    to: "home.ui-ux",
  },
  {
    text: "labels.graphic_design",
    src: "/images/icons/graphic/dark.png",
    dark_src: "/images/icons/graphic/light.png",
    to: "home.graphic-design",
  },
  {
    text: "labels.resume",
    src: "/images/icons/resume/dark.png",
    dark_src: "/images/icons/resume/light.png",
    to: "home.resume",
  },
  {
    text: "labels.contact_me",
    src: "/images/icons/contact/dark.png",
    dark_src: "/images/icons/contact/light.png",
    link: "https://wa.me/237655946828",
  },
];
const isDark = computed(() => props.theme === "dark");
function reduceSidebar() {
  if (!isSidebar.value) {
    emit("changeSideMode");
  }
}

function changeLang() {
  switch (true) {
    case locale.value == "en":
      locale.value = "fr";
      break;

    default:
      locale.value = "en";

      break;
  }
}

const isFr = computed(() => locale.value === "fr");
</script>
<template>
  <div
    :class="[
      'flex border-t-2 dark:border-t-dark-400 lg:border-t-0 dark:bg-dark-300 dark:border-r-dark-300 bg-cover bg-center bg-fixed  transition-all ease-in-out duration-500',
      !isSidebar
        ? 'min-w-[100%] max-w-[100%] h-dvh lg:flex-nowrap flex-wrap'
        : 'flex lg:min-w-[400px] lg:max-w-[400px] border-r-2',
    ]"
    :style="`background-image: url(/images/${
      isDark ? 'sidebgDark200.png' : 'sidebg.png'
    })`"
  >
    <!-- container -->
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
        <div class="lg:block flex lg:space-y-5">
          <ProfileImageVue
            :class="[
              'mx-auto block transition-all ease-in-out duration-500 ',
              isSidebar ? 'max-w-[200px]' : 'lg:max-w-[300px] max-w-[200px]',
            ]"
            src="/images/profile.JPG"
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

      <div class="flex">
        <div class="mx-auto space-x-2 flex">
          <Badge flag="it" :text="isFr ? 'fr' : 'en'" @click="changeLang()">
            <template #flag>
              <flag :iso="!isFr ? 'gb' : 'fr'" />
            </template>
          </Badge>
          <Badge
            :icon="isDark ? 'Moon' : 'Sun'"
            :text="$t(isDark ? 'labels.dark' : 'labels.light')"
            @click="$emit('changeTheme')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
