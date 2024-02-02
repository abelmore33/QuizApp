import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import { gameStateContext } from "./helpers/Contexts";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="main_container">
      <h1>Quiz App</h1>
      <gameStateContext.Provider
        value={{
          gameState,
          setGameState,
          setUsername,
          username,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "end" && <EndScreen />}
      </gameStateContext.Provider>
    </div>
  );
}

export default App;
