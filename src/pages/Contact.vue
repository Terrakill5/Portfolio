<template>
<section class="section sec5 contact">
    <div class="contact-container">
    <titulo :front-title1="'My'" :front-title2="'Contact'" :back-title="'My Contact'"></titulo>
    </div>
    <!-- contact-content-con -->
    <div class="flex pt-14">
      <!-- left-contact -->
      <div class="left-contact">
        <h4 class="mt-4 text-3xl uppercase">Contact me here</h4>
        <p class="my-4 mx-0 leading-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam, fugiat placeat possimus suscipi numquam nemo ab? Iusto, nemo! Asperiores, non.
        </p>
        <!-- contact-info -->
        <div class="">
          <contact-item :title="'Location'" :description="'Tumbes, Peru'" :icon="'location'"></contact-item>
          <contact-item :title="'Email'" :description="'josealbertino4@gmail.com'" :icon="'envelope'"></contact-item>
          <contact-item :title="'Education'" :description="'Valencia, Venezuela'" :icon="'graduate'"></contact-item>
          <contact-item :title="'Mobile Number'" :description="'+51935175495'" :icon="'mobile'"></contact-item>
          <contact-item :title="'Languages'" :description="'Native Spanish, Mid English'" :icon="'globe'"></contact-item>
          <div class="contact-icons">
            <!-- contact-icon -->
            <div class="flex mt-8">
              <a href="https://www.facebook.com/Terrakill" target="_blank" class="flex items-center text-white bg-gris5 cursor-pointer justify-center w-12 h-12 rounded-1/2 my-0 mx-2 hover:bg-secundario transition-all duration-500 ease-in-out group">
                <i class="fa-brands fa-facebook flex items-center justify-center text-xl group-hover:text-primario"></i>
              </a>
              <a href="https://github.com/Terrakill5/" target="_blank" class="flex items-center text-white bg-gris5 cursor-pointer justify-center w-12 h-12 rounded-1/2 my-0 mx-2 hover:bg-secundario transition-all duration-500 ease-in-out group">
                <i class="fa-brands fa-github flex items-center justify-center text-xl group-hover:text-primario"></i>
              </a>
              <a href="https://www.linkedin.com/in/jose-briceno5" target="_blank" class="flex items-center text-white bg-gris5 cursor-pointer justify-center w-12 h-12 rounded-1/2 my-0 mx-2 hover:bg-secundario transition-all duration-500 ease-in-out group" >
                <i class="fa-brands fa-linkedin flex items-center justify-center text-xl group-hover:text-primario"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- right-contact -->
      <div class="right-contact ml-12">
        <form action="" class="contact-form">
          <!-- input-control -->
          <div class="input-control m-6 flex">
            <input class="rounded-30 py-3 px-4 outline-none border-none bg-gris5 w-full text-white resize-none" type="text" required placeholder="YOUR NAME">
            <input class="ml-6 rounded-30 py-3 px-4 outline-none border-none bg-gris5 w-full text-white resize-none" type="email" required placeholder="YOUR EMAIL" />
          </div>
          <div class="input-control m-6">
            <input class="rounded-30 py-3 px-4 outline-none border-none bg-gris5 w-full text-white resize-none" type="text" required placeholder="ENTER SUBJECT" />
          </div>
          <div class="input-control m-6">
            <textarea class="rounded-30 py-3 px-4 outline-none border-none bg-gris5 w-full text-white resize-none" name="" id="" cols="15" rows="8" placeholder="Message Here..." />
          </div>
          <!-- submit-btn -->
          <div class="flex justify-start">
            <boton></boton>
          </div>
        </form>
      </div>
    </div>
</section>

</template>

<script setup>
  import Titulo from "../components/Titulo.vue";
  import Boton from "../components/Boton.vue";
  import ContactItem from "../components/ContactItem.vue";
</script>

<style scoped>
.left-contact {
  flex: 2;
}

.right-contact {
  flex: 3;
} 
</style>