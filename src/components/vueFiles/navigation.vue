<script setup>
import BaseModal from "./BaseModal.vue"
import { useStore } from "vuex";
import {computed} from "vue"
const showInfoMenu = computed(() => store.getters["switchButtons/showSiteInfo"])
const isRegistered = computed(() => store.getters["registration/isRegistered"])
const userInfo = computed(() => store.getters["registration/userInfo"])
const toggleModal = () =>{
  store.commit("switchButtons/toggleInfoModal")
}
const toggleDashboard = () =>{
  store.commit("registration/showDashboard")
}
const store = useStore()
const showRegistrationPopup = () =>{
  store.commit("registration/showRegistrationPopup")
  
}
</script>

<template>
  <header class=" shadow-lg">
    <nav class="container flex flex-col sm:flex-row item-center gap-4 text-white py-6">

        <div class="flex items-center gap-3">
        <i class="fa-sharp fa-solid fa-snowflake text-2xl"></i>
        <router-link to="/"><p class="text-2xl font-bold ">Amindi</p></router-link>
      </div>
      <div class="flex gap-3 flex-1 justify-end">
        <i @click="toggleModal" class="fa-solid fa-circle-info text-xl hover:text-weather-secondary cursor-pointer duration-300"> </i>
        <i class="fa-solid fa-plus text-xl hover:text-weather-secondary cursor-pointer duration-300"></i>
        <p v-if="isRegistered==false" @click="showRegistrationPopup" class=" font-bold text-xl hover:text-weather-secondary cursor-pointer duration-300" >SIGN UP</p>
        <div @click="toggleDashboard" v-if="isRegistered" class="flex bg-weather-secondary cursor-pointer  hover:bg-slate-700 items-center justify-center w-[40px] rounded-[50%] h-[40px] mt-[-5px]">{{ userInfo[0]?.username[0] }}</div>
      </div>

      <BaseModal v-if="showInfoMenu">
      <h1 class="text-black">ამინდის პროგნოზის საიტი</h1>
        <h1 class="text-black">ამინდის პროგნოზის საიტი</h1>
        <h1 class="text-black">ამინდის პროგნოზის საიტი</h1>
        <h1 class="text-black">ამინდის პროგნოზის საიტი</h1>
        <h1 class="text-black">ამინდის პროგნოზის საიტი</h1>
        <h1 class="text-black">ამინდის პროგნოზის საიტი</h1>
        <h1 class="text-black">ამინდის პროგნოზის საიტი</h1>

      </BaseModal>

    </nav>
  </header>

</template>