<template>
  <template v-if="rowData.length !== 0">
    <tr id="base-movie-row" v-for="(row, index) in rowData" :key="index">
      <td v-for="(item, index) in field" :key="index" class="text-amber-300">
        {{ row[item as keyof MovieEntity] }}
      </td>
    </tr>
  </template>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MovieEntity } from "@/models/movie-entity";

export default defineComponent({
  name: "BaseMovieTableRow",
  props: {
    rowData: {
      type: Array as PropType<MovieEntity[]>,
      required: true,
    },
    field: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
});
</script>
