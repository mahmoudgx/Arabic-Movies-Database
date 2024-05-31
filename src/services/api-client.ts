import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  results: T[];
  total_pages: number;
  total_results: number;
  page: number;
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODE0ODdlZTY1M2YyYTIyNjNhNTUxNDc4OTY3ZWI1MiIsInN1YiI6IjY2MGNhMTI1ZDQwMGYzMDEzMTA1NDJiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UYguXPOhdmKMdCYQCsdIomy6FtQCrrW7OPQ1fPPaISY'
  }
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
  };

  getById = (id: string, config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`, config)
      .then(res => res.data);
  };

  search = (query: string, config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(`/search/multi`, {
        ...config,
        params: { query, ...config?.params },
      })
      .then(res => res.data);
  };
}

export default APIClient;