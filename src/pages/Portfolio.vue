<template>
  <section class="section sec3 portfolio">
        <titulo :front-title1="'My'" :front-title2="'Portfolio'" :back-title="'My Work'"></titulo>
    <!-- port-text -->
    <p class="py-8 px-0 text-center"> 
      Here is some of my work that i've done in various programming languages
    </p>
    <!-- portfolios -->
    <div class="grid grid-cols-3 gap-8 mt-12">
      <!-- portfolio-item -->
      <port-item :imagen="'https://i.imgur.com/fejjLsZ.jpg'" :link-g-h="'https://github.com/Terrakill5/prueba_frontend'"></port-item>
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
