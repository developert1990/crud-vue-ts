<template>
  <ul id="pagination">
    <li class="pagination-item">
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
        First
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        Previous
      </button>
    </li>
    <div class="page-status">
      {{ `${currentPage} / ${totalPages}` }}
    </div>
    <li class="pagination-item">
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
        Next
      </button>
    </li>

    <li class="pagination-item">
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
        Last
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { useMovieStore } from "@/stores/movieStore";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasePagination",
  setup() {
    const { offset, currentPage, totalPages } = storeToRefs(useMovieStore());
    const { fetchMovies, changeOffset, setDefaultPage, onPageChange } =
      useMovieStore();
    return {
      offset,
      currentPage,
      totalPages,
      fetchMovies,
      changeOffset,
      setDefaultPage,
      onPageChange,
    };
  },
  computed: {
    isInFirstPage(): boolean {
      return this.currentPage === 1;
    },
    isInLastPage(): boolean {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.onPageChange(1);
    },
    onClickPreviousPage() {
      this.onPageChange(this.currentPage - 1);
    },
    onClickNextPage() {
      this.onPageChange(this.currentPage + 1);
    },
    onClickLastPage() {
      this.onPageChange(this.totalPages);
    },
  },
});
</script>
<style>
#pagination {
  list-style-type: none;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 120px;
  bottom: -120px;
}

.pagination-item {
  display: inline-block;
}

.page-status {
  margin: 0 10px;
  font-weight: bold;
}

.pagination-item button {
  background-color: var(--subColor);
  border: none;
  padding: 10px 15px;
  margin-left: 10px;
  cursor: pointer;
  color: var(--lightColor);
  font-weight: bold;
}

.pagination-item button:hover {
  transition: all 0.3s ease-in-out;
  background-color: var(--subHoverColor);
  color: var(--subColor);
}

.pagination-item button:active {
  background-color: var(--lightColor);
  color: var(--subColor);
}

.pagination-item button:disabled {
  background-color: rgb(90, 58, 14);
  cursor: default;
  color: var(--subColor);
}
</style>
