<template>
  <main class="p-10">
    <div class="prose mx-auto flex flex-col gap-3">
      <ContentList path="/blog" v-slot="{ list }">
        <div
          v-for="blog in list"
          :key="blog._path"
          class="opacity-60 hover:opacity-100 transition-opacity duration-200 ease-in-out"
        >
          <NuxtLink :to="blog._path">{{ blog.title }}</NuxtLink>
        </div>
      </ContentList>
    </div>

    <CD />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
