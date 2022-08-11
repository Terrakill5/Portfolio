<template>
  
    <div class="relative pl-12 border-l-2 border-gris5 border-solid">
      <!-- timeline-icon -->
      <div
        class="absolute -left-7 top-0 bg-secundario w-12 h-12 rounded-1/2 flex items-center justify-center"
      >
        <i class="fa-solid fa-briefcase text-xl"></i>
      </div>
      <!-- tl-duration -->
      <p
        class="py-1 px-3 bg-gris5 rounded-2xl inline-block text-sm uppercase font-medium"
      >
        {{ aboutProps.start}} - {{aboutProps.ended}}
      </p>
      <h5 class="py-4 uppercase text-xl font-semibold">
        {{aboutProps.title}}<span class="text-gris2 font-medium text-xl">
          - {{aboutProps.company}}</span
        >
      </h5>
      <p class="text-gris2">
        {{aboutProps.text}}
      </p>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const aboutProps = defineProps({
  start: {
    type: Number,
    required: true,
  },
  ended: {
    type: String,
    required: true,
  },
    title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },

});
</script>
