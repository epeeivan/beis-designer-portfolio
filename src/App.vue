<script setup></script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="slide" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
<style>
@import "@/assets/css/style.css";
</style>
