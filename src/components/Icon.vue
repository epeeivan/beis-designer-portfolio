<script setup lang="ts">
import { computed } from "vue";
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Figma,
  FileX,
  Globe,
  Link,
  Maximize2,
  Moon,
  Pencil,
  Share2,
  Sun,
  X,
} from "lucide-vue-next";

const icons = {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Figma,
  FileX,
  Globe,
  Link,
  Maximize2,
  Moon,
  Pencil,
  Share2,
  Sun,
  X,
};

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: Number,
  color: String,
  strokeWidth: [Number, String],
  defaultClass: String,
});

const icon = computed(() => icons[props.name]);
</script>

<template>
  <component
    :is="icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
  />
</template>
