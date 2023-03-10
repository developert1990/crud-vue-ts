<template>
  <thead id="base-movie-head">
    <th v-for="(head, index) in heading" :key="index" class="text-regal-blue">{{ head }}</th>
  </thead>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { PropType } from "vue";

export default defineComponent({
  name: "BaseMovieTableHead",
  props: {
    heading: {
      type: [] as PropType<string[]>,
      required: true,
    },
  },
});
</script>
