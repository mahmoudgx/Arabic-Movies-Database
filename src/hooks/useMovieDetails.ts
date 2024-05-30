import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { MovieDetails } from "../components/MovieDetails";

const apiClient = new APIClient<MovieDetails>("/movie");

const useMovieDetails = (id: string) => {
  return useQuery({
    queryKey: ["MovieDetails", id],
    queryFn: () => apiClient.getById(id, { params: { language: "ar" } }),
  });
};

export default useMovieDetails;
