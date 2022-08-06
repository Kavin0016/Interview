import React, { useState, useEffect } from "react";
import { PLAYERS, GAME_GRID } from "./_constants";
import Board from "./_component/board";
import ScoreBoad from "./_component/scoreBoard";
import { gameContext } from "./_ctx";
import { getNextPlayer, checkWinner, checkTie } from "./utils";
import "./styles.css";

const TILES = GAME_GRID * GAME_GRID;
const TicTacToe = () => {
    const [squares, setSquares] = useState([]);
    const [player, setPlayer] = useState("");
    const [winner, setWinner] = useState("");
    const [isTie, setIsTie] = useState(false);

    const setInitialStates = () => {
        const tilesSatate = [...Array(TILES).fill("")];
        setSquares(tilesSatate);
        setPlayer(PLAYERS[1]);
        setWinner("");
        setIsTie(false);
    }

    const changePlayer = (i) => {
        if (!squares[i] && winner == "" && isTie == false) {
            let currPlayer = getNextPlayer(player);
            let squaresClone = [...squares];
            squaresClone[i] = currPlayer;
            setPlayer(currPlayer);
            setSquares(squaresClone);
        }
    }

    const redoGame = (i) => {
        if (winner == "" && isTie == false) {
            let currSquares = [...squares];
            let remainingSquares = currSquares?.slice(0, i + 1);
            let emptyTileLength = TILES - remainingSquares?.length;
            let emptyTiles = Array(emptyTileLength).fill("");
            remainingSquares.push(...emptyTiles);
            console.log({ remainingSquares, remainingSquaresLength: remainingSquares?.length, TILES, emptyTileLength })
            setSquares(remainingSquares);
        }
    }

    const resetGame = () => {
        setInitialStates();
    }

    useEffect(() => {
        setInitialStates();
    }, []);

    useEffect(() => {
        let isWinner = checkWinner(player, squares);
        let isTie = checkTie(squares);
        if (isWinner)
            setWinner(player);
        if (isTie && !isWinner)
            setIsTie(true);
    }, [player])

    return (
        <div className="tic-tac-toe">
            <div className="console-wrapper">
                <gameContext.Provider value={{ changePlayer, redoGame }}>
                    <Board squares={squares} winner={winner} />
                    <ScoreBoad steps={squares} />
                </gameContext.Provider>
            </div>
            <button onClick={resetGame}>Reset</button>
            {winner &&
                <div>Winner is {winner}</div>}
            {isTie && <div>Game is on !!! TIE !!!</div>}
        </div>
    )
}

export default TicTacToe;