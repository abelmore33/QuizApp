import React, { useContext } from "react";
import "../App.css/";
import { gameStateContext } from "../helpers/Contexts";
import questions from "../helpers/Questions";

const EndScreen = () => {
  const { score, setScore, gameState, setGameState } =
    useContext(gameStateContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="end_Screen">
      <h1>Quiz Finished</h1>
      <h1>
        {score} / {questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
