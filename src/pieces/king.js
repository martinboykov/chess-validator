const log = require('debug')('king');
const { Piece } = require('./piece');
const { TYPES, MOVEMENT_PATTERNS } = require('../util');

class King extends Piece {
  constructor(pos, color) {
    super(pos, color);
    this.type = TYPES.king;
    this.pattern = {
      regular: [
        MOVEMENT_PATTERNS.up[0],
        MOVEMENT_PATTERNS.diag.up_right[0],
        MOVEMENT_PATTERNS.right[0],
        MOVEMENT_PATTERNS.diag.down_right[0],
        MOVEMENT_PATTERNS.down[0],
        MOVEMENT_PATTERNS.diag.down_left[0],
        MOVEMENT_PATTERNS.left[0],
        MOVEMENT_PATTERNS.diag.up_left[0],
      ],
      special: {
        castling: {
          left: MOVEMENT_PATTERNS.left[1],
          right: MOVEMENT_PATTERNS.right[1],
        },
      },
    };
    this.movementCount = 0;
  }
  validateMove(deltaX, deltaY, isEnemyAttacked,
    isEndEmpty, piece, board, start, end) {
    if (Math.abs(deltaX) === 2 && deltaY === 0) {
      const isSpecialMoveFound = this.specialMoveCheck(deltaX, piece, board);
      if (isSpecialMoveFound) return true;
      return false;
    }
    const isRegularFound = this.findMovePattern(
      this.pattern.regular, deltaX, deltaY);
    log(piece);
    log('color = ', piece.color);
    log('deltaX, deltaY = ', [deltaX, deltaY]);
    log('isRegularFound = ', isRegularFound);
    if (isRegularFound) {
      if (isEnemyAttacked || isEndEmpty) {
        return true;
      }
    }
    return false;
  }
  /*eslint-disable */
  specialMoveCheck(deltaX, king, board) {
    let isPathBlocked;
    let path;
    if (king.color
      && king.movementCount === 0
      && deltaX === this.pattern.special.castling.right[0]
      && board.pieces.h1 !== '.') {
      path = ['f1', 'g1'];
      isPathBlocked = this.obsticleCheck(path, board);
      if (board.pieces.h1.type === TYPES.rook
        && board.pieces.h1.movementCount === 0
        && board.pieces.h1.color
        && !isPathBlocked) {
        board.pieces.g1 = board.pieces.e1;
        board.pieces.f1 = board.pieces.h1;
        board.pieces.e1 = '.';
        board.pieces.h1 = '.';
        return true;
      }
    } else if (king.color
      && king.movementCount === 0
      && deltaX === this.pattern.special.castling.left[0]
      && board.pieces.a1 !== '.') {
      path = ['b1', 'c1', 'd1'];
      isPathBlocked = this.obsticleCheck(path, board);
      if (board.pieces.a1.type === TYPES.rook
        && board.pieces.a1.movementCount === 0
        && board.pieces.a1.color
        && !isPathBlocked) {
        board.pieces.c1 = board.pieces.e1;
        board.pieces.d1 = board.pieces.a1;
        board.pieces.e1 = '.';
        board.pieces.a1 = '.';
        return true;
      }
    } else if (!king.color
      && king.movementCount === 0
      && deltaX === this.pattern.special.castling.right[0]
      && board.pieces.h8 !== '.') {
      path = ['f8', 'g8'];
      isPathBlocked = this.obsticleCheck(path, board);
      if (board.pieces.h8.type === TYPES.rook
        && board.pieces.h8.movementCount === 0
        && !board.pieces.h8.color
        && !isPathBlocked) {
        board.pieces.g8 = board.pieces.e8;
        board.pieces.f8 = board.pieces.h8;
        board.pieces.e8 = '.';
        board.pieces.h8 = '.';
        return true;
      }
    } else if (!king.color
      && king.movementCount === 0
      && deltaX === this.pattern.special.castling.left[0]
      && board.pieces.a8 !== '.') {
      path = ['b8', 'c8', 'd8'];
      isPathBlocked = this.obsticleCheck(path, board);
      if (board.pieces.a8.type === TYPES.rook
        && board.pieces.a8.movementCount === 0
        && !board.pieces.a8.color
        && !isPathBlocked) {
        board.pieces.c8 = board.pieces.e8;
        board.pieces.d8 = board.pieces.a8;
        board.pieces.e8 = '.';
        board.pieces.a8 = '.';
        return true;
      }
    }
    return false;
  }
  /* eslint-enable */
  obsticleCheck(path, board) {
    return path.some((spot) => {
      return board.pieces[spot] !== '.';
    });
  }
  findMovePattern(pattern, deltaX, deltaY) {
    return super.findMovePattern(pattern, deltaX, deltaY);
  }
}

module.exports = {
  King,
};
