<template>
  <section class="sec2 about">
    <titulo :front-title1="'About'" :front-title2="'Me'" :back-title="'My Stats'"></titulo>
    <!-- About container -->
    <div class="grid grid-cols-1 xl:grid-cols-2 pt-14 pb-20">
      <!-- about-container -->
      <div class="pr-0 md:pr-20">
        <!-- left-about -->
        <h4 class="text-3xl uppercase font-bold" :class="{'text-gris4':light.isLight}">Information About me</h4>
        <p class="leading-8 pl-0 py-4 md:p-4" :class="{'text-gris1': !light.isLight, 'text-gris4':light.isLight}">
          Bachellor in Computer Science in Proccess, Proficient in Frontend Developement using Vanilla JavaScript, VueJS and React. Open to Work using my skills and open to learn any other technology. <br>

I'm a Self-taught person, responsable, open minded, i get fun solving problems and i want to be the best of myself. i want to be better every day, as a person and as a professional. <br>

I am currently working at IDforIdeas, there are juniors from various branches such as backend, designers, etc. We work on a project where we set out to realize an idea, like a pizza shop and as a group we use our skills to design, develop and test it to deliver a real life product. We're using Vanilla CSS, ReactJS as front. I'm the shift Product Owner/Scrum Master. 
        </p>
        <boton></boton>
        <!-- CV Download -->
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 xl:pt-0 ">
        <!-- right-about -->
        <div
          class="border border-solid border-gris5 rounded-md transition-all delay-500 ease-in-out shadow-especial1 about-item"
        >
          <!-- about-item -->
          <div class="p-6 flex flex-col">
            <!-- abt-text -->
            <p class="text-3xl xl:text-5xl font-bold" :class="{'text-secundario1':light.isLight, 'text-secundario': !light.isLight}">3+</p>
            <!-- large-text -->
            <p
              class="pl-0 xl:pl-12 relative uppercase text-xl text-gris1 tracking-widest small-text"
            >
              Projects <br />
              Completed
            </p>
          </div>
        </div>
        <div
          class="border border-solid border-gris5 rounded-md transition-all delay-500 ease-in-out shadow-especial1 about-item"
        >
          <!-- about-item -->
          <div class="p-6 flex flex-col">
            <!-- abt-text -->
            <p class="text-3xl xl:text-5xl font-bold" :class="{'text-secundario1':light.isLight, 'text-secundario': !light.isLight}">20+</p>
            <!-- large-text -->
            <p
              class="pl-0 xl:pl-12 relative uppercase text-xl text-gris1 tracking-widest small-text"
            >
              Challenges <br />
              Completed
            </p>
          </div>
        </div>
        <div
          class="border border-solid border-gris5 rounded-md transition-all delay-500 ease-in-out shadow-especial1 about-item"
        >
          <!-- about-item -->
          <div class="p-6 flex flex-col">
            <!-- abt-text -->
            <p class="text-3xl xl:text-5xl font-bold" :class="{'text-secundario1':light.isLight, 'text-secundario': !light.isLight}">100%</p>
            <!-- large-text -->
            <p
              class="pl-0 xl:pl-12 relative uppercase text-xl text-gris1 tracking-widest small-text"
            >
              Motivated
            </p>
          </div>
        </div>
        <div
          class="border border-solid border-gris5 rounded-md transition-all delay-500 ease-in-out shadow-especial1 about-item"
        >
          <!-- about-item -->
          <div class="p-6 flex flex-col">
            <!-- abt-text -->
            <p class="text-3xl xl:text-5xl font-bold text-secundario" :class="{'text-secundario1':light.isLight, 'text-secundario': !light.isLight}">100%</p>
            <!-- large-text -->
            <p
              class="pl-0 xl:pl-12 relative uppercase text-xl text-gris1 tracking-widest small-text"
            >
              Attitude
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- About stats -->
    <div class="pb-16">
      <!-- stat-title2 -->
      <h4 class="font-bold uppercase text-2xl text-center py-14 px-0 relative stat-title" :class="{'text-gris4':light.isLight}">My Timeline</h4>
      <!-- Timeline/ Jobs -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24 md:pb-12">
    <!-- timeline-item -->
        <timeline :start="2022" :ended="'Present'" :title="'Frontend Web Developer'" :company="'ID for ideas'" :text="'Part of the Frontend team using HTML, CSS, ReactJS. In charge of uniting the 381 team and serving as a mediator between them to be able to reach agreements on the project and promote it for its realization and production.'"></timeline>
      </div>
      <!-- stat-title -->
      <h4
        class="font-bold uppercase text-2xl text-center py-14 px-0 relative stat-title"
        :class="{'text-gris4':light.isLight}"
      >
        My Skills
      </h4>
      <!-- progress-bars -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <progress-bar :titulo="'html'" :text="'Junior'"></progress-bar>
        <progress-bar :titulo="'CSS'"  :text="'Junior'"></progress-bar>
        <progress-bar :titulo="'JavaScript'" :text="'Junior'"></progress-bar>
        <progress-bar :titulo="'Vue'" :text="'Junior'"></progress-bar>
        <progress-bar :titulo="'TailwindCSS'" :text="'Junior'"></progress-bar>
        <progress-bar :titulo="'TypeScript'" :text="'Junior'"></progress-bar>
      </div>
    </div>
  </section>
</template>

<script setup>
import boton from "../components/Boton.vue";
import ProgressBar from "../components/ProgressBar.vue";
import Timeline from "../components/Timeline.vue";
import Titulo from "../components/Titulo.vue";
import { useLightStore } from "../store/light";
const light = useLightStore();
</script>

<style scoped>
.atras {
  z-index: -1;
}

.about-item:hover {
  cursor: default;
  transform: translateY(-5px);
  border: 1px solid #27ae60;
  box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.32);
}
.small-text::before {
  content: "";
  position: absolute;
  left: 0;
  top: 15px;
  width: 2rem;
  height: 2px;
  background-color: #2a2e35;
}

@media screen and (max-width: 1280px) {
  .small-text::before {
    display: none;
  }
}

.stat-title::before {
  content: "";
  left: 50%;
  top: 0;
  width: 40%;
  height: 1px;
  background-color: #2a2e35;
  transform: translateX(-50%);
}
</style>
