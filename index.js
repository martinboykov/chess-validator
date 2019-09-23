const { Chess } = require('./chess');

const startGame = (moves) => {
  const chess = new Chess();
  // start game
  chess.init();
  let unvalidMove = false;
  let unvalidMoveOutput = '';
  const success = 'All moves are valid';
  for (let index = 0; index < moves.length; index++) {
      const move = moves[index];
      const start = move[0];
      const finish = move[1];
      const moveOutcome = chess.makeMove(start, finish);
      if (typeof (moveOutcome) === 'string') {
        unvalidMove = true;
        unvalidMoveOutput = moveOutcome;
        break;
      }
  }
  if (unvalidMove) {
    return unvalidMoveOutput;
  }
  return success;
};
const moves = [
  ['a7', 'a5'],
  ['a5', 'a4'],
  ['a2', 'a4'],
];
const result = startGame(moves);
console.log(result);

module.exports = {
  startGame,
};
