import React from "react";
import "./SortMovies.css";

interface SortTvProps {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

const SortTv: React.FC<SortTvProps> = ({ sortBy, setSortBy }) => {
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
        <option value="popularity.desc"> شعبية ↓</option>
        <option value="popularity.asc"> شعبية ↑</option>
        <option value="first_air_date.desc">تاريخ الإصدار ↓</option>
        <option value="first_air_date.asc">تاريخ الإصدار ↑</option>
        <option value="vote_average.desc">التقييم ↓</option>
        <option value="vote_average.asc">التقييم ↑</option>
        <option value="name.asc">الاسم (أ - ي)</option>
        <option value="name.desc">الاسم (ي - أ)</option>
      </select>
    </div>
  );
};

export default SortTv;
