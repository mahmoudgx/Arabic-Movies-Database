import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import "./MovieDetails.css";
import placeholder from "../assets/placeholder.png";

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  runtime: number;
}

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: movie, isLoading, error } = useMovieDetails(id!);

  if (isLoading) return <div>تحميل...</div>;
  if (error) return <div>حدث خطأ أثناء تحميل تفاصيل الفيلم</div>;

  return (
    <div className="movie-details">
      <img
        src={
          movie?.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : placeholder
        }
        alt={movie?.title}
      />
      <div className="details-content">
        <h1>{movie?.title}</h1>
        <p>{movie?.overview}</p>

        <p>التقيم: {movie?.vote_average.toFixed(1)}/10</p>
        <p>النوع: {movie?.genres.map((genre) => genre.name).join(", ")}</p>
        <p>مدة العرض: {movie?.runtime} دقيقة</p>
      </div>
    </div>
  );
};

export default MovieDetails;
