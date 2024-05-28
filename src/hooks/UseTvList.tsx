import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Tv>("/discover/tv");

export interface Tv {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const UseTvList = (page: number) =>
  useQuery({
    queryKey: ["Movies", page],
    queryFn: () =>
      apiClient.getAll({
        params: {
          language: "ar",
          page: page,
          with_original_language: "ar",
          include_adult: false,
          sort_by: "vote_count.desc",
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default UseTvList;
