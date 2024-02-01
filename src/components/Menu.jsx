import React, { useState, useContext } from "react";
import { gameStateContext } from "../helpers/Contexts";
import "../App.css";

// ['menu','playing','finished']
const Menu = () => {
  const { gameState, setGameState } = useContext(gameStateContext);
  return (
    <div className="menu_container">
      <label htmlFor="menu_input">Enter Your Name:</label>
      <input type="text" placeholder="Ex.How many" id="menu_input" />
      <button onClick={() => setGameState("playing")}>Start Quiz</button>
    </div>
  );
};

export default Menu;
