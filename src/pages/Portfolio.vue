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
      <port-item :imagen="'https://i.imgur.com/fejjLsZ.jpg'" :link-g-h="'https://github.com/Terrakill5/prueba_frontend'" :link-b-h="'https://beamish-bubblegum-226193.netlify.app/'"></port-item>
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
