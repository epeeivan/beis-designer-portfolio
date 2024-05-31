<script setup>
import { computed } from "vue"
import ProfileImageVue from "./ProfileImage.vue"
import SidebarItem from "./SidebarItem.vue"
import Badge from '@/components/Badge.vue'
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({ useScope: 'global' });

const emit = defineEmits(['changeSideMode', 'changeTheme']);
const props = defineProps({
    isSidebar: {
        type: Boolean,
        default: '',
    },
    theme: {
        type: String,
        default: ''
    }
})
// locale.value='fr'

let menuItems = [
    {
        text: t('labels.ui_ux'),
        src: '/images/ui.png',
        to: 'home.ui-ux'
    },
    {
        text: t('labels.graphic_design'),
        src: '/images/graphic.png',
        to: 'home.graphic-design.flyers'
    },
    {
        text: t('labels.resume'),
        src: '/images/resume.png',
        to: 'home.resume'
    },
    {
        text: t('labels.contact_me'),
        src: '/images/contact.png',
        link: 'https://wa.me/237655946828'
    }
]

function reduceSidebar() {
    if (!isSidebar.value) {
        emit('changeSideMode');
    }
}

function changeLang() {
    // alert(locale.value)
    // if (locale.value=='en') {
    locale.value = 'fr'

    // }
    // switch (true) {
    //     case locale.value == 'en':
    //     locale.value = 'fr'
    //     alert()
    //         break;

    //     default:
    //     locale.value = 'en'

    //         break;
    // }
}

</script>
<template>
    <div :class="['flex dark:bg-dark-300 dark:border-r-dark-300 bg-cover bg-center bg-fixed h-screen transition-all ease-in-out duration-500', !isSidebar ? 'min-w-[100%] max-w-[100%]' : 'lg:min-w-[400px] lg:max-w-[400px] border-r-2']"
        :style="`background-image: url(/images/${theme == 'dark' ? 'sidebgDark200.png' : 'sidebg.png'})`">
        <div
            :class="['m-auto flex flex-col transition-all ease-in-out duration-1000 ', !isSidebar ? 'lg:w-6/12 space-y-5' : 'w-10/12 space-y-5']">
            <ProfileImageVue
                :class="['mx-auto transition-all ease-in-out duration-500 ', isSidebar ? 'max-w-[200px]' : 'max-w-[300px] ']"
                src="/images/profile.JPG" />

            <div class="flex flex-wrap mx-auto space-y-2 dark:text-silver">
                <span :class="['block font-ink text-center w-full', !isSidebar ? 'text-3xl ' : 'text-xl']">I am BEBE
                    EPEE IVAN
                    SAMPI</span>
                <span :class="['block font-ink text-center font-bold w-full', !isSidebar ? 'text-2xl ' : 'text-lg']">{{
                    $t('labels.ui_ux_designer') }}</span>
            </div>


            <p :class="['text-center dark:text-silver leading-5 mx-auto', isSidebar ? 'w-[300px]' : 'w-[500px]']">Lorem ipsum dolor sit
                amet
                consectetur. Porttitor pharetra consequat
                vulputate molestie vehicula risus.
                Ut ac enim dui gravida sit tellus magna sem. Diam semper eu dapibus nulla dis diam eget. Mattis auctor
                fermentum ut et consectetur in luctus morbi curabitur.</p>

            <div :class="['grid gap-4', !isSidebar ? 'grid-cols-4' : 'grid-cols-1']">
                <SidebarItem v-for="(item, index) in menuItems" :key="`side-item-${index}`" :item="item"
                    :is-sidebar="isSidebar" @click="$emit('changeSideMode')" />
            </div>

            <div class="flex">
                <div class="mx-auto space-x-2 flex">
                    <Badge flag="it" text="en">
                        <template #flag>
                            <flag iso="gb" />

                        </template>
                    </Badge>
                    <Badge icon="Sun" text="light" @click="$emit('changeTheme')" />
                </div>
            </div>
        </div>
    </div>
</template>