import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import { gameStateContext } from "./helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="main_container">
      <h1>Quiz App</h1>
      <gameStateContext.Provider value={{ gameState, setGameState }}>
        {gameState === "menu" && <Menu />}
      </gameStateContext.Provider>
    </div>
  );
}

export default App;
