<template>
    <div class="text-center">
      <h2 class="relative uppercase text-6xl font-bold">
        {{contactProps.frontTitle1}} <span class="text-secundario">{{contactProps.frontTitle2}}</span
        ><span
          class="absolute -top-2/4 left-28% atras text-gris5 transition-all delay-500 ease-in-out -translate-x-1/2 -translate-y-1/2 font-extrabold text-8xl"
          >{{contactProps.backTitle}}</span
        >
        </h2>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

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