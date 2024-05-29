import { useInfiniteQuery } from "@tanstack/react-query";
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

const UseMoviesList = (sortBy: string) =>
  useInfiniteQuery({
    queryKey: ["Movies", sortBy],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          language: "ar",
          page: pageParam,
          with_original_language: "ar",
          include_adult: false,
          sort_by: sortBy,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allpages) => {
      return lastPage ? allpages.length +1 :undefined
    },
    initialPageParam: 1,
  });

export default UseMoviesList;
