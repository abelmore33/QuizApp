import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  const [gameState, setGameState] = useState("menu");
  return (
    <div className="main_container">
      <h1>Quiz App</h1>
      {gameState === "menu" && <Menu />}
    </div>
  );
}

export default App;
