<template>
  <div
    class="text-white shadow-navShadow h-12 flex justify-center items-center"
  >
    <div class="w-[500px] text-piniaMain flex justify-evenly">
      <router-link
        to="/"
        class="hover:text-piniaSub transition duration-500 ease-in-out"
        >Tasks</router-link
      >
      <router-link
        to="/movie"
        class="hover:text-piniaSub transition duration-500 ease-in-out"
        >Movies</router-link
      >
      <router-link
        to="/boundary"
        class="hover:text-piniaSub transition duration-500 ease-in-out"
        >Boundary</router-link
      >
      <button class="text-blue-500" @click="changeAuth">Auth: </button>
      <div class="text-red-300">{{ isAuth ? 'Authenticated!' : "No Authenticated"}}</div>


      <button class="text-blue-500" @click="changeRole">Role: </button>
      <div class="text-red-300">{{ hasRole ? 'Shipper!' : "No Role.."}}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {  useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';

const { isAuth, hasRole } = storeToRefs(useAuthStore());
const { changeAuth, changeRole } = useAuthStore();
</script>
