import { useState } from "react";
import { useNavigate } from "react-router";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import "./styles.css";
import "./Customization.css";

function Customization() {
  const navigate = useNavigate();

  const [language, setLanguage] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [numQuestions, setNumQuestions] = useState(1);
  const [timeLimit, setTimeLimit] = useState(1);

  const handleStartQuiz = () => {
    if (!language || !questionType || !numQuestions || !timeLimit) {
      alert("Please fill out all options.");
      return;
    }

    navigate("/quiz", {
      state: {
        language,
        questionType,
        numQuestions,
        timeLimit
      }
    });
  };

  return (
    <>
      <Header heading="Customization Page" />
      <div className="app-layout">
        <SideBar />
        <div className="customization-container">
          <div className="customization-content">
            <h1>Customize Your Quiz</h1>
            <h2>Pick a Language or Technology, Set Options, and Start Your Quiz!</h2>

            <div className="customization-options">
              <div className="customization-option-body">
                <div className="customization-option-labels">
                  <label>Fields</label>
                  <h3>Technology</h3>
                  <h3>Question Type</h3>
                  <h3>Number of Questions</h3>
                  <h3>Time Limit</h3>
                </div>

                <div className="customization-option-options">
                  <label>Options</label>

                  {/* Language */}
                  <select onChange={(e) => setLanguage(e.target.value)}>
                    <option value="">Choose A Technology</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="CSS">CSS</option>
                    <option value="HTML">HTML</option>
                    <option value="NPM">NPM</option>
                    <option value="Tailwind-CSS">Tailwind CSS</option>
                    <option value="React">React</option>
                    
                  </select>

                  {/* Question Type */}
                  <select onChange={(e) => setQuestionType(e.target.value)}>
                    <option value="">Choose Question Type</option>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="true-or-false">True or False</option>
                  </select>

                  {/* Number of Questions */}
                  <div className="radio-input">
                    {[1, 3, 5, 10].map((num) => (
                      <label key={num}>
                        <input
                          type="radio"
                          name="numQuestions"
                          value={num}
                          checked={numQuestions === num}
                          onChange={() => setNumQuestions(num)}
                        />
                        <span>{num}</span>
                      </label>
                    ))}
                    <span className="selection" />
                  </div>

                  {/* Time Limit */}
                  <select onChange={(e) => setTimeLimit(Number(e.target.value))}>
                    <option value="">Choose Time Limit</option>
                    <option value="1">1 Minute</option>
                    <option value="3">3 Minutes</option>
                    <option value="5">5 Minutes</option>
                    <option value="10">10 Minutes</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="customization-button">
              
              <button className="animated-button" onClick={handleStartQuiz}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customization;
