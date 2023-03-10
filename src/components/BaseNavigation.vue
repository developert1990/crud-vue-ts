<template>
  <div
    class="text-white shadow-navShadow h-12 flex justify-center items-center"
  >
    <div class="w-32 text-piniaMain flex justify-evenly">
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
    </div>
  </div>
</template>
<script setup lang="ts"></script>
