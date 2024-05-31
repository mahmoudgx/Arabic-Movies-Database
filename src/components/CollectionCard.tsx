import React from "react";
import { Collection } from "../hooks/useSearchCollections";
import placeholder from "../assets/placeholder.png";

interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  const imagePath = collection.poster_path
    ? `https://image.tmdb.org/t/p/w500${collection.poster_path}`
    : collection.profile_path
    ? `https://image.tmdb.org/t/p/w500${collection.profile_path}`
    : placeholder;

  return (
    <div className="collection-card">
      <img src={imagePath} alt={collection.name || "Placeholder"} />
      <h3>{collection.name || collection.original_name || collection.title}</h3>
    </div>
  );
};

export default CollectionCard;
