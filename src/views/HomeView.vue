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
      <div>Updated text in HomeView component</div>
    </div>
    <div class="text-white">
      <strong>Count: </strong> <span class="font-bold">{{ count }}</span>
    </div>
    <div>
      <button @click="increase" class="text-my-rose text-lg mr-5">+</button>
      <button @click="decrease" class="text-my-rose text-lg">-</button>
    </div>
  </main>
</template>
<script setup lang="ts">
import { useCounter } from "../hooks/counter";

const { count, increase, decrease } = useCounter();
</script>
