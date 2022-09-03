<template>
  <section class="sec4 blogs">
    <div class="blogs-content">
          <titulo :front-title1="$t('my')" :front-title2="'Blogs'" :back-title="'My Blogs'"></titulo>
      <!-- blogs -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pb-24 md:mt-12">
      <!--   blog -->
        <div :class="{'bg-gris5':!light.isLight, 'bg-gris':light.isLight}" class="blog relative rounded-md shadow-especial2 transition-all duration-500 ease-in-out">
          <img src="../img/blog1.jpg" alt="" class="w-full h-72 object-cover rounded-t-md transition-all duration-500 ease-in-out"/>
          <!-- blog-text -->
          <div :class="{'border-secundario':!light.isLight, 'border-secundario1':light.isLight}" class="-mt-1 p-5 rounded-t-lg border-solid">
            <h4 :class="{'text-gris4':light.isLight}">
              {{$t('h4.blogsDescription1')}}
            </h4>
            <p :class="{'text-gris4':light.isLight}">
             {{$t('h4.blogsDescription2')}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Titulo from "../components/Titulo.vue";
import { useLightStore } from "../store/light";
const light = useLightStore();
</script>

<style scoped>

img {
  filter: grayscale(100%);
}

.blog:hover {
  box-shadow: 1px 1px 20px rgba(0,0,0,.3);
  transform: translateY(5px);
  transition: all .4s ease-in-out;
}

.blog:hover img {
  filter: grayscale(0);
  transform: scale(1.1);
  box-shadow: 1px 4px 20px rgba(0,0,0,.8);
}

.atras {
  z-index: -1;
}
</style>
