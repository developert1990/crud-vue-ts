import axios from "@/axios-common";
import { MovieEntity } from "@/models/movie-entity";
import { truncateString } from "@/utils/truncateString";

export const filterMovies = async (
  orderby: string,
  offset: number
): Promise<MovieEntity[]> => {
  const { data } = await axios.get(
    `/movie?sort=title&orderby=${orderby}&offset=${offset}`
  );

  const formattedData = data.map((movie: MovieEntity) => {
    const formattedString = truncateString(movie.description, 30);
    return {
      ...movie,
      description: formattedString,
    };
  });
  return formattedData;
};

export const searchMovies = async (title: string, orderBy: string, offset: number): Promise<MovieEntity[]> => {
  const { data } = await axios.get(`/movie/search?title=${title}&sort=title&orderby=${orderBy}&offset=${offset}`);
  return data;
};
