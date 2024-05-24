import React from "react";
import ScoreBoard from "../components/scoreBoard";
import Board from "../components/board";
import { useState } from "react";
import "../style/game.css";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  function processClick(index) {
    if (board[index] !== null || winner !== null) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    const newWinner = checkWinner(newBoard);
    if (newWinner !== null) {
      setWinner(newWinner);
      return;
    } else if (checkDraw(newBoard)) {
      setWinner("draw");
      return;
    } else {
      setPlayer(player === "X" ? "O" : "X");
    }
  }
  function resetGame() {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  }
  return (
    <>
      <ScoreBoard turn={player} winner={winner} />
      <Board cells={board} onCellClick={processClick} turn={player} />
      <button id="resetButton" onClick={resetGame}>
        Reset Game
      </button>
    </>
  );
}

function checkWinner(board) {
  let win_con = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let con of win_con) {
    if (
      board[con[0]] !== null &&
      board[con[0]] === board[con[1]] &&
      board[con[0]] === board[con[2]]
    ) {
      return board[con[0]];
    }
  }
  return null;
}

function checkDraw(board) {
  for (let cell of board) {
    if (cell === null) {
      return false;
    }
  }
  return true;
}
