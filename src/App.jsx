import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import { gameStateContext } from "./helpers/Contexts";
import Quiz from "./components/Quiz";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [username, setUsername] = useState("");

  return (
    <div className="main_container">
      <h1>Quiz App</h1>
      <gameStateContext.Provider
        value={{ gameState, setGameState, setUsername, username }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
      </gameStateContext.Provider>
    </div>
  );
}

export default App;
