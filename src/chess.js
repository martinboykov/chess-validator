const log = require('debug')('chess');
const { Board } = require('./board');
const pieceType = require('./pieces');
const { TYPES, COLORS, PLAY_ORDER } = require('./util'); /* istanbul ignore next */
const isDev = process.env.NODE_ENV === 'development' ? true : false; // eslint-disable-line no-process-env

// ...
class Chess {
  constructor() {
    this.board = new Board();
    this.order = PLAY_ORDER.white;
    this.kingCount = 0;
    this.enPassant = {
      state: false,
      pos: null,
      activated: false,
    };
  }
  init() {
    /* istanbul ignore next */
    if (isDev) this.board.print();
    // pawns init
    // -----------------------------------------

    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
      'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7']
      .forEach((pos, idx) => {
        if (idx < 8) this.addPiece.pawn(pos, COLORS.white); /* istanbul ignore next */
        else if (idx >= 8) this.addPiece.pawn(pos, COLORS.black);
      });

    // knights init
    // -----------------------------------------
    ['b1', 'g1', 'b8', 'g8'].forEach((pos, idx) => {
      if (idx < 2) this.addPiece.knight(pos, COLORS.white); /* istanbul ignore next */
      else if (idx >= 2) this.addPiece.knight(pos, COLORS.black);
    });
    // bishops init
    // -----------------------------------------
    ['c1', 'f1', 'c8', 'f8'].forEach((pos, idx) => {
      if (idx < 2) this.addPiece.bishop(pos, COLORS.white); /* istanbul ignore next */
      else if (idx >= 2) this.addPiece.bishop(pos, COLORS.black);
    });
    // rooks init
    // -----------------------------------------
    ['a1', 'h1', 'a8', 'h8'].forEach((pos, idx) => {
      if (idx < 2) this.addPiece.rook(pos, COLORS.white); /* istanbul ignore next */
      else if (idx >= 2) this.addPiece.rook(pos, COLORS.black);
    });
    // queens init
    // -----------------------------------------
    ['d1', 'd8'].forEach((pos, idx) => {
      if (idx < 1) this.addPiece.queen(pos, COLORS.white); /* istanbul ignore next */
      else if (idx >= 1) this.addPiece.queen(pos, COLORS.black);
    });
    // kings init
    // -----------------------------------------
    ['e1', 'e8'].forEach((pos, idx) => {
      if (idx < 1) this.addPiece.king(pos, COLORS.white); /* istanbul ignore next */
      else if (idx >= 1) this.addPiece.king(pos, COLORS.black);
    });
    this.kingCount = 2;
    /* istanbul ignore next */
    if (isDev) this.board.print();
    log('chess initiated');
  }
  makeMove(start, end) {
    let piece = this.board.pieces[start];
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
    if (this.kingCount < 2) {
      throw new Error('Move was made with less than 2 kings on board');
    }
    const isKingToBeRemoved = this.kingRemoveCheck(end);

    const delta = this.board.calculateDelta(end, start);
    const deltaX = delta[0];
    const deltaY = delta[1];
    const isEnemyAttacked = this.enemyAttackedCheck(start, end);
    const isEndEmpty = this.endEmptyCheck(end);
    log('order = ', this.order);

    const isValidMove = piece.validateMove(
      deltaX, deltaY, isEnemyAttacked, isEndEmpty,
      piece, this, start, end,
    );
    if (isValidMove) {
      if (isKingToBeRemoved) this.kingCount -= 1;

      // pawn en passant
      if (this.enPassant.state) {
        // reset the en-passant state if no en-passant move was made in the current turn
        if (this.enPassant.pos !== end) {
          this.enPassant.state = false;
          this.enPassant.pos = null;
        }
      }
      // pawn promotion
      // ---------------------------------------
      const oldMovementCount = piece.movementCount;
      const isPawnPromoted = this.pawnPromotionCheck(piece, end);
      if (piece.type === TYPES.pawn && isPawnPromoted) {
        piece = new pieceType.Queen(end, piece.color);
        this.board.pieces[end] = piece;
        this.board.pieces[start] = '.';
      } else {
        // default
        // ---------------------------------------
        this.board.pieces[end] = piece;
        piece.pos = end;
        this.board.pieces[start] = '.';
      }
      piece.movementCount = oldMovementCount + 1;
      log('color = ', piece.color);
      log('type = ', piece.type);
      log('moveCount = ', piece.movementCount);
      log('position = ', piece.pos);
      this.order = !this.order;

      /* istanbul ignore next */
      if (isDev) this.board.print();
      return true;
    }
    return this.gameOver(start, end);
  }
  addPiece = {
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
  }
  gameOver(start, end) {
    return `Wrong move: ${start}-${end}`;
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
  pawnPromotionCheck(piece, end) {
    if (piece.color) {
      if (end === 'a8' || end === 'b8' || end === 'c8' || end === 'd8' ||
        end === 'e8' || end === 'f8' || end === 'g8' || end === 'h8') {
        return true;
      }
    } else { // if (!piece.color)
      if (end === 'a1' || end === 'b1' || end === 'c1' || end === 'd1' ||
        end === 'e1' || end === 'f1' || end === 'g1' || end === 'h1') {
        return true;
      }
    }
    return false;
  }
  kingRemoveCheck(end) {
    if (this.board.pieces[end] !== '.') {
      if (this.board.pieces[end].type === TYPES.king) return true;
      // no need to check if the color is not the same, as then will return invalid move beforehand
    }
    return false;
  }
}

module.exports = {
  Chess,
};
