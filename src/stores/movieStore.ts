import * as MovieService from "@/services/MovieService";
import { defineStore } from "pinia";
import { MovieEntity } from "@/models/movie-entity";

interface MovieState {
  movies: MovieEntity[] | [];
  offset: number;
  currentPage: number;
  totalPages: number;
  searchByTitle: string;
  orderBy: string;
}

export const useMovieStore = defineStore({
  id: "movie",
  state: (): MovieState => ({
    movies: [],
    offset: 0,
    currentPage: 1,
    totalPages: 60,
    searchByTitle: "",
    orderBy: "asc",
  }),
  getters: {
    getMovieList: (state) => {
      return state.movies;
    },
    getOffset: (state) => {
      return state.offset;
    },
    getCurrentPage: (state) => {
      return state.currentPage;
    },
    getTotalPages: (state) => {
      return state.totalPages;
    },
    getOrderBy: (state) => {
      return state.orderBy;
    }
  },
  actions: {
    async fetchMovies(orderby: string, offset: number) {
      const movieData = await MovieService.filterMovies(orderby, offset);
      this.movies = movieData;
    },
    changeOffset(page: number) {
      this.offset = (page - 1) * 5;
    },
    setDefaultPage() {
      this.currentPage = 1;
    },
    async onPageChange(page: number) {
      this.currentPage = page;
      this.changeOffset(this.currentPage);
      if(this.searchByTitle === ''){
        await this.fetchMovies("desc", this.offset);
      }else{
        await this.searchMovies(this.searchByTitle, this.orderBy, this.offset);
      }
    },

    async searchMovies(title: string, orderBy: string, offset: number) {
      console.log('herer????? Search movies')
      const movieData = await MovieService.searchMovies(title, orderBy, offset);
      this.setDefaultPage();
      this.movies = movieData;
    },
  },
});
