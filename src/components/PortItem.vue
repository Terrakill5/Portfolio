<template>
    <div class="relative hover:opacity-100 hover:scale-100">
        <div class="image">
          <img :src=portfolioProps.imagen alt="" class="w-full h-72 object-cover rounded-2xl"/>
        </div>
        <!-- hover-item -->
        <div class="w-full h-full bg-secundario absolute left-0 top-0 rounded-2xl flex justify-center items-center flex-col opacity-0 scale-0 transition-all duration-500 ease-in-out hover:opacity-100 hover:scale-100">
          <h3 class="text-2xl text-white mb-6">Project Source</h3>
          <!-- icons -->
          <div class="flex justify-center items-center">
            <a :href=portfolioProps.linkGH target="_blank" class="bg-primario rounded-1/2 w-12 h-12 flex justify-center items-center my-0 mx-4 cursor-pointer transition-all duration-500 ease-in-out text-2xl hover:bg-white hover:text-primario">
              <i class="fa-brands fa-github"></i>
            </a>
            <a :href=portfolioProps.linkBH target="_blank" class="bg-primario rounded-1/2 w-12 h-12 flex justify-center items-center my-0 mx-4 cursor-pointer transition-all duration-500 ease-in-out text-2xl hover:bg-white hover:text-primario">
              <i class="fa-brands fa-behance"></i>
            </a>
            <a :href=portfolioProps.linkY target="_blank" class="bg-primario rounded-1/2 w-12 h-12 flex justify-center items-center my-0 mx-4 cursor-pointer transition-all duration-500 ease-in-out text-2xl hover:bg-white hover:text-primario">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
</template>

<script setup>
import { defineProps } from "vue";

const portfolioProps = defineProps({
  imagen: {
    type: String,
    required: true,
  },
  linkGH: {
    type: String,
    required: true,
  },
    linkBH: {
    type: String,
    required: false,
  },
  linkY: {
    type: String,
    required: false,
  },

});
</script>