import React from "react";
import Square from "./square";

const Board = ({ squares = [] }) => {
    return (
        <div className="game-board">
            {squares?.map((player, i) => {
                return <Square key={`${i}`} player={player} i={i} />
            })}
        </div>
    )
}

export default Board;