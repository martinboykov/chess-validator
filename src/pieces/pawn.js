const log = require('debug')('pawn');
const { Piece } = require('./piece');
const { TYPES, MOVEMENT_PATTERNS } = require('../util');

class Pawn extends Piece {
  constructor(pos, color) {
    super(pos, color);
    this.type = TYPES.pawn;
    this.movementCount = 0;
    this.pattern = {
      white: {
        regular: [MOVEMENT_PATTERNS.up[0]],
        special: {
          first: [MOVEMENT_PATTERNS.up[1]],
          attack: [
            MOVEMENT_PATTERNS.diag.up_left[0],
            MOVEMENT_PATTERNS.diag.up_right[0],
          ],
        },
      },
      black: {
        regular: [MOVEMENT_PATTERNS.down[0]],
        special: {
          first: [MOVEMENT_PATTERNS.down[1]],
          attack: [
            MOVEMENT_PATTERNS.diag.down_left[0],
            MOVEMENT_PATTERNS.diag.down_right[0],
          ],
        },
      },
    };
  }
  validateMove(deltaX, deltaY, isEnemyAttacked,
    isEndEmpty, piece, board, start, end) {
    log(piece);
    const isFirstMove = piece.movementCount === 0;
    if (isFirstMove) {
      const isFirstMoveFound = this.firstMoveCheck(piece, deltaX, deltaY);
      log('isFirstMoveFound = ', isFirstMoveFound);
      if (isFirstMoveFound) {
        const isPathBlocked = this.obsticleCheck(
          start, end, deltaX, deltaY, piece, board
        );
        log('isPathBlocked = ', isPathBlocked);
        if (!isPathBlocked) return true;
      }
    }
    if (isEnemyAttacked) {
      log('pattern.white.special.attack = ', this.pattern.white.special.attack); // eslint-disable-line max-len
      log('pattern.black.special.attack = ', this.pattern.black.special.attack); // eslint-disable-line max-len
      log('color = ', piece.color);
      log('deltaX, deltaY = ', [deltaX, deltaY]);
      const isAttackMoveFound = this.attackMoveCheck(piece, deltaX, deltaY);
      if (isAttackMoveFound) return true;
    }
    // regular movement pattern foun(d) => true
    const isRegularFound = piece.color
      ? this.pattern.white.regular.some((d) => {
        return deltaX === d[0] && deltaY === d[1];
      })
      : this.pattern.black.regular.some((d) => {
        return deltaX === d[0] && deltaY === d[1];
      });
    if (isRegularFound) return true;
    log('regularMovePattern = ', isRegularFound);
    return false;
  }
  obsticleCheck(start, end, deltaX, deltaY, piece, board) {
    if (deltaY !== 2 && deltaX !== 0) return false;
    const iterationCount = deltaY;
    for (let index = 1; index <= iterationCount; index++) {
      const coordValue = parseInt(board.coord[start], 10);
      const nextIterStep = piece.color
        ? coordValue + index
        : coordValue - index;
      const nextIterCoord = board.coordRev[nextIterStep];
      const nextIterPieceType = board.pieces[nextIterCoord].type || '.';
      log('nextIterStep = ', nextIterStep);
      log('nextIterCoord = ', nextIterCoord);
      log('nextIterPieceType = ', nextIterPieceType);
      if (nextIterPieceType !== '.') return true;
    }
    return false;
  }
  firstMoveCheck(piece, deltaX, deltaY) {
    return piece.color
      ? this.pattern.white.special.first.some((d) => {
        return deltaX === d[0] && deltaY === d[1];
      })
      : this.pattern.black.special.first.some((d) => {
        return deltaX === d[0] && deltaY === d[1];
      });
  }
  attackMoveCheck(piece, deltaX, deltaY) {
    return piece.color
      ? this.pattern.white.special.attack.some((d) => {
        return deltaX === d[0] && deltaY === d[1];
      })
      : this.pattern.black.special.attack.some((d) => {
        return deltaX === d[0] && deltaY === d[1];
      });
  }
}

module.exports = {
  Pawn,
};
