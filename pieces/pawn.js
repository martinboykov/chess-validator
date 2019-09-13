const { Piece } = require('./piece');
const TYPES = require('../util/index').TYPES;
const MOVEMENT_PATTERNS = require('../util/index').MOVEMENT_PATTERNS;
class Pawn extends Piece {
  constructor(pos, isWhite, pattern) {
    super(pos, isWhite, pattern);
    this.type = TYPES.pawn;
    this.pos = pos;
    this.isWhite = isWhite;
    this.movementCount = 0;
    this.pattern = {
      white: {
        regular: [
          ...MOVEMENT_PATTERNS.up.slice(0, 1),
        ],
        special: {
          first: [...MOVEMENT_PATTERNS.up.slice(1, 2)],
          attack: [
            ...MOVEMENT_PATTERNS.diag.up_left.slice(0, 1),
            ...MOVEMENT_PATTERNS.diag.up_right.slice(0, 1),
          ],
        },
      },
      black: {
        regular: [
          ...MOVEMENT_PATTERNS.down.slice(0, 1),
        ],
        special: {
          first: [...MOVEMENT_PATTERNS.down.slice(1, 2)],
          attack: [
            ...MOVEMENT_PATTERNS.diag.down_left.slice(0, 1),
            ...MOVEMENT_PATTERNS.diag.down_right.slice(0, 1),
          ],
        },
      },
    };
  }
  validateMove(deltaPos, isEnemyAttacked, piece) {
    console.log(deltaPos);
    console.log(isEnemyAttacked);
    console.log(piece);
    const deltaX = deltaPos[0];
    const deltaY = deltaPos[1];
    const isFirstMove = piece.movementCount === 0;
    if (isFirstMove) {
      const isFirstMoveFound = piece.isWhite ?
        this.pattern.white.special.first.some((d) => {
          return deltaX === d[0] && deltaY === deltaX[1];
        }) :
        this.pattern.white.special.first.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        });
      if (isFirstMoveFound) return true;
    }
    if (!isEnemyAttacked) {
      const isRegularFound = piece.isWhite ?
        this.pattern.white.regular.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        }) :
        this.pattern.black.regular.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        });
      if (isRegularFound) return true;
      return false;
    } else if (isEnemyAttacked) {
      const isAttackMoveFound = piece.isWhite ?
        this.pattern.white.special.attack.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        }) :
        this.pattern.white.special.attack.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        });
      if (isAttackMoveFound) return true;

      return false;
    }
  }
}

module.exports = {
  Pawn,
};
