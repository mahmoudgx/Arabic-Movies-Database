import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { MovieDetails } from "../components/MovieDetails";

const apiClient = new APIClient<MovieDetails>("/tv");

const useTvDetails = (id: string) => {
  return useQuery({
    queryKey: ["MovieDetails", id],
    queryFn: () => apiClient.getById(id, { params: { language: "ar" } }),
  });
};

export default useTvDetails;
