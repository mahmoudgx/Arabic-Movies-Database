import { useEffect, useState } from "react";
import "./MoviesCard.css";
import placeholder from "../assets/placeholder.png";
import UseMoviesList from "../hooks/UseMoviesList";

interface Props {
  sortBy: string;
}

const MoviesList = ({ sortBy }: Props) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = UseMoviesList(page, sortBy);

  useEffect(() => {
    setPage(1);
  }, [sortBy]);

  useEffect(() => {
    document.title = "أفلام عربية";
  }, []);

  const handleNextPage = () => {
    if (data && page < data.total_pages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (isLoading) return <div>تحميل</div>;
  if (error) return <div>حدث خطأ أثناء تحميل الأفلام</div>;

  const getYearFromDateString = (dateString: string | number | Date) => {
    return new Date(dateString).getFullYear();
  };

  return (
    <div>
      <div className="grid">
        {data?.results.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : placeholder
              }
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            {/* <p>{movie.overview}</p> */}
            <p style={{ fontWeight: "bold" }}>
              تاريخ الاصدار: {getYearFromDateString(movie.release_date)}
            </p>
            <p style={{ fontWeight: "bold" }}>
              التقيم: {movie.vote_average.toFixed(1)}/10
            </p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={handleNextPage}
          disabled={data && page === data.total_pages}
        >
          الصفحة التالية
        </button>
        <span>
          الصفحة {page} من {data?.total_pages}
        </span>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          الصفحة السابقة
        </button>
      </div>
    </div>
  );
};

export default MoviesList;
