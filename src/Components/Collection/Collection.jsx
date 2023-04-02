import React, { useEffect, useState } from "react";
import axios from "axios";

const Collection = (collection) => {

  function handleClick(){
    console.log(collection)
  }
  return <div onClick={handleClick} className="clickable hoverable">{collection.title}</div>
};

export default Collection;
