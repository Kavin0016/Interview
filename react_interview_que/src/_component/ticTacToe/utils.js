import { PLAYERS } from "./_constants"
import { GAME_GRID } from "./_constants";

export const getNextPlayer = (player) => {
    return PLAYERS.indexOf(player) == 0 ? PLAYERS[1] : PLAYERS[0];
}

export const checkWinner = (player, squares = []) => {
    let isWinner = false;

    const checkRow = () => {
        let ans = false;
        for (let i = 0; i < 9; i += 3) {
            ans |= (squares[i] === squares[i + 1] &&
                squares[i] === squares[i + 2] &&
                squares[i] !== '')
        }
        return ans;
    }

    const checkCol = () => {
        let ans = false;
        for (let i = 0; i < 3; i++) {
            ans |= (squares[i] === squares[i + 3] &&
                squares[i] === squares[i + 6] &&
                squares[i] !== '')
        }
        return ans;
    }

    const checkDig = (i) => {
        return ((squares[0] === squares[4] &&
            squares[0] === squares[8] && squares[0] !== '') ||
            (squares[2] === squares[4] && squares[2] === squares[6] &&
                squares[2] !== ''));
    }

    for (let i = 0; i < GAME_GRID; i++) {
        let isRow = checkRow();
        let isCol = checkCol();
        let isDig = checkDig();
        if (isRow || isCol || isDig)
            isWinner = true
    }

    return isWinner;
}

export const checkTie = (squares = []) => {
    let count = 0;
    squares.forEach((cell) => {
        if (cell !== '') {
            count++;
        }
    })
    return count === 9;
}