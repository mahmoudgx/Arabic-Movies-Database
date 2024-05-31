import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Collection>("/search/multi");

export interface Collection {
  id: number;
  name: string;
  poster_path: string;
  original_name: string;
  title: string;
  backdrop_path: string;
}

const useSearchCollections = (query: string) =>
  useInfiniteQuery({
    queryKey: ["SearchCollections", query],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.search(query, {
        params: {
          language: "ar",
          page: pageParam,
          include_adult: false,
        },
      }),
    enabled: !!query,
    staleTime: 24 * 60 * 60 * 1000,
  getNextPageParam: (lastPage, allpages) => {
      return lastPage ? allpages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });

export default useSearchCollections;
