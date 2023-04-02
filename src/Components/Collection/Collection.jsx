import React, { useEffect, useState } from "react";
import axios from "axios";

const Collection = ({ collection }) => {

  // function handleClick(){
  //   console.log(collection)
  // }
  return(
  // <div onClick={handleClick} className="clickable hoverable">{collection.title}</div>
<div>
  <h2>{collection.title}</h2>
</div>
  );
};

// const Collection = ({ collection }) => {

//   // function handleClick(){
//   //   console.log(collection)
//   // }
//   return(
//   // <div onClick={handleClick} className="clickable hoverable">{collection.title}</div>
// <div>
//   <h2>{collection.title}</h2>
// </div>
//   );};
 
export default Collection;
