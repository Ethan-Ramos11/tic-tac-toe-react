import React from "react";
import { useState, useEffect } from "react";
import "../style/scoreBoard.css";
export default function ScoreBoard({ turn, winner }) {
  let [xScore, setXScore] = useState(0);
  let [oScore, setOScore] = useState(0);
  useEffect(() => {
    if (winner === "X") {
      setXScore(xScore + 1);
    } else if (winner === "O") {
      setOScore(oScore + 1);
    }
  }, [winner]);

  return (
    <>
      <h1 id="title">Tic-Tac-Toe</h1>
      <div
        id="score-board"
        className={`${turn === "X" ? "score-board-x" : "score-board-o"}`}
      >
        <div id="score">
          <div id="x-score">
            <h3>X: {xScore}</h3>
          </div>
          <div id="o-score">
            <h3>O: {oScore}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
