const log = require('debug')('chess');
const { Board } = require('./board');
const pieceType = require('./pieces');
const { TYPES, COLORS, PLAY_ORDER, STATE } = require('./util');
const isDev = process.env.NODE_ENV === 'development' ? true : false; // eslint-disable-line no-process-env

// ...
class Chess {
  constructor() {
    this.board = new Board();
    this.order = PLAY_ORDER.white;
    this.state = STATE.regular;
  }
  init() {
    /* istanbul ignore next */
    if (isDev) this.board.print();
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
    // rooks init
    // -----------------------------------------
    ['a1', 'h1', 'a8', 'h8'].forEach((pos, idx) => {
      if (idx < 2) this.add().rook(pos, COLORS.white);
      else if (idx >= 2) this.add().rook(pos, COLORS.black);
    });
    // queens init
    // -----------------------------------------
    ['d1', 'd8'].forEach((pos, idx) => {
      if (idx < 1) this.add().queen(pos, COLORS.white);
      else if (idx >= 1) this.add().queen(pos, COLORS.black);
    });
    // kings init
    // -----------------------------------------
    ['e1', 'e8'].forEach((pos, idx) => {
      if (idx < 1) this.add().king(pos, COLORS.white);
      else if (idx >= 1) this.add().king(pos, COLORS.black);
    });
    /* istanbul ignore next */
    if (isDev) this.board.print();
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
    if (this.order !== this.board.pieces[start].color) {
      return this.gameOver(start, end);
    }
    const delta = this.board.calculateDelta(end, start);
    const deltaX = delta[0];
    const deltaY = delta[1];
    const isEnemyAttacked = this.enemyAttackedCheck(start, end);
    const isEndEmpty = this.endEmptyCheck(end);
    log('piece.color = ', this.board.pieces[start].color);
    log('order = ', this.order);
    log('delta = ', delta);
    log('isEnemyAttacked = ', isEnemyAttacked);
    log('isEndEmpty = ', isEndEmpty);
    const isValidMove = piece.validateMove(
      deltaX, deltaY, isEnemyAttacked, isEndEmpty,
      piece, this.board, start, end,
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

      this.order = !this.order;

      /* istanbul ignore next */
      if (isDev) this.board.print();
      return true;
    }
    return this.gameOver(start, end);
  }
  gameOver(start, end) {
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
      rook: (pos, color) => {
        this.board.pieces[pos] = new pieceType.Rook(pos, color);
      },
      queen: (pos, color) => {
        this.board.pieces[pos] = new pieceType.Queen(pos, color);
      },
      king: (pos, color) => {
        this.board.pieces[pos] = new pieceType.King(pos, color);
      },
    };
  }
  enemyAttackedCheck(start, end) {
    return (this.board.pieces[end] !== '.' &&
      (this.board.pieces[start].color !== this.board.pieces[end].color)) ?
      true :
      false;
  }
  endEmptyCheck(end) {
    return this.board.pieces[end] === '.' ? true : false;
  }
}

module.exports = {
  Chess,
};
