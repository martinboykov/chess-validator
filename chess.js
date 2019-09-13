// import board
const { Board } = require('./board');
// import pieces
const pieces = require('./pieces');


// ...
class Chess {
  init() {
    const board = (new Board).init();
    console.log(board);
    const pawn = new pieces.Pawn('k', 0, 0);
    console.log(pawn);
    console.log('chess initiated');
  }
  validateMove() {

  }
}

module.exports = {
  Chess,
};
