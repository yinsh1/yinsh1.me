<template>
  <a @click="toggleColorMode" class="select-none">
    <div class="carbon-sun dark:carbon-moon"></div>
  </a>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light';
};
</script>

<style scoped></style>
