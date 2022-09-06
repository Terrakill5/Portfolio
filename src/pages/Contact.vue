<template>
<section class="section sec5 contact">
    <div class="contact-container">
    <titulo :front-title1="$t('my')" :front-title2="$t('contact')" :back-title="'My Contact'"></titulo>
    </div>
    <!-- contact-content-con -->
    <div class="flex flex-col md:flex-row pt-14">
      <!-- left-contact -->
      <div class="left-contact">
        <h4 :class="{'text-gris4': light.isLight}" class="mt-4 text-3xl uppercase">{{$t('h4.contactDesc')}}</h4>
        <p :class="{'text-gris3': light.isLight}" class="my-4 mx-0 leading-8">
          <!-- Por si hace falta texto poner aca -->
        </p>
        <!-- contact-info -->
        <div class="">
          <contact-item :title="$t('location')" :description="'Tumbes, Peru'" :icon="'location'"></contact-item>
          <contact-item :title="$t('email')" :description="'josealbertino4@gmail.com'" :icon="'envelope'"></contact-item>
          <contact-item :title="$t('education')" :description="'Valencia, Venezuela'" :icon="'graduate'"></contact-item>
          <contact-item :title="$t('mobileN')" :description="'+51935175495'" :icon="'mobile'"></contact-item>
          <contact-item :title="$t('languages')" :description="$t('languagesDesc')" :icon="'globe'"></contact-item>
          <div class="contact-icons">
            <!-- contact-icon -->
            <div class="flex mt-8">
              <a href="https://www.facebook.com/Terrakill" target="_blank" class="flex items-center text-white bg-gris5 cursor-pointer justify-center w-12 h-12 rounded-1/2 my-0 mx-2 transition-all duration-500 ease-in-out group" :class="{'hover:bg-secundario': !light.isLight, 'hover:bg-secundario1': light.isLight}">
                <i class="fa-brands fa-facebook flex items-center justify-center text-xl group-hover:text-primario"></i>
              </a>
              <a href="https://github.com/Terrakill5/" target="_blank" class="flex items-center text-white bg-gris5 cursor-pointer justify-center w-12 h-12 rounded-1/2 my-0 mx-2 transition-all duration-500 ease-in-out group" :class="{'hover:bg-secundario': !light.isLight, 'hover:bg-secundario1': light.isLight}">
                <i class="fa-brands fa-github flex items-center justify-center text-xl group-hover:text-primario"></i>
              </a>
              <a href="https://www.linkedin.com/in/jose-briceno5" target="_blank" class="flex items-center text-white bg-gris5 cursor-pointer justify-center w-12 h-12 rounded-1/2 my-0 mx-2 transition-all duration-500 ease-in-out group" :class="{'hover:bg-secundario': !light.isLight, 'hover:bg-secundario1': light.isLight}">
                <i class="fa-brands fa-linkedin flex items-center justify-center text-xl group-hover:text-primario"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- right-contact -->
      <div class="right-contact ml-0 mt-10 mb-16 lg:mt-0 lg:ml-12">
        <form id="my-form" action="https://formspree.io/f/xwkzvonp" method="POST" class="contact-form">
          <!-- input-control -->
          <div class="input-control m-6 flex flex-col lg:flex-row">
            <input class="rounded-30 py-3 px-4 outline-none border-none bg-gris5 w-full text-white resize-none" type="text" required :placeholder="$t('yourName')" name="name">
            <input class="ml-0 mt-6 lg:mt-0 lg:ml-6 rounded-30 py-3 px-4 outline-none border-none bg-gris5 w-full text-white resize-none" type="email" required :placeholder="$t('yourEmail')" name="email" />
          </div>
          <div class="input-control m-6">
            <input class="rounded-30 py-3 px-4 outline-none border-none bg-gris5 w-full text-white resize-none" type="text" required :placeholder="$t('enterSubject')" name="subject" />
          </div>
          <div class="input-control m-6">
            <textarea class="rounded-30 py-3 px-4 outline-none border-none bg-gris5 w-full text-white resize-none" id="" cols="15" rows="8" :placeholder="$t('messageHere')" name="message" />
          </div>
          <!-- submit-btn -->
          <div class="flex justify-between responsive ">
            <boton></boton>
            <button :class="{'bg-secundario': !light.isLight, 'bg-secundario1': light.isLight}" class="rounded-3xl py-3 px-4 font-semibold" id="my-form-button" @click="presionar">{{$t('button')}}</button>
          </div>
          <p id="my-form-status"></p>
        </form>
      </div>
    </div>
</section>

</template>

<script setup>
  import Titulo from "../components/Titulo.vue";
  import Boton from "../components/Boton.vue";
  import ContactItem from "../components/ContactItem.vue";
  import { useLightStore } from "../store/light";
const light = useLightStore();

const presionar = () => {
  let form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      let status = document.getElementById("my-form-status");
      let data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your feedback!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      })/* .catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      }) */;
    }
    form.addEventListener("submit", handleSubmit)
}
</script>

<style scoped>
.left-contact {
  flex: 2;
}

.right-contact {
  flex: 3;
} 

@media screen and (max-width: 905px) {
  .responsive {
  flex-direction: column-reverse;
}
}

</style>