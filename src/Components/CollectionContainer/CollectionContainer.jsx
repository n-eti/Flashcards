import React, { useEffect, useState } from "react";
import axios from "axios";
import Collection from "../Collection/Collection";

const CollectionContainer = ({}) => {
    const [collections, setCollections] = useState([]);

    const getAllCollections = async () => {
      let response = await axios.get("http://127.0.0.1:8000/api/collections/");
      setCollections(response.data);
    };
  
    useEffect(() => {
      getAllCollections();
    }, []);
  
    return (
      <div>
        
          {collections.map((collection) => (
            <Collection collection ={collection} ></Collection>
          ))}
       
      </div>
    );
}
 
export default CollectionContainer;