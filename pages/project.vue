<template>
  <main class="p-10">
    <div class="prose mx-auto">
      <article class="grid grid-cols-2 gap-3">
        <ContentList path="/project" v-slot="{ list }">
          <a v-for="project in list" :key="project._path" :href="project.link" class="project" target="_blank">
            <div class="title flex justify-center items-center gap-4">
              <div :class="project.icon" class="w-10 h-10"></div>
              <span class="text-[20px] leading-[20px]">
                {{ project.title }}
              </span>
            </div>
            <div class="mt-4 opacity-40 desc">
              {{ project.description }}
            </div>
          </a>
        </ContentList>
      </article>
    </div>

    <CD />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.prose a {
  border-bottom: none;
}

.project {
  @apply py-3 px-4 rounded hover:bg-[rgba(136,136,136,0.07)]  transition-all duration-200 ease-in-out;
}

.project .title {
  @apply opacity-60 transition-opacity duration-200 ease-in-out;
}

.project:hover .title {
  @apply opacity-100;
}
.project:hover .desc {
  @apply opacity-60;
}
</style>
