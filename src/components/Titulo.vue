<template>
    <div class="text-center">
      <h2 class="relative uppercase text-3xl md:text-5xl lg:text-6xl font-bold">
        <span :class="{'text-gris4': light.isLight}">{{contactProps.frontTitle1}}</span>  <span class="text-4xl md:text-5xl lg:text-6xl" :class="{'text-secundario': !light.isLight, 'text-secundario1': light.isLight}">{{contactProps.frontTitle2}}</span
        ><span
          class="absolute -top-2/4 left-28% atras transition-all delay-500 ease-in-out -translate-x-1/2 -translate-y-1/2 font-extrabold text-3xl md:text-5xl lg:text-7xl"
          :class="{'text-gris2': light.isLight, 'text-gris5':!light.isLight}"
          >{{contactProps.backTitle}}</span
        >
        </h2>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useLightStore } from "../store/light";
const light = useLightStore();

const contactProps = defineProps({
  frontTitle1: {
    type: String,
    required: true,
  },
  frontTitle2: {
    type: String,
    required: true,
  },
    backTitle: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.atras {
  z-index: -1;
}
</style>