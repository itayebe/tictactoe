import express from 'express';
import { boardDraw, startingBoard } from '../helpers/board';
import { checkWin, checkDraw } from '../helpers/check-win';

const router = express.Router();

let board = startingBoard();
let turn = 'X';

router.get('/start-game', (req, res) => {
  board = startingBoard();
  res.send(
    `It's ${turn}'s turn:
    ${boardDraw(board)}
    send number to place your sign`,
  );
});

router.get('/view-board', (req, res) => {
  res.send(
    `It's ${turn}'s turn:
    ${boardDraw(board)}
    send number to place your sign`,
  );
});

router.post('/play', (req, res) => {
  const { number } = req.body;
  if (!number) {
    res.send(`
      The request should contain number property, try again
      It's ${turn}'s turn:
      ${boardDraw(board)}
      send number to place your sign
    `);
  } else if (number >= 1 && number <= 9 && board[number - 1] === Number(number)) {
    board[number - 1] = turn;
    if (checkWin(board)) {
      res.send(`
        ${turn} wins!
        ${boardDraw(board)}
      `);
    } else if (checkDraw(board)) {
      res.send(`
        it is a draw
        ${boardDraw(board)}
      `);
    } else {
      if (turn === 'X') turn = 'O';
      else turn = 'X';
      res.send(
        `It's ${turn}'s turn:
        ${boardDraw(board)}
        send number to place your sign`,
      );
    }
  } else {
    res.send(`
      wrong input, try again
      It's ${turn}'s turn:
      ${boardDraw(board)}
      send number to place your sign
    `);
  }
});

export default router;
