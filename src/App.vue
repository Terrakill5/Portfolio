<template>
  <div>
    <main>
      <router-view>       
      </router-view>
    </main>
    <div
      class="bg-gris5 md:w-auto w-full fixed -translate-x-1/2 bottom-0 md:bottom-auto z-50 top-auto md:top-1/4 md:left-auto md:right-3% flex flex-row md:flex-col md:items-center justify-center md:-translate-y-2/4 transition-all duration-500 ease-in-out"
      :class="{'md:bg-primario': !light.isLight, 'md:bg-primario1': light.isLight,}"
    >
      <!-- controls -->
      <router-link
      :to="`/${i18n.global.locale}/home`"
        @click="clickPestana(0)"
        class="p-4 cursor-pointer w-14  h-14 rounded-1/2 flex justify-center items-center my-4 mx-1 md:mx-0 md:my-3 shadow-especial dark:bg-secundario1"
        :class="{ 'bg-secundario': activo[0], 'bg-gris4': !activo[0], 'bg-secundario1': activo[0] && light.isLight }"
      >
        <i
          class="fa-solid fa-house text-xl  pointer-events-none"
          :class="{ 'text-white': activo[0],'text-gris2' : !activo[0]}"
        ></i>
      </router-link>
      <!-- control 1 Home -->
      <router-link
      :to="`/${i18n.global.locale}/about`"
        @click="clickPestana(1) "
        class="p-4 cursor-pointer w-14  h-14 rounded-1/2 flex justify-center items-center my-4 mx-1 md:mx-0 md:my-3 shadow-especial dark:bg-secundario1"
        :class="{ 'bg-secundario': activo[1], 'bg-gris4': !activo[1], 'bg-secundario1': activo[1] && light.isLight }"
      >
        <i class="fa-solid fa-user text-xl pointer-events-none" :class="{ 'text-white': activo[1],'text-gris2' : !activo[1] }"></i>
      </router-link>
      <!-- control 2 -->
      <router-link
      :to="`/${i18n.global.locale}/portfolio`"
        @click="clickPestana(2)"
        class="p-4 cursor-pointer w-14  h-14 rounded-1/2 flex justify-center items-center my-4 mx-1 md:mx-0 md:my-3 shadow-especial dark:bg-secundario1"
        :class="{ 'bg-secundario': activo[2], 'bg-gris4': !activo[2], 'bg-secundario1': activo[2] && light.isLight}"
      >
        <i
          class="fa-solid fa-briefcase text-xl pointer-events-none " :class="{ 'text-white': activo[2],'text-gris2' : !activo[2] }"
        ></i>
      </router-link>
      <!-- control 3 -->
      <router-link
      :to="`/${i18n.global.locale}/blogs`"
        @click="clickPestana(3)"
        class="p-4 cursor-pointer w-14  h-14 rounded-1/2 flex justify-center items-center my-4 mx-1 md:mx-0 md:my-3 shadow-especial dark:bg-secundario1"
        :class="{ 'bg-secundario': activo[3], 'bg-gris4': !activo[3], 'bg-secundario1': activo[3] && light.isLight}"
      >
        <i
          class="fa-solid fa-newspaper text-xl pointer-events-none" :class="{ 'text-white': activo[3],'text-gris2' : !activo[3] }"
        ></i>
      </router-link>
      <!-- control 4 -->
      <router-link
      :to="`/${i18n.global.locale}/contact`"
        @click="clickPestana(4)"
        class="p-4 cursor-pointer w-14  h-14 rounded-1/2 flex justify-center items-center my-4 mx-1 md:mx-0 md:my-3 shadow-especial dark:bg-secundario1"
        :class="{ 'bg-secundario': activo[4], 'bg-gris4': !activo[4], 'bg-secundario1': activo[4] && light.isLight}"
      >
        <i
          class="fa-solid fa-envelope-open text-xl pointer-events-none" :class="{ 'text-white': activo[4],'text-gris2' : !activo[4] }"
        ></i>
      </router-link>
      <!-- control 5 -->
    </div>
    <!-- theme-btn -->
    <div class="w-12 h-12 md:w-20 md:h-20 theme-btn rounded-1/2 bg-gris4 cursor-pointer fixed flex items-center justify-center shadow-especial4 transition-all duration-100 ease-in-out z-50" @click="lightMode">
      <i class="fa-solid fa-circle-half-stroke text-2xl text-gris2 pointer-events-none"></i>
    </div>
    <div class="w-12 h-12 md:w-20 md:h-20 theme-btn-i18n rounded-1/2 cursor-pointer fixed flex items-center justify-center shadow-especial4 transition-all duration-100 ease-in-out p-4 mx-0 md:mx-8 z-50" @click="changeLocal" :class="{ 'bg-gris4': i18n.global.locale !== 'en', 'bg-secundario1': i18n.global.locale === 'en' && light.isLight, 'bg-secundario': i18n.global.locale === 'en' }">
      <i class="fa-solid fa-flag-usa  text-2xl pointer-events-none" :class="{ 'text-white': i18n.global.locale === 'en','text-gris2' : i18n.global.locale !== 'en' }"></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from './router';
import i18n from './i18n'
import { useLightStore } from "./store/light.js";
let activo = ref([true, false, false, false, false, 0]);
const light = useLightStore();

const changeLocal = () => {
  if (i18n.global.locale === 'en') {
    i18n.global.locale = 'es';
    router.push({
      params: {lang: 'es'}
    })
  }
  else {
    i18n.global.locale = 'en';
    router.push({
      params: {lang: 'en'}
    })
  }
  
};

const lightMode = () => {
  if (light.isLight) {
    light.change(false);
  }
  else {
    light.change(true);
  }
  let element = document.querySelector("html");
  element.classList.toggle('dark');

}

const clickPestana = (selector) => {
  activo.value[activo.value[5]] = false;
  activo.value[selector] = true;
  activo.value[5] = selector;
};

router.beforeEach((to, from, next) => {
    let language = to.params.lang;
    if (!language) {
        language = 'en';
    }
    i18n.global.locale = language;
    next();
})
</script>

<style>
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
}

.theme-btn-i18n {
  top: 5%;
  right: 10%;
}

@media screen and (max-width: 768px) {
  .theme-btn-i18n {
  top: 15%;
  right: 3%;
}
}

.theme-btn:active {
  transform: translateY(-5px);
}

.theme-btn-i18n:active {
  transform: translateY(-5px);
}
</style>
