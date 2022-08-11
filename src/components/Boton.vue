<!-- eslint-disable vue/comment-directive -->
<template>
  <div class="flex self-start">
    <a
      href=""
      class="rounded-30 font-semibold relative border border-solid border-secundario flex self-start items-center overflow-hidden antes"
    >
      <span class="py-0 px-8">Download CV</span>
      <span
        class="bg-secundario flex items-center justify-center rounded-1/2 p-4"
      >
        <i class="fa-solid fa-download"></i
      ></span>
    </a>
  </div>
</template>

<style scoped>
.antes::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  transition: all 0.4s ease-out;
  z-index: -1;
}
.antes:hover::before {
  width: 100%;
  height: 100%;
  background-color: #27ae60;
  transform: translateX(0);
}
</style>