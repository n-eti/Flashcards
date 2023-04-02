import React, { useEffect, useState } from "react";
import axios from "axios";
import './Collection.css';
const Collection = ({
  collection,
  activeCollectionId,
  setActiveCollectionId,
}) => {
  function handleClick() {
    setActiveCollectionId(collection.id);
  }

  let collectionClass = "";

  if (collection.id === activeCollectionId) collectionClass = 'active';

  return (
    <div class = 'clickable' className= {collectionClass} onClick={handleClick}>
      <h3>{collection.title}</h3>
    </div>
  );
};

export default Collection;
