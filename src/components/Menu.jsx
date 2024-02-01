import React, { useState } from "react";
import "../App.css";

// ['menu','playing','finished']
const Menu = () => {

  return (
    <div className="menu_container">
      <label htmlFor="menu_input">Enter Your Name:</label>
      <input type="text" placeholder="Ex.How many" id="menu_input" />
      <button>Start Quiz</button>
    </div>
  );
};

export default Menu;
