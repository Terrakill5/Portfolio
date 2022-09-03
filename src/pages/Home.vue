<template>
  <div class="sec2 about">
    <!-- header -->
    <header class="section sec1 active">
      <div class="grid grid-cols-1 pb-24 md:pb-0 md:grid-cols-2 min-h-screen">
        <!-- header-content -->
        <div class="flex items-center relative">
          <!-- left-header -->
          <div
            class="transition-all duration-500 ease-in-out h-full w-8/12 absolute left-0 top-0 h-shape"
            :class="{'bg-secundario': !light.isLight, 'bg-secundario1': light.isLight}"

          ></div>
          <!-- h-shape -->
          <div
            class="rounded-xl z-20 h-90 ml-16 bg-black transition-all duration-500 ease-in-out"
          >
            <img
              src="../img/hero1.jpg"
              alt="Mi foto"
              class="w-ful h-full object-cover transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
        <div class="row-end-1 md:row-auto w-11/12 my-0 mx-auto md:m-auto md:w-full flex flex-col justify-center md:pr-72 p-8">
          <!-- right-header -->
          <h1 class="text-4xl md:text-5xl font-bold " :class="{'text-gris4': light.isLight}">
            <!-- name -->
            {{$t('h1.saludo')}},</h1> <h1 class="text-4xl md:text-5xl font-bold"><span :class="{ 'text-secundario': !light.isLight, 'text-secundario1': light.isLight }">{{$t('h1.nombre')}}</span></h1>
            <h1 class="text-4xl md:text-5xl font-bold" :class="{'text-gris4': light.isLight}">{{$t('h1.carrera')}}</h1>
          <p class="my-6 mx-0 leading-8" :class="{'text-gris4': light.isLight}">
            {{$t('p.presentacion')}}
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
import { useLightStore } from "../store/light";
const light = useLightStore();
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

@media screen and (max-width: 768px) {
  .h-shape {
    display: none;
  }
}
</style>
