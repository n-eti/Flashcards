import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ card }) => {
  if (card){

    return (
      <div>
      <h2>{card.word}</h2>
      <p>{card.definition}</p>
  
    </div>
  );
}
};

export default Card;

// /{}/ const Card = (card) => {

// <div>
//   <htest
//   </h2>
//   <p>test</p>
// </div>  //   return (
//     <div>
//       ;{card.Flutter}
//       {card.CSS}
//       {card.Pandas}
//     </div>
//   );
// };

// export default Card;
