<template>
  <div class="sec2 about">
    <header class="section sec1 header active">
      <div class="grid grid-cols-2 h-full">
        <!-- header-content -->
        <div class="flex items-center relative">
          <!-- left-header -->
          <div
            class="transition-all duration-500 ease-in-out h-full w-8/12 bg-secundario absolute left-0 top-0 h-shape"
          ></div>
          <!-- h-shape -->
          <div
            class="rounded-xl z-20 h-90 ml-16 bg-black transition-all duration-500 ease-in-out"
          >
            <img
              src="../img/hero.png"
              alt="Mi foto"
              class="w-ful h-full object-cover transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
        <div class="flex flex-col justify-center pr-72">
          <!-- right-header -->
          <h1 class="text-5xl font-bold">
            <!-- name -->
            Hi, <span class="text-secundario">I'm Jose Briceño</span>
            A Frotend Web Developer
          </h1>
          <p class="my-6 mx-0 leading-8">
            I'm a Web Developer, I love to create beautiful and functional
            websites
          </p>
          <boton></boton>
        </div>
      </div>
      <!-- <i class="fa-brands fa-instagram"></i> -->
    </header>
  </div>
</template>

<script setup>
import boton from "../components/Boton.vue";
</script>

<style scoped>
.h-shape {
  clip-path: polygon(0 0, 46% 0, 79% 100%, 0 100%);
}
img {
  filter: grayscale(100%);
}
img:hover {
  filter: grayscale(0);
}
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
