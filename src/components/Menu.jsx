import React, { useState, useContext } from "react";
import { gameStateContext } from "../helpers/Contexts";
import "../App.css";

// ['menu','playing','finished']
const Menu = () => {
  const { gameState, setGameState, username, setUsername } =
    useContext(gameStateContext);
  return (
    <div className="menu_container">
      <label htmlFor="menu_input">Enter Your Name:</label>
      <input
        type="text"
        placeholder="Enter username..."
        id="menu_input"
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={() => setGameState("playing")}>Start Quiz</button>
    </div>
  );
};

export default Menu;
