<template>
  <div class="prose mx-auto">
    <br />
    <span class="carbon:chevron-right opacity-50 text-[14px] mr-2 -ml-1"></span>
    <NuxtLink :to="path" class="opacity-75 hover:opacity-100">cd ..</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const path = computed(() => route.path.split('/').slice(0, -1).join('/') || '/');
</script>

<style scoped></style>
