<template>
  <section class="sec4 blogs">
    <div class="blogs-content">
          <titulo :front-title1="'My'" :front-title2="'Blogs'" :back-title="'My Blogs'"></titulo>
      <!-- blogs -->
      <div class="grid grid-cols-3 gap-8 mt-12">
      <!--   blog -->
        <div class="blog relative bg-gris5 rounded-md shadow-especial2 transition-all duration-500 ease-in-out">
          <img src="../img/blog1.jpg" alt="" class="w-full h-72 object-cover rounded-t-md transition-all duration-500 ease-in-out"/>
          <!-- blog-text -->
          <div class="-mt-1 p-5 rounded-t-lg border-solid border-secundario">
            <h4>
              How to Create Your Own Website
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, maiores eaque sit voluptate molestias impedit, tenetur quas, nisi eligendi deleniti mollitia assumenda accusamus eius? Error, non. Repellendus magni iusto quaerat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Titulo from "../components/Titulo.vue";
</script>

<style scoped>

img {
  filter: grayscale(100%);
}

.blog:hover {
  box-shadow: 1px 1px 20px rgba(0,0,0,.3);
  transform: translateY(5px);
  transition: all .4s ease-in-out;
}

.blog:hover img {
  filter: grayscale(0);
  transform: scale(1.1);
  box-shadow: 1px 4px 20px rgba(0,0,0,.8);
}

.atras {
  z-index: -1;
}
</style>
