import React, { useState } from "react";
import Square from "./Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
  }

  return (
    <div className="App">
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
              squareValue={value}
              index={index}
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
            />
          );
        })}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
};

export default App;
