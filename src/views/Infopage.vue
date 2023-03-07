<script setup>
import axios from "axios";
import {computed} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
const route = useRoute()
const store = useStore()
const api = computed(() => store.getters["test/api"])
const id = route.params.id
const test = () =>{
  console.log(id)
}

</script>

<template>
  <button @click="callApi">test</button>
  <div class="flex justify-center w-[1000px] h-[800px] bg-amber-100 ml-[20%] ">
    <p class="mr-8">EMAIL: {{api[id].email}}</p>
    <p>last seen: {{api[id].seen}}</p>



    <div>


    </div>
  </div>
</template>