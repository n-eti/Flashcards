import React, { useState, useEffect } from 'react';
import axios from "axios";
import Collection from '../Collection/Collection';
import '../Collection/Collection.css';

const TheSideBar = ({activeCollectionId, setActiveCollectionID}) => {
    const [collectionsDescription, setCollectionsDescription] = useState([])
    

    async function fetchAllCollectionsDescriptions(){
        const response = await axios.get('http://127.0.0.1:8000/api/collections/')
        setCollectionsDescription(response.data)
    }

    useEffect(() => {
        fetchAllCollectionsDescriptions()
    }, []);

    const CollectionList = collectionsDescription.map((collection) => (
    <Collection 
    collection={collection} 
    activeCollectionId={activeCollectionId} 
    setActiveCollectionID={setActiveCollectionID}
    />
    ));

    return ( 
        <div>
            <h4>
                {CollectionList}
            </h4>
        </div>
     );
};

export default TheSideBar;
