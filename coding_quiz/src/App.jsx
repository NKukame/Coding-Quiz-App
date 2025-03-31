import { Link } from "react-router";
import "./styles.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import bodyLogo from "../src/assets/icons-1294551_1280.png";
import puzzleLogo from "../src/assets/puzzle.png";
import collabLogo from "../src/assets/collaboration.png";
import puzzleLogoTwo from "../src/assets/puzzle (1).png";

function App() {
  return (
    <>
      <Header heading="Home Page" />

      <div className="app-layout">
        <SideBar />

        <div className="main-container">
          <h1>Welcome to the Coding Quiz Webpage</h1>

          <div className="main-top-content">
            <img
              src={bodyLogo}
              alt="Body Icon"
              className="main-top-content-logo"
            />

            <div className="main-top-content-text">
              <h2>Improve Your Mind</h2>

              <div className="main-top-content-text-para">
                <p>
                  Discover your coding knowledge and improve your skills with
                  our customizable quiz app. Choose your preferred programming
                  language, whether it's JavaScript, CSS, or another favorite,
                  and tailor the quiz to your style with options for time limits
                  and question count. Perfect for personal growth or friendly
                  challenges, this quiz helps you sharpen your expertise. Get
                  instant feedback and see how well you really know your coding
                  basics and beyond!
                </p>
              </div>

              <Link to="/customization">
                <div className="main-top-btn">
                  <a href="#" className="main-top-btn-link">
                    Start Learning
                  </a>
                  <span className="circle">
                    <p class="arrow">&rarr;</p>{" "}
                  </span>
                </div>
              </Link>

            </div>
          </div>

          <div className="main-bottom-content">

            <div className="rectangle-bottom-content">
              <h3>
                Study At Work Or <br /> At Home
              </h3>

              <img src={puzzleLogo} alt="Puzzle Logo" />

              
              
            </div>

            <div className="rectangle-bottom-content">
              <h3>
                Challenge Your <br /> Friends
              </h3>

              <img src={collabLogo} alt="Puzzle Logo" />

              
            </div>

            <div className="rectangle-bottom-content">
              <h3>
                Find A Topic <br /> For You
              </h3>

              <img src={puzzleLogoTwo} alt="Puzzle Logo" />

              
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default App;
