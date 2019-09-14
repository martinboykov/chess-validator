const { Piece } = require('./piece');
const TYPES = require('../util/index').TYPES;
const MOVEMENT_PATTERNS = require('../util/index').MOVEMENT_PATTERNS;
class Pawn extends Piece {
  constructor(pos, color, pattern) {
    super(pos, color, pattern);
    this.type = TYPES.pawn;
    this.pos = pos;
    this.color = color;
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
  validateMove(deltaPos, isEnemyAttacked, piece, board, start, end) {
    console.log('delta', deltaPos);
    console.log('enemyAtt', isEnemyAttacked);
    console.log(piece);
    const deltaX = deltaPos[0];
    const deltaY = deltaPos[1];
    const isFirstMove = piece.movementCount === 0;
    if (isFirstMove) {
      const isPathBlocked = this.obsticlesCheck(start, end, deltaX, deltaY, piece, board);
      const isFirstMoveFound = piece.color ?
        this.pattern.white.special.first.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        }) :
        this.pattern.black.special.first.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        });
      // console.log('isFirstMoveFound', isFirstMoveFound);
      // console.log('isPathBlocked', isPathBlocked);
      // console.log('isFirstMoveFound && !isPathBlocked', isFirstMoveFound && !isPathBlocked);
      if (isFirstMoveFound && !isPathBlocked) return true;
    }
    if (!isEnemyAttacked) {
      const isRegularFound = piece.color ?
        this.pattern.white.regular.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        }) :
        this.pattern.black.regular.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        });
      if (isRegularFound) return true;
      return false;
    } else if (isEnemyAttacked) {
      // console.log('isEnemyAttacked', isEnemyAttacked);
      // console.log(this.pattern.white.special.attack);
      // console.log(this.pattern.black.special.attack);
      // console.log('color', piece.color);
      // console.log('deltaX, deltaY', [deltaX, deltaY]);
      const isAttackMoveFound = piece.color ?
        this.pattern.white.special.attack.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        }) :
        this.pattern.black.special.attack.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        });
      if (isAttackMoveFound) return true;

      return false;
    }
  }
  obsticlesCheck(start, end, deltaX, deltaY, piece, board) {
    const coordValue = +board.coord[start];
    const nextIterStep = piece.color ? coordValue + 1 : coordValue - 1;
    const nextIterCoord = board.coordRev[nextIterStep];
    const nextIterPieceType = board.pieces[nextIterCoord].type || '.';
    // console.log('nextIterStep', nextIterStep);
    // console.log('nextIterCoord', nextIterCoord);
    // console.log('nextIterPieceType', nextIterPieceType);
    if (nextIterPieceType !== '.') return true;
    return false;
  }
}

module.exports = {
  Pawn,
};
