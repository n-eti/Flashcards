import CardContainer from "../CardContainer/CardContainer";
import CardViewer from "../CardViewer/CardViewer";
import Collection from "../Collection/Collection";
import CollectionContainer from "../CollectionContainer/CollectionContainer";
import SideBar from "../Sidebar/Sidebar";
import Card from "../Card/Card";

const Main = ({}) => {
    return ( <div>
        <SideBar/>
        <CardContainer/>
        <CollectionContainer/>       
        <Collection/>
        <CardViewer/>
        <Card/>

    </div> );
}
 
export default Main;