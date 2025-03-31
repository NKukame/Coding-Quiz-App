import { Link } from "react-router";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import "./styles.css";
import "./Quiz.css";

function Quiz() {
  return (
    <>
      <Header heading="Quiz Page" />

      <div className="app-layout">
        <SideBar />

        <div className="quiz-container">

        </div>
        
      </div>
    </>
  );
}

export default Quiz;
