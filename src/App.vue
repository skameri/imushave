<script setup>
import { onMounted } from 'vue';
import registrationPopup from "./components/vueFiles/Registration.vue"
import { useStore } from 'vuex';
import navMenu from "./components/vueFiles/navigation.vue"
const store = useStore()
onMounted(() => {
    store.dispatch("cities/fetchData")
})

//
</script>

<template>
  <div class=" min-h-screen font-Roboto bg-mainBackground bg-no-repeat	bg-cover	 ">
    <navMenu />
    <RouterView />
    <registrationPopup/>
  </div>
</template>

<style ></style>
