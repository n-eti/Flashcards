import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = (props) => {
  return <div>{props.card.title}</div>
};

  
export default Card;
