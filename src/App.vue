<template>
  <div>
    <header class="section sec1 header active">
      <i class="fa-brands fa-instagram"></i>
    </header>
    <main>
      <router-view class='scale-0 bg-primario -translate-y-full transition-all ease-in-out duration-200'></router-view>
    </main>
    <div
      class="fixed z-10 top-1/4 right-3% flex flex-col items-center justify-center -translate-y-2/4 transition-all"
    >
      <!-- controls -->
      <div
        @click="clickPestana(0), home() "
        class="p-4 cursor-pointer w-[55px] h-[55px] rounded-1/2 flex justify-center items-center mx-0 my-3 shadow-especial"
        :class="{ 'bg-secundario': activo[0], 'bg-gris4': !activo[0] }"
      >
        <i
          class="fa-solid fa-house text-xl  pointer-events-none"
          :class="{ 'text-white': activo[0],'text-gris2' : !activo[0] }"
        ></i>
      </div>
      <!-- control 1 Home -->
      <div
        @click="clickPestana(1), about() "
        class="p-4 cursor-pointer w-[55px] h-[55px] rounded-1/2 flex justify-center items-center mx-0 my-3 shadow-especial"
        :class="{ 'bg-secundario': activo[1], 'bg-gris4': !activo[1] }"
      >
        <i class="fa-solid fa-user text-xl pointer-events-none" :class="{ 'text-white': activo[1],'text-gris2' : !activo[1] }"></i>
      </div>
      <!-- control 2 -->
      <div
        @click="clickPestana(2), contact() "
        class="p-4 cursor-pointer w-[55px] h-[55px] rounded-1/2 flex justify-center items-center mx-0 my-3 shadow-especial"
        :class="{ 'bg-secundario': activo[2], 'bg-gris4': !activo[2] }"
      >
        <i
          class="fa-solid fa-briefcase text-xl pointer-events-none " :class="{ 'text-white': activo[2],'text-gris2' : !activo[2] }"
        ></i>
      </div>
      <!-- control 3 -->
      <div
        @click="clickPestana(3), portfolio() "
        class="p-4 cursor-pointer w-[55px] h-[55px] rounded-1/2 flex justify-center items-center mx-0 my-3 shadow-especial"
        :class="{ 'bg-secundario': activo[3], 'bg-gris4': !activo[3] }"
      >
        <i
          class="fa-solid fa-newspaper text-xl pointer-events-none" :class="{ 'text-white': activo[3],'text-gris2' : !activo[3] }"
        ></i>
      </div>
      <!-- control 4 -->
      <div
        @click="clickPestana(4),blogs()"
        class="p-4 cursor-pointer w-[55px] h-[55px] rounded-1/2 flex justify-center items-center mx-0 my-3 shadow-especial"
        :class="{ 'bg-secundario': activo[4], 'bg-gris4': !activo[4] }"
      >
        <i
          class="fa-solid fa-envelope-open text-xl pointer-events-none" :class="{ 'text-white': activo[4],'text-gris2' : !activo[4] }"
        ></i>
      </div>
      <!-- control 5 -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let activo = ref([true, false, false, false, false, 0]);

const clickPestana = (selector) => {
  activo.value[activo.value[5]] = false;
  activo.value[selector] = true;
  activo.value[5] = selector;
};
const home = () => router.push("/");
const about = () => router.push("/about");
const portfolio = () => router.push("/portfolio");
const blogs = () => router.push("/blogs");
const contact = () => router.push("/contact");
</script>

<style>
body {
  background-color: #191d2b;
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  color: white;
  transition: all 0.4s ease-in-out;
}

/* .active-btn {
  background-color: secundario;
  transition: all .4s ease-in-out;
}

i {
  color: white; 
}*/
</style>
