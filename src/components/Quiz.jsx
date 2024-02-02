import React, { useState, useContext } from "react";
import { gameStateContext } from "../helpers/Contexts";
import questions from "../helpers/Questions";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { score, setScore, gameState, setGameState } =
    useContext(gameStateContext);

  const handleNewOption = (evt) => {
    setOptionChosen(evt.target.value);
  };

  const handleNextQuestion = () => {
    if (questions[currentQuestion].answer === optionChosen) {
      alert("Your answer is correct");

      setScore(score + 1);
    } else {
      alert("Wrong answer, try agin");
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishedQuiz = () => {
    if (questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("end");
  };
  return (
    <div className="quiz_container">
      <h1 className="question">{questions[currentQuestion].prompt}</h1>
      <div className="answers">
        <button value={"optionA"} onClick={(evt) => handleNewOption(evt)}>
          {questions[currentQuestion].optionA}
        </button>
        <button value={"optionB"} onClick={(evt) => handleNewOption(evt)}>
          {questions[currentQuestion].optionB}
        </button>
        <button value={"optionC"} onClick={(evt) => handleNewOption(evt)}>
          {questions[currentQuestion].optionC}
        </button>
        <button value={"optionD"} onClick={(evt) => handleNewOption(evt)}>
          {questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion === questions.length - 1 ? (
        <button id="next_question" onClick={finishedQuiz}>
          Finish Quiz
        </button>
      ) : (
        <button id="next_question" onClick={handleNextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default Quiz;
