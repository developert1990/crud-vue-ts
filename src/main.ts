import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import MovieView from "@/views/MovieView.vue";
import BaseMovieTableVue from "@/components/BaseMovieTable.vue";
import BaseMovieTableHead from "@/components/BaseMovieTableHead.vue";
import BaseMovieTableRow from "@/components/BaseMovieTableRow.vue";
import BasePagination from "@/components/BasePagination.vue";
import BaseMovieFilter from "@/components/BaseMovieFilter.vue";
import "./index.css";

import BaseNavigation from "./components/BaseNavigation.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(router);

app
  .component("base-navigation", BaseNavigation)
  .component("movie-view", MovieView)
  .component("base-movie-table", BaseMovieTableVue)
  .component("base-movie-table-head", BaseMovieTableHead)
  .component("base-movie-table-row", BaseMovieTableRow)
  .component("pagination", BasePagination)
  .component("base-movie-filter", BaseMovieFilter)
  .mount("#app");
