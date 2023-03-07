<script setup>
import axios from "axios";
import {computed} from "vue";
import {useStore} from "vuex";
import { useRouter } from "vue-router";

const store = useStore()
const api = computed(() => store.getters["test/api"])
const callApi = () =>{
  store.dispatch("test/callApi")
}

const router = useRouter();

const goToUserPage = (userId) => {
  router.push(`/users/${userId}`);
}

</script>

<template>
  <button @click="callApi">test</button>
  <div class="flex justify-center w-[1000px] h-[800px] bg-amber-100 ml-[20%] ">
    <div>
      <p class="ml-[100px] text-[30px]">Name</p>
      <p class="cursor-pointer mt-[20px]" v-for="name in api" :key="name.id" @click="goToUserPage(name.id)">
        {{name.name}}
      </p>
    </div>
  </div>
</template>