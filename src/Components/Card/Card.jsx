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