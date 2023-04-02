import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = (card) => {
  return (
    <div>
      {card.Flutter}
      {card.CSS}
      {card.Pandas}
    </div>
  );
};

export default Card;
