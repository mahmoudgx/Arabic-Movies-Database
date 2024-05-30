import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import "./MovieDetails.css";
import placeholder from "../assets/placeholder.png";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: movie, isLoading, error } = useMovieDetails(id!);

  if (isLoading) return <div>تحميل...</div>;
  if (error) return <div>حدث خطأ أثناء تحميل تفاصيل الفيلم</div>;

  const getYearFromDateString = (dateString: string | number | Date) => {
    return new Date(dateString).getFullYear();
  };

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
        <h1>
          {movie?.title} (
          {movie?.release_date
            ? getYearFromDateString(movie.release_date)
            : "N/A"}
          )
        </h1>
        <p>
          <span>عن :</span> {movie?.overview}
        </p>

        <p>
          <span>التقيم :</span> {movie?.vote_average.toFixed(1)}/10
        </p>
        <p>
          <span>التصنيف :</span>{" "}
          {movie?.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <span>مدة العرض :</span> {movie?.runtime} دقيقة
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
