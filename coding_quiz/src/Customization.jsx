import SideBar from "./components/SideBar";
import Header from "./components/Header";
import "./styles.css";


function Customization(){
    return (
        <>
          <Header heading="Customization Page" />
    
          <div className="app-layout">
            <SideBar />
    
            <div className="customization-container">

            </div>

          </div>
        </>
      );
}

export default Customization;