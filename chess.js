const log = require('debug')('chess');

// import board
const { Board } = require('./board');
// import pieces
const pieceType = require('./pieces');

const TYPES = require('./util/index').TYPES;

const COLORS = require('./util/index').COLORS;

const STATE = require('./util/index').STATE;

const isDev = process.env.NODE_ENV === 'development' ? true : false; // eslint-disable-line no-process-env

// ...
class Chess {
  constructor() {
    this.board = new Board();
    this.state = STATE.regular;
  }
  init() {
    if (isDev) {
      this.board.print();
      this.board.printRaw();
    }
    // pawns init
    // -----------------------------------------

    const that = this;
    const posPawnWhite = ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'];
    posPawnWhite.forEach(function(pos) {
      that.add().pawn(pos, COLORS.white);
    });

    const posPawBlack = ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'];
    posPawBlack.forEach(function(pos) {
      that.add().pawn(pos, COLORS.black);
    });

    // rest of pieces
    // -----------------------------------------
    // ...

    if (isDev) {
      this.board.print();
      this.board.printRaw();
    }

    log('chess initiated');
  }
  makeMove(start, end) {
    const piece = this.board.pieces[start];
    log(piece);

    if (piece === '.' || // check if there is no piece on start position
      // check if start and/or end position is outside the board
      typeof (this.board.pieces[start]) === 'undefined' ||
      typeof (this.board.pieces[end]) === 'undefined'
    ) {
      return this.gameOver(start, end);
    }

    const delta = this.board.calculateDelta(end, start);
    const isEnemyAttacked =
      (this.board.pieces[end] !== '.' &&
        this.board.pieces[start].isWhite !== this.board.pieces[end].isWhite) ?
        true :
        false;
    const isValidMove = piece.validateMove(
      delta, isEnemyAttacked,
      piece, this.board, start, end
    );
    if (isValidMove) {
      // default
      // ---------------------------------------
      this.board.pieces[end] = piece;
      this.board.pieces[start] = '.';
      piece.pos = end;
      if (piece.type === TYPES.pawn) piece.movementCount += 1;

      // case: pawn promotion
      // ---------------------------------------
      // .....
      // add new Queen

      // king castling move with rook
      // ---------------------------------------
      //

      // pown promotion move
      // ---------------------------------------
      // .....

      // on state Check/ on state Checkmate
      // ---------------------------------------
      // N/A

      if (isDev) {
        this.board.print();
        this.board.printRaw();
      }
      return true;
    }
    return this.gameOver(start, end);
  }
  gameOver(start, end) {
    return `Wrong move: ${start}-${end}`;
  }
  add() {
    const that = this;
    return {
      pawn: function(pos, color) {
        that.board.pieces[pos] = new pieceType.Pawn('a2', color);
      },
    };
  }
}

module.exports = {
  Chess,
};
