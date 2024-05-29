import { useEffect } from "react";
import "./MoviesCard.css";
import placeholder from "../assets/placeholder.png";
import UseMoviesList from "../hooks/UseMoviesList";
import React from "react";

interface Props {
  sortBy: string;
}

const MoviesList = ({ sortBy }: Props) => {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = UseMoviesList(sortBy);

  useEffect(() => {
    document.title = "أفلام عربية";
  }, []);

  if (isLoading) return <div>تحميل</div>;
  if (error) return <div>حدث خطأ أثناء تحميل الأفلام</div>;

  const getYearFromDateString = (dateString: string | number | Date) => {
    return new Date(dateString).getFullYear();
  };

  return (
    <>
      <div>
        <div className="grid">
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((movie) => (
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
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="button-container">
        {hasNextPage && (
          <button className="load-button" onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "... تحميل" : "تحميل المزيد"}
          </button>
        )}
      </div>
    </>
  );
};

export default MoviesList;
