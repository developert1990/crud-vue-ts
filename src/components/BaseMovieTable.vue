<template>
  <div>
    <table>
      <base-movie-table-head :heading="heading" />
      <base-movie-table-row :rowData="movies" :field="field" />
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BaseMovieTableHead from "@/components/BaseMovieTableHead.vue";
import BaseMovieTableRow from "@/components/BaseMovieTableRow.vue";
import { storeToRefs } from "pinia";
import { useMovieStore } from "@/stores/movieStore";

export default defineComponent({
  name: "BaseMovieTable",
  components: {
    BaseMovieTableHead,
    BaseMovieTableRow,
  },
  setup() {
    console.log("movie Row!!!");
    const { movies } = storeToRefs(useMovieStore());
    return { movies };
  },
  data() {
    return {
      heading: ["Title", "Year", "Votes", "Description"],
      field: ["title", "year", "votes", "description"],
    };
  },
});
</script>
