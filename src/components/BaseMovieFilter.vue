<template>
  <div class="mb-5">
    <input
      type="text"
      placeholder="Search by title.."
      v-model="searchByTitle"
    />
  </div>
</template>
<script lang="ts">
import { useMovieStore } from "@/stores/movieStore";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import * as _ from "lodash";
export default defineComponent({
  name: "BaseMovieFilter",
  setup() {
    const { orderBy, offset, searchByTitle } = storeToRefs(useMovieStore());
    const { searchMovies } = useMovieStore();
    return { orderBy, offset, searchByTitle, searchMovies };
  },
  methods: {
    debounceSearch: _.debounce(async (self) => {
      self.$emit("setdefaultpage");
      await self.searchMovies(self.searchByTitle, self.orderBy, self.offset);
    }, 300),
  },
  watch: {
    searchByTitle() {
      this.debounceSearch(this);
    },
  },
});
</script>
