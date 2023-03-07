<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()

</script>

<template>
    <div class="flex bg-white h-screen overflow-hidden">
        <div class="w-[13%] h-screen overflow-hidden pl-9 pt-9 bg-slate-600">
            <RouterLink to="/dashboard/profile"><p class="font-bold mb-20 text-white text-[30px] cursor-pointer hover:text-black ">Profile</p></RouterLink>
            <router-link to="/dashboard/security"><p class="font-bold mb-20 text-white text-[30px] cursor-pointer hover:text-black ">Security</p></router-link>
        </div>
        <div>
            <RouterView/>
        </div>




    </div>
</template>
