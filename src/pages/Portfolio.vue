<template>
  <section class="section sec3 portfolio">
        <titulo :front-title1="$t('my')" :front-title2="$t('portfolio')" :back-title="'My Work'"></titulo>
    <!-- port-text -->
    <p class="py-8 px-0 text-center"> 
      {{$t('p.portfolioDescription')}}
    </p>
    <!-- portfolios -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pb-24 md:mt-12">
      <!-- portfolio-item -->
      <port-item :titulo="'Pizza Store(in process)'" :imagen="'https://i.imgur.com/fejjLsZ.jpg'" :link-g-h="'https://github.com/Terrakill5/prueba_frontend'" :link-b-h="'https://chic-treacle-9b2e9f.netlify.app/'"></port-item>
      <port-item :titulo="'Task List (React Practice)'" :imagen="'https://imgur.com/1cSvVTJ.jpg'" :link-g-h="'https://github.com/Terrakill5/practica4_React'" :link-b-h="'https://listadetareasreactjose.netlify.app/'"></port-item>
      <port-item :titulo="'Calculator (React Practice)'" :imagen="'https://i.imgur.com/NAcfqO5.png'" :link-g-h="'https://github.com/Terrakill5/practica3_react'" :link-b-h="'https://calculadorareactjose.netlify.app'"></port-item>
      <port-item :titulo="'Task List (CRUD)'" :imagen="'https://imgur.com/6QvxCwj.png'" :link-g-h="'https://github.com/Terrakill5/CRUD'" ></port-item>
      <port-item :titulo="'Coaches Page (Rest API)'" :imagen="'https://imgur.com/tDQBB18.png'" :link-g-h="'https://github.com/Terrakill5/REST-API'" ></port-item>
    </div>
  </section>
</template>

<script setup>
import PortItem from "../components/PortItem.vue";
import Titulo from "../components/Titulo.vue";
</script>

<style scoped>
.atras {
  z-index: -1;
}
</style>
