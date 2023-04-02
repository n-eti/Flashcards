import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Collection.css";

const Collection = ({
  collection,
  activeCollectionId,
  setActiveCollectionId,
}) => {
  function handleClick() {
    setActiveCollectionId(collection.id);
  }

  let cardClass = '';

  if (collection.id === activeCollectionId) cardClass = 'active';

  return (
    <div class= 'active clickable' className={cardClass} onClick={handleClick}>
      <h3>{collection.title}</h3>
    </div>
  );
};

export default Collection;
