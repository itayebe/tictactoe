export const boardDraw = (board) => {
  let boardStr = '';
  for (let i = 0; i < board.length; i += 1) {
    boardStr += `|${board[i]}|`;
    if ((i + 1) % 3 === 0) boardStr += '\n';
  }
  return boardStr;
};

export const startingBoard = () => [1, 2, 3, 4, 5, 6, 7, 8, 9];
