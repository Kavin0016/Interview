import React, { memo } from "react";
import { useContext } from "react";
import { gameContext } from "../_ctx";

const Square = ({ player, i = 0 }) => {
    const { changePlayer } = useContext(gameContext);
    return <div className="game-tile" onClick={() => changePlayer(i)}>{player}</div>
}

export default Square;