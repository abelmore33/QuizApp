import React, { useState } from "react";
import questions from "../helpers/Questions";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const handleNewOption = (evt) => {
    setOptionChosen(evt.target.value);
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
      {optionChosen}
    </div>
  );
};

export default Quiz;
