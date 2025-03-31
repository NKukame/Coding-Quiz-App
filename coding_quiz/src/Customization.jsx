import { Link } from "react-router";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import "./styles.css";
import "./Customization.css";

function Customization() {
  return (
    <>
      <Header heading="Customization Page" />

      <div className="app-layout">
        <SideBar />

        <div className="customization-container">
          <div className="customization-content">
            <h1>Customize Your Quiz</h1>

            <h2>
              Pick a Language or Technology, Set Options, and Start Your Quiz!
            </h2>

            <div className="customization-options">
              <div className="customization-option-body">
                <div className="customization-option-labels">
                  <label htmlFor="">Fields</label>
                  <h3>Technology (Or Language)</h3>
                  <h3>Question Type</h3>
                  <h3>Number of Questions</h3>
                  <h3>Time Limit</h3>
                </div>

                <div className="customization-option-options">
                  <label htmlFor="">Options</label>

                  {/* Language Option */}
                  <select name="language" id="language-options">
                    <option value="default">Choose A Technology</option>
                    <option value="javaScript">JavaScript</option>
                    <option value="css">CSS</option>
                    <option value="hTML">HTML</option>
                    <option value="npm">NPM</option>
                    <option value="tailwind-css">TailWind CSS</option>
                    <option value="react">React</option>
                  </select>

                  {/* Question Type Option */}
                  <select name="question-type" id="question-options">
                    <option value="default">Choose Your Question Type</option>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="true-or-false">True or False</option>
                    <option value="code-snippets">Code Snippets</option>
                  </select>

                  {/* Number of Questions Option */}
                  <div className="radio-input">
                    <label>
                      <input
                        defaultValue="value-1"
                        name="value-radio"
                        id="value-1"
                        type="radio"
                        defaultChecked
                      />
                      <span>1</span>
                    </label>
                    <label>
                      <input
                        defaultValue="value-2"
                        name="value-radio"
                        id="value-2"
                        type="radio"
                      />
                      <span>3</span>
                    </label>
                    <label>
                      <input
                        defaultValue="value-3"
                        name="value-radio"
                        id="value-3"
                        type="radio"
                      />
                      <span>5</span>
                    </label>
                    <label>
                      <input
                        defaultValue="value-3"
                        name="value-radio"
                        id="value-3"
                        type="radio"
                      />
                      <span>10</span>
                    </label>
                    <span className="selection" />
                  </div>

                  {/* Time Limit Option */}
                  <select name="time-limit" id="time-options">
                    <option value="default">Choose Your Time Limit</option>
                    <option value="1">1 Minute</option>
                    <option value="3">3 Minutes</option>
                    <option value="5">5 Minutes</option>
                    <option value="10">10 Minutes</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="customization-button">
              <Link to="/quiz">
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">Start Quiz</span>
                  <span className="circle" />
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customization;
