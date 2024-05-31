import React from "react";
import { useLocation } from "react-router-dom";
import useSearchCollections from "../hooks/useSearchCollections";
import CollectionCard from "./CollectionCard";
import "./SearchResults.css";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
  } = useSearchCollections(query);

  if (isError) {
    return <div>حدث خطأ: {error.message}</div>;
  }

  return (
    <div className="search-results">
      <h2>نتائج البحث لـ: {query}</h2>
      <div className="collection-list">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="button-container">
        {hasNextPage && (
          <button className="load-button" onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "... تحميل" : "تحميل المزيد"}
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
