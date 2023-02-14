import CardContainer from "../CardContainer/CardContainer";
import CardViewer from "../CardViewer/CardViewer";
import CollectionContainer from "../CollectionContainer/CollectionContainer";
import SideBar from "../Sidebar/Sidebar";
import Card from "../Card/Card";

const Main = ({}) => {
    return ( <div>
        <SideBar/>
        <CardContainer/>
        <CollectionContainer/>       

        <CardViewer/>
        <Card/>

    </div> );
}
 
export default Main;