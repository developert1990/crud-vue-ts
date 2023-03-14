<template>
  <main class="flex flex-col justify-center items-center">
    <div
      class="text-3xl font-bold text-my-rose flex justify-center items-end my-10"
    >
      <img
        alt="Pinia logo"
        class="logo mr-5"
        src="@/assets/movie.svg"
        width="60"
        height="6 0"
      />
      This is movie view page
    </div>
    <div>This is view componentn~~~!!!!! first branch work</div>
    <div>
      <BaseMovieFilter />
      <BaseMovieTable />
      <BasePagination />
    </div>
    <div>change something on second branch ~~~~Movieview</div>
  </main>
</template>
<script lang="ts">
import { useMovieStore } from "@/stores/movieStore";
import BaseMovieTable from "@/components/BaseMovieTable.vue";
import { defineComponent } from "vue";
import BasePagination from "@/components/BasePagination.vue";
import BaseMovieFilter from "@/components/BaseMovieFilter.vue";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "MovieView",
  components: {
    BaseMovieTable,
    BasePagination,
    BaseMovieFilter,
  },
  setup() {
    const { offset, currentPage } = storeToRefs(useMovieStore());
    const { fetchMovies, changeOffset, setDefaultPage } = useMovieStore();
    return { offset, currentPage, fetchMovies, changeOffset, setDefaultPage };
  },
  data() {
    return {};
  },
  async created() {
    await this.fetchMovies("desc", 0);
  },
  methods: {},
});
</script>

<style></style>
