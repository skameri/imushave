<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
const wrongCode = computed(() => store.getters["registration/wrongCode"])
const store = useStore()
const username = ref()
const email = ref()
const password = ref()
const verificationCode = ref("")
const generateCode = () =>{
  store.dispatch("registration/getRegistrationCode",email.value)
}

const showDashboard = computed(() => store.getters["registration/showDashboard"])
const showRegistrationPopup = computed(() => store.getters["registration/showRegistrationPopup"])

const toggleDashboard = () =>{
  store.commit("registration/showDashboard")
}
const registerUser = () =>{



    store.dispatch("registration/registerUser",{username:username.value,email:email.value,password:password.value,verificationCode:verificationCode.value },)
        username.value = ""
        email.value = ""
        password.value = ""
}

</script>

<template>
        <div v-if="showRegistrationPopup"  class="flex items-center absolute top-20 right-[10%] justify-center w-[20%] h-[40%] bg-gray-100">
            <div>
                <h1 class="text-center text-lg font-bold text-gray-500">Form Register</h1>
                <div class="space-y-4 mt-6">
                    <div class="w-full">
                        <input v-model="username" type="text" placeholder="username" class="px-4 py-2 bg-gray-50" />
                      <p v-if="showRegistrationPopup.username" class="text-red-500 font-bold text-[15px]">Username should consist more than 6 letters</p>
                    </div>
                    <div class="w-full">
                        <input v-model="email" type="text" placeholder="email" class="px-4 py-2 bg-gray-50" />

                    </div>
                  <div class="w-full flex flex-col">
                    <input v-model="verificationCode" type="text" placeholder="verification code" class="px-4 py-2 bg-gray-50" />
                    <button @click="generateCode">get the code</button>
                    <p v-if="wrongCode" class="text-red-500">wrong verification code</p>

                  </div>
                    <div  class="w-full">
                        <input v-model="password" type="password" placeholder="password" class="px-4 py-2 bg-gray-50" />
                    </div>
                </div>
                <button @click="registerUser" class="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">Register</button>
            </div>
        </div>
        <div v-if="showDashboard" class=" w-[18%] bg-white absolute top-20 flex justify-center items-center  right-24 h-48" >
            <router-link @click="toggleDashboard" to="/dashboard/profile"><p class="text-[20px] font-bold cursor-pointer hover:opacity-[0.5]">Go to user dashboard </p></router-link>
        </div>
</template>