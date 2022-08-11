<template>
  <div>
    <main>
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </main>
    <div
      class="fixed z-10 top-1/4 right-3% flex flex-col items-center justify-center -translate-y-2/4 transition-all"
    >
      <!-- controls -->
      <router-link
      to="/"
        @click="clickPestana(0)"
        class="p-4 cursor-pointer w-[55px] h-[55px] rounded-1/2 flex justify-center items-center mx-0 my-3 shadow-especial"
        :class="{ 'bg-secundario': activo[0], 'bg-gris4': !activo[0] }"
      >
        <i
          class="fa-solid fa-house text-xl  pointer-events-none"
          :class="{ 'text-white': activo[0],'text-gris2' : !activo[0], 'text-primario': light }"
        ></i>
      </router-link>
      <!-- control 1 Home -->
      <router-link
      to="/about"
        @click="clickPestana(1) "
        class="p-4 cursor-pointer w-[55px] h-[55px] rounded-1/2 flex justify-center items-center mx-0 my-3 shadow-especial"
        :class="{ 'bg-secundario': activo[1], 'bg-gris4': !activo[1] }"
      >
        <i class="fa-solid fa-user text-xl pointer-events-none" :class="{ 'text-white': activo[1],'text-gris2' : !activo[1] }"></i>
      </router-link>
      <!-- control 2 -->
      <router-link
      to="/portfolio"
        @click="clickPestana(2)"
        class="p-4 cursor-pointer w-[55px] h-[55px] rounded-1/2 flex justify-center items-center mx-0 my-3 shadow-especial"
        :class="{ 'bg-secundario': activo[2], 'bg-gris4': !activo[2] }"
      >
        <i
          class="fa-solid fa-briefcase text-xl pointer-events-none " :class="{ 'text-white': activo[2],'text-gris2' : !activo[2] }"
        ></i>
      </router-link>
      <!-- control 3 -->
      <router-link
      to="/blogs"
        @click="clickPestana(3)"
        class="p-4 cursor-pointer w-[55px] h-[55px] rounded-1/2 flex justify-center items-center mx-0 my-3 shadow-especial"
        :class="{ 'bg-secundario': activo[3], 'bg-gris4': !activo[3] }"
      >
        <i
          class="fa-solid fa-newspaper text-xl pointer-events-none" :class="{ 'text-white': activo[3],'text-gris2' : !activo[3] }"
        ></i>
      </router-link>
      <!-- control 4 -->
      <router-link
      to="/contact"
        @click="clickPestana(4)"
        class="p-4 cursor-pointer w-[55px] h-[55px] rounded-1/2 flex justify-center items-center mx-0 my-3 shadow-especial"
        :class="{ 'bg-secundario': activo[4], 'bg-gris4': !activo[4] }"
      >
        <i
          class="fa-solid fa-envelope-open text-xl pointer-events-none" :class="{ 'text-white': activo[4],'text-gris2' : !activo[4] }"
        ></i>
      </router-link>
      <!-- control 5 -->
    </div>
    <!-- theme-btn -->
    <div class="theme-btn rounded-1/2 bg-gris4 cursor-pointer fixed flex items-center justify-center shadow-especial4 transition-all duration-100 ease-in-out" @click="lightMode">
      <i class="fa-solid fa-circle-half-stroke text-2xl text-gris2 pointer-events-none"></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let activo = ref([true, false, false, false, false, 0]);
let light = ref(false);

const lightMode = () => light.value = !light.value;

const clickPestana = (selector) => {
  activo.value[activo.value[5]] = false;
  activo.value[selector] = true;
  activo.value[5] = selector;
};
</script>

<style>
body {
  background-color: #191d2b;
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  color: white;
  transition: all 0.4s ease-in-out;
}

.route-enter-active {
  animation: scaleAnim 1s ease-in-out;
  @keyframes scaleAnim {
    0%{
      transform: translate(-100%) scale(0);
    }
    100%{
      transform: translateY(0) scale(1);
    }
  }
}

.theme-btn {
  top: 5%;
  right: 3%;
  width: 70px;
  height: 70px;
}

.theme-btn:active {
  transform: translateY(-5px);
}
</style>
