<script setup>
import BaseModal from "@/components/vueFiles/BaseModal.vue";

import {ref} from "vue";
import {useStore} from "vuex";
const store = useStore()
const newEmail = ref("")
const toggleUpdatePopup = () =>{
  store.commit("switchButtons/toggleEmailUpdatePopup")
}

const updateEmail = () =>{
  store.dispatch("registration/updateEmail",newEmail.value)
  store.commit("switchButtons/toggleEmailUpdatePopup")
}


</script>
<template >
  <div class="fixed w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex items-center justify-center px-8">
    <div class="flex items-center relative justify-center bg-white w-[20%] h-[40%] ">

      <div >
        <p @click="toggleUpdatePopup" class="absolute font-bold cursor-pointer top-3 right-6">X</p>
        <input v-model="newEmail" class="border-2 block mb-9 w-[250px] h-[40px] border-x-0 border-t-0  focus:outline-0" placeholder="Enter new email" >
        <button  @click="updateEmail" class="bg-blue-700 w-[120px] text-white h-[30px]">Save changes</button>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>