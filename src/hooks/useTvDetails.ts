import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<TvDetails>("/tv");

export interface TvDetails {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  episode_run_time: number;
  runtime: number;
}

const useTvDetails = (id: string) => {
  return useQuery({
    queryKey: ["MovieDetails", id],
    queryFn: () => apiClient.getById(id, { params: { language: "ar" } }),     staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useTvDetails;
