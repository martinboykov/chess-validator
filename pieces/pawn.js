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
    };
  }
  validateMove(deltaPos, isEnemyAttacked, piece) {
    console.log(isEnemyAttacked);
    const deltaX = deltaPos[0];
    const deltaY = deltaPos[1];
    const isFirstMove = piece.movementCount === 0;
    if (piece.isWhite) {
      if (!isEnemyAttacked && isFirstMove) {
        const isRegularFound = this.pattern.white.regular.some((pattern) => {
          return deltaX === pattern[0] && deltaY === pattern[1];
        });
        if (isRegularFound) return true;
        return false;
      } else if (isEnemyAttacked) {
        const isAttackMoveFound = this.pattern.white.special.attack.some((pattern) => {
          return deltaX === pattern[0] && deltaY === pattern[1];
        });
        if (isAttackMoveFound) return true;
        return false;
      } else if (isFirstMove) {
        const isFirstMoveFound = this.pattern.white.special.first.some((pattern) => {
          return deltaX === pattern[0] && deltaY === pattern[1];
        });
        if (isFirstMoveFound) return true;
        return false;
      }


    } else if (!piece.isWhite) {
      // ..
    }
  }
}

module.exports = {
  Pawn,
};
