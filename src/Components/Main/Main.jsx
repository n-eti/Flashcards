import React, { useState } from 'react';
import CardContainer from "../CardContainer/CardContainer";
import TheSideBar from '../TheSideBar/TheSideBar';

const Main = ({}) => {
  const [activeCollectionId, setActiveCollectionID] = useState(0);
  return (
 
      <div id="Main">
        <TheSideBar
          activeCollectionId={activeCollectionId}
          setActiveCollectionID={setActiveCollectionID}
        />
        <CardContainer selectedCollectionId={activeCollectionId} />
      </div>

  );
}

export default Main;
