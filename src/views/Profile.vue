<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
import ChangeName from "@/components/vueFiles/changeName.vue";
import ChangeEmail from "@/components/vueFiles/changeEmail.vue";
const userInfo = computed(() => store.getters["registration/userInfo"])
const usernameUpdatePopup = computed(() => store.getters["switchButtons/toggleUserUpdatePopup"])
const emailUpdatePopup = computed(() => store.getters["switchButtons/toggleEmailUpdatePopup"])
const toggleUsernameUpdatePopup = () =>{
  store.commit("switchButtons/toggleUpdatePopup")
}

const toggleEmailUpdatePopup = () =>{
  store.commit("switchButtons/toggleEmailUpdatePopup")
}

</script>

<template>
    <div class="ml-[20%] mt-14">
        <div class="mb-[100px]">
            <p class="font-bold text-[40px]">ACCOUNT SETTINGS</p>
            <p class="text-[17px]">Manage your account </p>
        </div>

        <div class="flex ">
          <div class="flex items-center mr-5 ">
            <div class="bg-slate-300 border-2 flex border-black w-[300px]  mr-5 h-[45px]">
                <div>
                    <p class="text-[10px] font-bold ml-2  mt-1">USERNAME</p>
                    <p class="ml-[15%] font-bold">{{ userInfo[0]?.username }}</p>
                </div>
                
            </div>
            <button @click="toggleUsernameUpdatePopup" class=" text-[12px] text-white  bg-blue-700 w-[50px] h-[30px]  ">EDIT</button>
          </div>

          <change-name v-if="usernameUpdatePopup"></change-name>

          <div class="flex items-center mr-5 ">
            <div class="bg-slate-300 border-2 flex border-black w-[300px]  mr-5 h-[45px]">
                <div>
                    <p class="text-[10px] font-bold ml-2  mt-1">EMAIL</p>
                    <p class="ml-[15%] font-bold">{{ userInfo[0]?.email }}</p>
                </div>
                
            </div>
            <button @click="toggleEmailUpdatePopup" class=" text-[12px] text-white  bg-blue-700 w-[50px] h-[30px]  ">EDIT</button>
          </div>
          <change-email v-if="emailUpdatePopup"></change-email>
        </div>
    </div>
</template>