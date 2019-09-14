// import board
const { Board } = require('./board');
// import pieces
const pieces = require('./pieces');

const COLORS = require('./util/index').COLORS;

const STATE = require('./util/index').STATE;

// ...
class Chess {
  constructor() {
    this.board = new Board;
    this.state = STATE.regular;
  }
  init() {
    this.board.print();
    this.board.printRaw();
    // const coordRev = Board.getCoordRev();
    // console.log(board);

    // white pawns initiation
    // -----------------------------------------
    const pawnW1 = new pieces.Pawn('a2', COLORS.white);
    this.board.pieces[pawnW1.pos] = pawnW1;
    const pawnW2 = new pieces.Pawn('b2', COLORS.white);
    this.board.pieces[pawnW2.pos] = pawnW2;
    const pawnW3 = new pieces.Pawn('c2', COLORS.white);
    this.board.pieces[pawnW3.pos] = pawnW3;
    const pawnW4 = new pieces.Pawn('d2', COLORS.white);
    this.board.pieces[pawnW4.pos] = pawnW4;
    const pawnW5 = new pieces.Pawn('e2', COLORS.white);
    this.board.pieces[pawnW5.pos] = pawnW5;
    const pawnW6 = new pieces.Pawn('f2', COLORS.white);
    this.board.pieces[pawnW6.pos] = pawnW6;
    const pawnW7 = new pieces.Pawn('g2', COLORS.white);
    this.board.pieces[pawnW7.pos] = pawnW7;
    const pawnW8 = new pieces.Pawn('h2', COLORS.white);
    this.board.pieces[pawnW8.pos] = pawnW8;

    // rest of whites
    // -----------------------------------------
    // ...

    // black pawns initiation
    // -----------------------------------------
    const pawnB1 = new pieces.Pawn('a7', COLORS.black);
    this.board.pieces[pawnB1.pos] = pawnB1;
    const pawnB2 = new pieces.Pawn('b7', COLORS.black);
    this.board.pieces[pawnB2.pos] = pawnB2;
    const pawnB3 = new pieces.Pawn('c7', COLORS.black);
    this.board.pieces[pawnB3.pos] = pawnB3;
    const pawnB4 = new pieces.Pawn('d7', COLORS.black);
    this.board.pieces[pawnB4.pos] = pawnB4;
    const pawnB5 = new pieces.Pawn('e7', COLORS.black);
    this.board.pieces[pawnB5.pos] = pawnB5;
    const pawnB6 = new pieces.Pawn('f7', COLORS.black);
    this.board.pieces[pawnB6.pos] = pawnB6;
    const pawnB7 = new pieces.Pawn('g7', COLORS.black);
    this.board.pieces[pawnB7.pos] = pawnB7;
    const pawnB8 = new pieces.Pawn('h7', COLORS.black);
    this.board.pieces[pawnB8.pos] = pawnB8;
    this.board.print();
    this.board.printRaw();

    // rest of blacks
    // -----------------------------------------
    // ...

    console.log('chess initiated');
  }
  makeMove(start, end) {
    const piece = this.board.pieces[start];

    console.log(piece);
    if (
      // check if there is no piece on start position
      piece === '.' ||
      // check if start and/or end position is outside the board
      typeof (this.board.pieces[start]) === 'undefined' ||
      typeof (this.board.pieces[end]) === 'undefined'
    ) {
      this.gameOver(start, end);
    }

    const delta = this.board.calculateDelta(end, start);
    const isEnemyAttacked =
      (this.board.pieces[end] !== '.' &&
        this.board.pieces[start].isWhite !== this.board.pieces[end].isWhite) ?
        true :
        false;
    const isValidMove = piece.validateMove(delta, isEnemyAttacked, piece, this.board, start, end);
    if (isValidMove) {
      // default
      // ---------------------------------------
      this.board.pieces[end] = piece;
      this.board.pieces[start] = '.';
      piece.pos = end;
      if (piece.type === 'p') piece.movementCount += 1;

      // case: pawn promotion
      // ---------------------------------------
      // .....
      // add new Queen

      // king castling move with rook
      // ---------------------------------------
      // .....

      // pown promotion move
      // ---------------------------------------
      // .....

      // on state Check
      // ---------------------------------------
      // .....


      // on state Checkmate
      // ---------------------------------------
      // .....
      this.board.print();
      this.board.printRaw();
      return true;
    }
    return this.gameOver(start, end);
  }
  gameOver(start, end) {
    console.log(`Wrong move: ${start}-${end}`);
    process.exit();
  }
}

module.exports = {
  Chess,
};
