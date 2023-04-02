import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

const CardContainer = ({selectedCollectionId}) => {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  
  const activeCard = cards[index];

  async function fetchCardsForCollection(){
    const response = await axios.get(`http://127.0.0.1:8000/api/collections/${selectedCollectionId}/cards/`);
    setCards(response.data);
  }

  useEffect(() => {
    fetchCardsForCollection();
  }, [selectedCollectionId]
  ); 

  function handlePrev(){

    if (index > 0){
      setIndex(index - 1)
    }
  }

  function handleNext(){

    if (index <cards.length - 1){
      setIndex( index + 1)
    }

  }

  return (
    <section id="cards">
      <div>{index+1}/{cards.length}</div>
      <div>
        <button onClick={{handlePrev}}>PREV</button>
        <Card card={activeCard} />
        <button onClick={handleNext}>NEXT</button>
      </div>
    </section>
  );
};

export default CardContainer;