<template>
<!-- contact-item -->
  <div class="flex items-center justify-between">
    <!-- icon -->
    <div class="icon grid ">
      <i  class="fa-solid flex items-center text-xl" :class="{'fa-location-dot': location, 'fa-envelope': envelope, 'fa-user-graduate': graduate, 'fa-globe': globe, 'fa-mobile': mobile, 'text-gris4':light.isLight}"></i>
      <span :class="{'text-gris4': light.isLight}">{{contactProps.title}}</span>
    </div>
    <p class="my-2 mx-0 p-0">
      <span :class="{'text-gris4': light.isLight}"> : {{contactProps.description}}</span>
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useLightStore } from "../store/light";
const light = useLightStore();
const location = contactProps.icon === 'location';
const envelope = contactProps.icon === 'envelope';
const graduate = contactProps.icon === 'graduate';
const globe = contactProps.icon === 'globe';
const mobile = contactProps.icon === 'mobile';

const contactProps = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  }
});
</script>

<style scoped>
.icon {
  grid-template-columns: 40px 1fr;
}
</style>