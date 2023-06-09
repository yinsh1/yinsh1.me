<template>
  <div class="">
    <div>{{ name }}</div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const name = computed(() => route.path);
</script>

<style scoped></style>
