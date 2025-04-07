import { Link } from "react-router";
import { useState } from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import TimeLoader from "./components/TimeLoader";
import quizData from "./quiz.json"
import "./styles.css";
import "./Quiz.css";

function Quiz() {
  const questions = quizData["CSS"];
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  if (!quizData || quizData.length === 0) {
    return <p>Loading questions...</p>;
  }
  const currentQuestion = questions[currentQuestionIndex];
  
  if (!currentQuestion) {
    return <p>No question found.</p>;
  }

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
      setIsAnswered(false);
    } else {
      // Quiz is finished!
      setShowResult(true);
    }

    
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption("");
      setIsAnswered(false);
    }
  };

  const isCorrect = selectedOption === currentQuestion.correctAnswer;
  

  const progress = Math.round(((currentQuestionIndex + 1) / quizData.length) * 100);
  return (
    <>
      <Header heading="Quiz Page" />

      <div className="app-layout">
        <SideBar />

        <div className="quiz-container">

          <div className="quiz-header">
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`, }}></div>
              <p> {((currentQuestionIndex + 1) / questions.length) * 100}%</p>
            </div>
          </div>

          <div className="quiz-body">

            <div className="quiz-question-container">
              <h3>Question {currentQuestionIndex + 1} of {questions.length}</h3>
              <p>{currentQuestion?.question || "Loading question..."}</p>
            </div>

            <div className="quiz-option-container">
              <h3>Options</h3>

              <div className="quiz-radio-option">
                <div className="custom-radio-group">
                  {currentQuestion.options.map((option, index) => (
                    <label key={index} className="custom-radio-container">
                      <input
                        type="radio"
                        name={`question-${currentQuestionIndex}`}
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleOptionChange(option)}
                      />
                      <span className="custom-radio-checkmark"></span>
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {isAnswered && (
                <div className="question-explanation-container">
                  <h4>
                    {isCorrect ? "✅ Correct!" : "❌ Incorrect"}
                  </h4>
                  <p>{currentQuestion.explanation}</p>
                </div>
              )}
              
            </div>

          </div>

          <div className="quiz-footer">
            <button className="animated-button button-1" onClick={handlePrev} disabled={currentQuestionIndex === 0}>
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

            <button className="animated-button" onClick={handleNext}>
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

      {showResult && (
          <div className="modal-backdrop">
            <div className="modal">
              <h2>Quiz Completed 🎉</h2>
              <p>
                You Scored <strong>{score}</strong> Out of{" "}
                <strong>{questions.length}</strong>
              </p>
              <button onClick={() => window.location.reload()} className="restart-quiz">Restart Quiz</button>
            </div>
          </div>
      )}

    </>
  );
}

export default Quiz;
