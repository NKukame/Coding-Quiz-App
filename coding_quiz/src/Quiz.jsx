import { Link } from "react-router";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import TimeLoader from "./components/TimeLoader";
import "./styles.css";
import "./Quiz.css";

function Quiz() {
  return (
    <>
      <Header heading="Quiz Page" />

      <div className="app-layout">
        <SideBar />

        <div className="quiz-container">

          <div className="quiz-header">
            <div className="progress-bar">
              <div className="progress-fill"></div>
              <p>25%</p>
            </div>
          </div>

          <div className="quiz-body">

            <div className="quiz-question-container">
              <h3>Question 1 Out 10</h3>
              <p>What is Java?</p>
            </div>

            <div className="quiz-option-container">
              <h3>Options</h3>

              <div className="quiz-radio-option">
                <div class="custom-radio-group">
                  <label class="custom-radio-container">
                    <input type="radio" name="custom-radio" value="option1" />
                    <span class="custom-radio-checkmark"></span>
                    Option 1
                  </label>
                  <label class="custom-radio-container">
                    <input type="radio" name="custom-radio" value="option2" />
                    <span class="custom-radio-checkmark"></span>
                    Option 2
                  </label>
                  <label class="custom-radio-container">
                    <input type="radio" name="custom-radio" value="option3" />
                    <span class="custom-radio-checkmark"></span>
                    Option 3
                  </label>
                  <label class="custom-radio-container">
                    <input type="radio" name="custom-radio" value="option3" />
                    <span class="custom-radio-checkmark"></span>
                    Option 4
                  </label>
                </div>
              </div>

              <div className="question-explaintion-container">
                <h4>Explaination</h4>
                <p>.............</p>
              </div>
              
            </div>

          </div>

          <div className="quiz-footer">
            <button className="animated-button button-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="arr-1 btn1-arr1"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>
                    <span className="text">Prev</span>
                    <span className="circle" />
                    <svg
                      viewBox="0 0 24 24"
                      className="arr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>
            </button>

            <div className="timer-container">
              
                <TimeLoader/>
              
              <div className="timer-text">
                <p>01.30</p>
              </div>

            </div>

            <button className="animated-button">
                    <svg
                      viewBox="0 0 24 24"
                      className="arr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>
                    <span className="text">Next</span>
                    <span className="circle" />
                    <svg
                      viewBox="0 0 24 24"
                      className="arr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Quiz;
