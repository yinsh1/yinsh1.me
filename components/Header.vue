<template>
  <header class="p-4 flex justify-between">
    <div>Yinsh1</div>
    <ul class="flex items-center gap-4">
      <li v-for="route in routes" :key="route.name">
        <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
      </li>
      <li class="w-5 h-5">
        <button v-for="(icon, index) in icons" :key="index" @click="icon.handler" :class="icon.class" />
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
  const colorMode = useColorMode();

  const toggleColorMode = () => {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';
  };
  const routes = [
    {
      name: 'blog',
      path: '/blog',
    },
    {
      name: 'projects',
      path: '/projects',
    },
    {
      name: 'about',
      path: '/about',
    },
  ];

  const icons = [
    {
      class: 'i-carbon-sun dark:i-carbon-moon',
      handler: toggleColorMode,
    },
  ];
</script>

<style scoped></style>
