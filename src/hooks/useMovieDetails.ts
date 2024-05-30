import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";


const apiClient = new APIClient<MovieDetails>("/movie");


export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  runtime: number;
  Director: string;
}


const useMovieDetails = (id: string) => {
  return useQuery({
    queryKey: ["MovieDetails", id],
    queryFn: () => apiClient.getById(id, { params: { language: "ar" } }),
  });
};

export default useMovieDetails;
