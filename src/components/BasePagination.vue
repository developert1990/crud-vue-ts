<template>
  <div id="pagination">
    <ul>
      <li class="pagination-item">
        <button class="btn" @click="onClickFirstPage" :disabled="isInFirstPage">
          First
        </button>
      </li>

      <li class="pagination-item">
        <button
          class="btn"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
        >
          Previous
        </button>
      </li>
      <div class="text-white">
        {{ `${currentPage} / ${totalPages}` }}
      </div>
      <li class="pagination-item">
        <button class="btn" @click="onClickNextPage" :disabled="isInLastPage">
          Next
        </button>
      </li>

      <li class="pagination-item">
        <button class="btn" @click="onClickLastPage" :disabled="isInLastPage">
          Last
        </button>
      </li>
    </ul>
  </div>
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
  @apply w-96 my-0 mx-auto mt-5;
}

#pagination ul {
  @apply flex justify-evenly;
}

.btn {
  @apply py-1 px-3 rounded text-white cursor-pointer hover:text-piniaSub hover:bg-white bg-piniaSub transition-all duration-300 ease-in-out;
}

.btn:disabled {
  @apply bg-transparent;
}

/* #pagination {
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
} */
</style>
