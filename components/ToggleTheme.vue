<template>
  <a @click="toggleColorMode" class="select-none">
    <div class="i-carbon-sun dark:i-carbon-moon"></div>
  </a>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';
};
</script>

<style scoped></style>
