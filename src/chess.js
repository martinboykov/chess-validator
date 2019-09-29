const log = require('debug')('chess');

// import board
const { Board } = require('./board');
// import pieces
const pieceType = require('./pieces');

const TYPES = require('./util').TYPES;

const COLORS = require('./util').COLORS;

const PLAY_ORDER = require('./util').PLAY_ORDER;

const STATE = require('./util').STATE;

const isDev = process.env.NODE_ENV === 'development' ? true : false; // eslint-disable-line no-process-env

// ...
class Chess {
  constructor() {
    this.board = new Board();
    this.order = PLAY_ORDER.white;
    this.state = STATE.regular;
  }
  init() {
    if (isDev) {/* istanbul ignore next */
      this.board.print();
    }
    // pawns init
    // -----------------------------------------

    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
      'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7']
      .forEach((pos, idx) => {
        if (idx < 8) this.add().pawn(pos, COLORS.white);
        else if (idx >= 8) this.add().pawn(pos, COLORS.black);
      });

    // knights init
    // -----------------------------------------
    ['b1', 'g1', 'b8', 'g8'].forEach((pos, idx) => {
      if (idx < 2) this.add().knight(pos, COLORS.white);
      else if (idx >= 2) this.add().knight(pos, COLORS.black);
    });
    // bishops init
    // -----------------------------------------
    ['c1', 'f1', 'c8', 'f8'].forEach((pos, idx) => {
      if (idx < 2) this.add().bishop(pos, COLORS.white);
      else if (idx >= 2) this.add().bishop(pos, COLORS.black);
    });

    // rest of pieces
    // -----------------------------------------
    // ...


    if (isDev) {/* istanbul ignore next */
      this.board.print();
    }

    log('chess initiated');
  }
  makeMove(start, end) {
    const piece = this.board.pieces[start];
    if (piece === '.' || // check if there is no piece on start position
      // check if start and/or end position is outside the board
      typeof (this.board.pieces[start]) === 'undefined' ||
      typeof (this.board.pieces[end]) === 'undefined'
    ) {
      return this.gameOver(start, end);
    }
    log('piece.color = ', this.board.pieces[start].color);
    log('order = ', this.order);
    if (this.order !== this.board.pieces[start].color) {
      return this.gameOver(start, end);
    }

    const delta = this.board.calculateDelta(end, start);
    const isEnemyAttacked = this.enemyAttackedCheck(start, end);
    log('delta = ', delta);
    log('isEnemyAttacked = ', isEnemyAttacked);
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
      piece.movementCount += 1;
      log(piece);
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

      this.order = !this.order;
      if (isDev) {/* istanbul ignore next */
        this.board.print();
      }
      return true;
    }
    return this.gameOver(start, end);
  }
  gameOver(start, end) {/* istanbul ignore next */
    return `Wrong move: ${start}-${end}`;
  }
  add() {
    // const that = this;
    return {
      pawn: (pos, color) => {
        this.board.pieces[pos] = new pieceType.Pawn(pos, color);
      },
      knight: (pos, color) => {
        this.board.pieces[pos] = new pieceType.Knight(pos, color);
      },
      bishop: (pos, color) => {
        this.board.pieces[pos] = new pieceType.Bishop(pos, color);
      },
    };
  }
  enemyAttackedCheck(start, end) {
    return (this.board.pieces[end] !== '.' &&
      (this.board.pieces[start].color !== this.board.pieces[end].color)) ?
      true :
      false;
  }
}

module.exports = {
  Chess,
};
