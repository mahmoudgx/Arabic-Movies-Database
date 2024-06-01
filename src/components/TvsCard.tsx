import { useEffect } from "react";
import "./MoviesCard.css";
import placeholder from "../assets/placeholder.png";
import UseTvList from "../hooks/UseTvList";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  sortBy: string;
}

const TvsCard = ({ sortBy }: Props) => {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = UseTvList(sortBy);

  useEffect(() => {
    document.title = "مسلسلات عربية";
  }, []);

  if (isLoading) return <div>تحميل</div>;
  if (error) return <div>حدث خطأ أثناء تحميل المسلسلات</div>;

  return (
    <>
      <div>
        <div className="grid">
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((tv) => (
                <div key={tv.id} className="movie-card">
                  <Link to={`/tv/${tv.id}`}>
                    <img
                      src={
                        tv.poster_path
                          ? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
                          : placeholder
                      }
                      alt={tv.original_name}
                    />
                  </Link>
                  <h3>{tv.original_name}</h3>
                  <p style={{ fontWeight: "bold" }}>
                    تاريخ اول عرض: {tv.first_air_date}
                  </p>
                  <p style={{ fontWeight: "bold" }}>
                    التقيم: {tv.vote_average.toFixed(1)}/10
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

export default TvsCard;
