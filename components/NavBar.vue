<template>
  <header class="p-4 flex justify-between">
    <NuxtLink to="/" class="simple-icons:steam w-[24px] h-[24px]"></NuxtLink>
    <nav class="nav">
      <div class="flex items-center gap-4">
        <NuxtLink v-for="route in routes" :key="route.name" :to="route.path">{{ route.name }}</NuxtLink>
        <toggle-theme></toggle-theme>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const routes = [
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Project',
    path: '/project',
  },
  {
    name: 'About',
    path: '/about',
  },
];
</script>

<style scoped>
.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}
</style>
