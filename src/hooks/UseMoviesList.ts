import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Movies>("/discover/movie");

export interface Movies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const UseMoviesList = (page: number) =>
  useQuery({
    queryKey: ["Movies", page],
    queryFn: () =>
      apiClient.getAll({
        params: {
          language: "ar",
          page: page,
          with_original_language: "ar",
          include_adult: false,
          sort_by: "vote_count.desc"
        },
      }),
      staleTime: 24 * 60 * 60 * 1000,
  });

export default UseMoviesList;
