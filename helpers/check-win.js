export const checkWin = (board) => {
  if (
    (board[0] === board[1] && board[0] === board[2])
    || (board[3] === board[4] && board[3] === board[5])
    || (board[6] === board[7] && board[6] === board[8])
    || (board[0] === board[3] && board[0] === board[6])
    || (board[1] === board[4] && board[1] === board[7])
    || (board[2] === board[5] && board[2] === board[8])
    || (board[0] === board[4] && board[0] === board[8])
    || (board[2] === board[4] && board[2] === board[6])
  ) return true;
  return false;
};

export const checkDraw = (board) => {
  if (
    (board[0] === 'X' || board[0] === 'O')
    && (board[1] === 'X' || board[1] === 'O')
    && (board[2] === 'X' || board[2] === 'O')
    && (board[3] === 'X' || board[3] === 'O')
    && (board[4] === 'X' || board[4] === 'O')
    && (board[5] === 'X' || board[5] === 'O')
    && (board[6] === 'X' || board[6] === 'O')
    && (board[7] === 'X' || board[7] === 'O')
    && (board[8] === 'X' || board[8] === 'O')
  ) return true;
  return false;
};
