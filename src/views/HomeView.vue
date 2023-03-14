<template>
  <main class="flex flex-col justify-center items-center mt-10">
    <div class="flex justify-center items-center">
      <img
        alt="Pinia logo"
        class="logo mr-5"
        src="@/assets/pinia.svg"
        width="60"
        height="6 0"
      />
      <h1 class="text-rose-200 text-3xl mb-2">This is Home View {{ $t('appTitle') }}</h1>
      <div><h3>Updated text in HomeView component</h3></div>
      <div><h5>Changed... on same file and line</h5></div>
    </div>
    <div class="text-white">
      <strong>Count: </strong> <span class="font-bold">{{ count }}</span>
    </div>
    <div>
      <button @click="increase" class="text-my-rose text-lg mr-5">+</button>
      <button @click="decrease" class="text-my-rose text-lg">-</button>
      <div>Change somethingnnnnnnnnn in HomeView compoennt!!!!! <strong>Hello...</strong> </div>
      <div>Change somethingnnnnnnnnn in HomeView compoennt!!!!!~~~~</div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { useCounter } from "../hooks/counter";

const { count, increase, decrease } = useCounter();
</script>
