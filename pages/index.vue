<template>
  <main class="p-10">
    <div class="prose mx-auto">
      <div class="flex items-start">
        <img src="asuka.jpg" alt="霒蚀" class="avatar" />
        <div class="flex flex-col ml-8 flex-1">
          <h1 class="name">霒蚀Yinsh1</h1>
          <div class="my-3">Frontend Developer</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.avatar {
  @apply w-150px h-150px object-cover rounded-full my-0;
}

.name {
  @apply mb-0;
}
</style>
