import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../Card/Card';

const CardContainer = ({}) => {
    const Card = ({ props }) => {
        const [cards, setCards] = useState([]);
      
      
      const getAllCards = async () => {
        let response = await axios.get("//127.0.0.1:8000/api/collections/");
        console.log(response.data);
        setCards(response.data);
      };
      
      useEffect(() => {
        getAllCards();
      }, []);
      
      return (
        <div>
          {cards.map((el) => {
            return <Card />;
          })}
          ;
        </div>
      )};
}
export default CardContainer;