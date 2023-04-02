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
      <div>1/10</div>
      <div>
        <button onClick={{handlePrev}}>PREV</button>
        <Card card={activeCard} />
        <button onClick={handleNext}>NEXT</button>
      </div>
    </section>
  );
};

export default CardContainer;

// const CardContainer = ({}) => {
//     const Card = ({ props }) => {
//         const [cards, setCards] = useState([]);

//       const getAllCards = async () => {
//         let response = await axios.get("//127.0.0.1:8000/api/collections/");
//         console.log(response.data);
//         setCards(response.data);
//       };

//       useEffect(() => {
//         getAllCards();
//       }, []);

//       return (
//         <div>
//           {cards.map((el) => {
//             return <Card />;
//           })}
//           ;
//         </div>
//       )};
// }
// export default CardContainer;
