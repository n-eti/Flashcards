import React, { useEffect, useState } from "react";
import axios from "axios";
import Collection from "../Collection/Collection";

const CollectionContainer = ({}) => {
    const [collections, setCollections] = useState([]);

    const getAllCollections = async () => {
      let response = await axios.get("http://127.0.0.1:8000/api/collections/");
      console.log(response.data);
      setCollections(response.data);
    };
  
    useEffect(() => {
      getAllCollections();
    }, []);
  
    return (
      <div>
        <center>
          {collections.map((el) => (
            <Collection collection ={el} ></Collection>
          ))}
        </center>
      </div>
    );
}
 
export default CollectionContainer;