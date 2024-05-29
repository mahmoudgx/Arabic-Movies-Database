import { useState } from "react";
import "./MoviesCard.css";
import placeholder from "../assets/placeholder.png";
import UseTvList from "../hooks/UseTvList";

interface Props {
  sortBy: string;
}

const TvsCard = ({ sortBy }: Props) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = UseTvList(page, sortBy);

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
  if (error) return <div>حدث خطأ أثناء تحميل المسلسلات</div>;

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
              alt={movie.original_name}
            />
            <h3>{movie.original_name}</h3>
            {/* <p>{movie.overview}</p> */}

            <p style={{ fontWeight: "bold" }}>
              تاريخ اول عرض: {movie.first_air_date}
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

export default TvsCard;
