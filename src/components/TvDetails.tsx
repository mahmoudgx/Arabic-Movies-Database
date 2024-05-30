import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import placeholder from "../assets/placeholder.png";
import useTvDetails from "../hooks/useTvDetails";

const TvDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: movie, isLoading, error } = useTvDetails(id!);

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
        alt={movie?.name}
      />
      <div className="details-content">
        <h1>
          {movie?.name} (
          {movie?.first_air_date
            ? getYearFromDateString(movie.first_air_date)
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
      </div>
    </div>
  );
};

export default TvDetails;
