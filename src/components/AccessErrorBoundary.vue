<template>
    <div>Eccess Boundary..</div>
    <img
        alt="oops logo"
        class="logo mr-5"
        src="@/assets/oops_letter.svg"
        width="700"
        height="700"
      />
      <div v-html="message"></div>
      <div v-if="link">
        <a :href="type === 'role' ? 'mailto:' + link : '/'" _blank>{{ link }}</a>
      </div>
</template>
<script setup lang="ts">
 defineProps({
  type: String, message: String, link: String || null
})
console.log('herer???')
</script>