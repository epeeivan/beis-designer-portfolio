<script setup>
defineProps({
  code: {
    type: String,
    required: true,
    validator: (v) => ["gb", "fr"].includes(v),
  },
});
</script>

<template>
  <svg
    v-if="code === 'fr'"
    viewBox="0 0 3 2"
    aria-hidden="true"
    class="inline-block w-5 h-auto rounded-sm"
  >
    <rect width="1" height="2" x="0" fill="#0055A4" />
    <rect width="1" height="2" x="1" fill="#FFFFFF" />
    <rect width="1" height="2" x="2" fill="#EF4135" />
  </svg>
  <svg
    v-else-if="code === 'gb'"
    viewBox="0 0 60 30"
    aria-hidden="true"
    class="inline-block w-5 h-auto rounded-sm"
  >
    <clipPath id="lf-gb-clip">
      <path d="M0 0v30h60V0z" />
    </clipPath>
    <clipPath id="lf-gb-clip2">
      <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
    </clipPath>
    <g clip-path="url(#lf-gb-clip)">
      <path fill="#012169" d="M0 0v30h60V0z" />
      <path stroke="#fff" stroke-width="6" d="m0 0 60 30m0-30L0 30" />
      <path
        stroke="#C8102E"
        stroke-width="4"
        d="m0 0 60 30m0-30L0 30"
        clip-path="url(#lf-gb-clip2)"
      />
      <path stroke="#fff" stroke-width="10" d="M30 0v30M0 15h60" />
      <path stroke="#C8102E" stroke-width="6" d="M30 0v30M0 15h60" />
    </g>
  </svg>
</template>
