<template>
  <main class="p-10">
    <div class="prose mx-auto">
      <article class="flex items-start">
        <img src="asuka.jpg" alt="霒蚀" class="avatar" />
        <div class="flex flex-col ml-8 flex-1">
          <h1 class="name">霒蚀Yinsh1</h1>
          <div class="my-3">Frontend Developer</div>
          <div class="flex gap-3">
            <a href="https://github.com/yinsh1" class="simple-icons:github"></a>
            <a href="https://space.bilibili.com/7181347" class="simple-icons:bilibili"></a>
          </div>
        </div>
      </article>
      <div class="mt-[20vh] text-[13px]">
        <div v-for="i in 10" :key="i" class="flex">
          <div v-for="j in 39" :key="j">
            <div class="carbon:construction" :class="[charPos.includes(`${i},${j}`) ? 'text-rose' : '']"></div>
          </div>
        </div>
      </div>
    </div>
    <Copyright />
  </main>
</template>

<script setup lang="ts">
const charPos = [
  //施
  '2,3',
  '2,7',
  '3,2',
  '3,3',
  '3,4',
  '3,5',
  '3,7',
  '3,8',
  '3,9',
  '3,10',
  '3,11',
  '3,12',
  '3,13',
  '4,3',
  '4,6',
  '4,8',
  '4,10',
  '5,3',
  '5,4',
  '5,5',
  '5,7',
  '5,8',
  '5,9',
  '5,10',
  '5,11',
  '5,12',
  '5,13',
  '6,3',
  '6,5',
  '6,8',
  '6,10',
  '6,13',
  '7,3',
  '7,5',
  '7,8',
  '7,10',
  '7,12',
  '7,13',
  '8,3',
  '8,5',
  '8,8',
  '9,2',
  '9,4',
  '9,5',
  '9,5',
  '9,8',
  '9,9',
  '9,10',
  '9,11',
  '9,12',
  '9,13',
  //工
  '2,16',
  '2,17',
  '2,18',
  '2,19',
  '2,20',
  '2,21',
  '2,22',
  '2,23',
  '2,24',
  '2,25',
  '2,26',
  '3,21',
  '4,21',
  '5,21',
  '6,21',
  '7,21',
  '8,21',
  '9,16',
  '9,17',
  '9,18',
  '9,19',
  '9,20',
  '9,21',
  '9,22',
  '9,23',
  '9,24',
  '9,25',
  '9,26',
  //中
  '2,33',
  '3,33',
  '4,29',
  '4,30',
  '4,31',
  '4,32',
  '4,33',
  '4,34',
  '4,35',
  '4,36',
  '4,37',
  '5,29',
  '5,33',
  '5,37',
  '6,29',
  '6,30',
  '6,31',
  '6,32',
  '6,33',
  '6,34',
  '6,35',
  '6,36',
  '6,37',
  '7,33',
  '8,33',
  '9,33',
];
</script>

<style scoped>
.avatar {
  @apply w-150px h-150px object-cover rounded-full my-0;
}

.name {
  @apply mb-0;
}
</style>
