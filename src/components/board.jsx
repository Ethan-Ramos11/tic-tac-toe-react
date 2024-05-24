import React from "react";
import "../style/board.css";
const Cell = React.memo(({ content, onClick }) => {
  return (
    <button
      className={`cell ${content === "X" ? "cell-x" : "cell-o"}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
});

export default function Board({ cells, onCellClick }) {
  return (
    <div id="board">
      {cells.map((cell, index) => (
        <Cell key={index} content={cell} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
}
