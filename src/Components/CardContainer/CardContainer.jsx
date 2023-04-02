import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

const CardContainer = ({}) => {

  async function fetchCardsForCollection(){
    const [cards, setCards] = useState([])
    const response = await axios.get('http://127.0.0.1:8000/api/collections/1/cards/');

  }
  return (
    <section id="cards">
      <div>1/10</div>
      <div>
        <button>PREV</button>
        <Card />
        <button>NEXT</button>
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
