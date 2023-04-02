import React from 'react';
import CardContainer from '../CardContainer/CardContainer'
import SideBar from '../SideBar/SideBar';
const Main = ({}) => {
    const [activeCollectionId, setActiveCollectionID] = useState(0);
    return ( 
        <section id = 'Main'>
        <div>
            <SideBar/>
            <CardContainer activeCollectionId={activeCollectionId} setActiveCollectionID={setActiveCollectionID} />
        </div>

        </section>
     );
}
 
export default Main;


// import CardContainer from "../CardContainer/CardContainer";
// import CardViewer from "../CardViewer/CardViewer";
// import CollectionContainer from "../CollectionContainer/CollectionContainer";
// import SideBar from "../Sidebar/Sidebar";
// import Card from "../Card/Card";

// const Main = ({}) => {
//     return ( <div>
//         <CollectionContainer/>       
//         <CardContainer/>
//     </div> );
// }
 
// export default Main;