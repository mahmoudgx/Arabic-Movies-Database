import React from "react";
import { Collection } from "../hooks/useSearchCollections";
import "./CollectionCard.css";
import placeholder from "../assets/placeholder.png";

interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  return (
    <div className="collection-card">
      {collection.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${collection.poster_path}`}
          alt={collection.name}
        />
      ) : (
        <img src={placeholder} alt="Placeholder" />
      )}
      <h3>{collection.name || collection.original_name || collection.title}</h3>
    </div>
  );
};

export default CollectionCard;
