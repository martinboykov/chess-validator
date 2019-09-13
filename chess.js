// import board
const { Board } = require('./board');
// import pieces
const pieces = require('./pieces');


// ...
class Chess {
  constructor() {
    this.board = new Board;
  }
  init() {
    this.board.print();
    // const coordRev = Board.getCoordRev();
    // console.log(board);

    // white pawns initiation
    const pawnW1 = new pieces.Pawn('a2', true);
    this.board.pieces[pawnW1.pos] = pawnW1;
    const pawnW2 = new pieces.Pawn('b2', true);
    this.board.pieces[pawnW2.pos] = pawnW2;
    const pawnW3 = new pieces.Pawn('c2', true);
    this.board.pieces[pawnW3.pos] = pawnW3;
    const pawnW4 = new pieces.Pawn('d2', true);
    this.board.pieces[pawnW4.pos] = pawnW4;
    const pawnW5 = new pieces.Pawn('e2', true);
    this.board.pieces[pawnW5.pos] = pawnW5;
    const pawnW6 = new pieces.Pawn('f2', true);
    this.board.pieces[pawnW6.pos] = pawnW6;
    const pawnW7 = new pieces.Pawn('g2', true);
    this.board.pieces[pawnW7.pos] = pawnW7;
    const pawnW8 = new pieces.Pawn('h2', true);
    this.board.pieces[pawnW8.pos] = pawnW8;

    // rest of whites
    // ...

    // white pawns initiation
    const pawnB1 = new pieces.Pawn('a7', false);
    this.board.pieces[pawnB1.pos] = pawnB1;
    const pawnB2 = new pieces.Pawn('b7', false);
    this.board.pieces[pawnB2.pos] = pawnB2;
    const pawnB3 = new pieces.Pawn('c7', false);
    this.board.pieces[pawnB3.pos] = pawnB3;
    const pawnB4 = new pieces.Pawn('d7', false);
    this.board.pieces[pawnB4.pos] = pawnB4;
    const pawnB5 = new pieces.Pawn('e7', false);
    this.board.pieces[pawnB5.pos] = pawnB5;
    const pawnB6 = new pieces.Pawn('f7', false);
    this.board.pieces[pawnB6.pos] = pawnB6;
    const pawnB7 = new pieces.Pawn('g7', false);
    this.board.pieces[pawnB7.pos] = pawnB7;
    const pawnB8 = new pieces.Pawn('h7', false);
    this.board.pieces[pawnB8.pos] = pawnB8;
    this.board.print();

    // rest of blacks
    // ...

    console.log('chess initiated');
  }
  makeMove(start, finish) {
    const piece = this.board.pieces[start];
    const delta = this.board.calculateDelta(start, finish);
    const isEnemyAttacked =
      (this.board.pieces[finish] !== 0 &&
        this.board.pieces[start].isWhite !== this.board.pieces[finish].isWhite) ?
        true :
        false;
    piece.validateMove(delta, isEnemyAttacked, piece);
  }

}

module.exports = {
  Chess,
};
