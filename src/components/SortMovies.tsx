import React from "react";
import "./SortMovies.css";

interface SortMoviesProps {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

const SortMovies: React.FC<SortMoviesProps> = ({ sortBy, setSortBy }) => {
  return (
    <div className="sort-movies">
      <label htmlFor="sort" className="sort-label">
        ترتيب حسب:
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="sort-select"
      >
        <option value="popularity.desc">الأكثر شعبية</option>
        <option value="release_date.desc">تاريخ الإصدار</option>
        <option value="vote_average.desc">التقييم الأعلى</option>
        <option value="original_title.asc">الاسم</option>
      </select>
    </div>
  );
};

export default SortMovies;
