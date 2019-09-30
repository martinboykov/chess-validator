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
          start, end, deltaX, deltaY, piece, board);
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
    const isRegularMoveFound = this.regularMoveCheck(piece, deltaX, deltaY);
    if (isRegularMoveFound) return true;
    log('regularMovePattern = ', isRegularMoveFound);
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
    return piece.color ?
      this.findMovePattern(this.pattern.white.special.first, deltaX, deltaY) :
      this.findMovePattern(this.pattern.black.special.first, deltaX, deltaY);
  }
  regularMoveCheck(piece, deltaX, deltaY) {
    return piece.color ?
      this.findMovePattern(this.pattern.white.regular, deltaX, deltaY) :
      this.findMovePattern(this.pattern.black.regular, deltaX, deltaY);
  }
  attackMoveCheck(piece, deltaX, deltaY) {
    return piece.color ?
      this.findMovePattern(this.pattern.white.special.attack, deltaX, deltaY) :
      this.findMovePattern(this.pattern.black.special.attack, deltaX, deltaY);
  }
  findMovePattern(pattern, deltaX, deltaY) {
    return super.findMovePattern(pattern, deltaX, deltaY);
  }
}

module.exports = {
  Pawn,
};
