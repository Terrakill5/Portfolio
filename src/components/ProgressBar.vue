<template>
  <div class="flex flex-col">
    <!-- prog-title -->
    <p class="uppercase font-medium">{{ aboutProps.titulo }}</p>
    <!-- progress-con -->
    <div class="flex items-center">
      <!-- prog-text -->
      <p class="text-gris2">{{ aboutProps.text }}%</p>
      <!-- progress -->
      <div class="w-full h-2 text-gris4 ml-4 relative">
        <!-- html -->
        <span
          class="absolute top-0 left-0 h-full bg-secundario transition-all duration-500 ease-in-out"
          :class="{
            v60: aboutProps.text === 60,
            v80: aboutProps.text === 80,
            v40: aboutProps.text === 40,
          }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const aboutProps = defineProps({
  titulo: {
    type: String,
    required: true,
  },
  text: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.v60 {
  width: 60%;
}

.v80 {
  width: 80%;
}

.v40 {
  width: 40%;
}
</style>
