const log = require('debug')('pawn');
const { Piece } = require('./piece');
const TYPES = require('../util').TYPES;
const MOVEMENT_PATTERNS = require('../util').MOVEMENT_PATTERNS;
const isDev = process.env.NODE_ENV === 'development'; // eslint-disable-line no-process-env

class Pawn extends Piece {
  constructor(pos, color) {
    super(pos, color);
    this.type = TYPES.pawn;
    this.pos = pos;
    this.color = color;
    this.movementCount = 0;
    this.pattern = {
      white: {
        regular: [...MOVEMENT_PATTERNS.up.slice(0, 1)],
        special: {
          first: [...MOVEMENT_PATTERNS.up.slice(1, 2)],
          attack: [
            ...MOVEMENT_PATTERNS.diag.up_left.slice(0, 1),
            ...MOVEMENT_PATTERNS.diag.up_right.slice(0, 1),
          ],
        },
      },
      black: {
        regular: [...MOVEMENT_PATTERNS.down.slice(0, 1)],
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
    log(piece);
    const deltaX = deltaPos[0];
    const deltaY = deltaPos[1];
    const isFirstMove = piece.movementCount === 0;
    if (isFirstMove) {

      const isFirstMoveFound = piece.color
        ? this.pattern.white.special.first.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        })
        : this.pattern.black.special.first.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        });
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
      log('isEnemyAttacked = ', isEnemyAttacked);
      log('pattern.white.special.attack = ', this.pattern.white.special.attack); // eslint-disable-line max-len
      log('pattern.black.special.attack = ', this.pattern.black.special.attack); // eslint-disable-line max-len
      log('color = ', piece.color);
      log('deltaX, deltaY = ', [deltaX, deltaY]);
      const isAttackMoveFound = piece.color
        ? this.pattern.white.special.attack.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        })
        : this.pattern.black.special.attack.some((d) => {
          return deltaX === d[0] && deltaY === d[1];
        });
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
    log('regularMuvePattern = ', isRegularFound);
    // no pawn movement pattern foun(d) => false
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
}

module.exports = {
  Pawn,
};
