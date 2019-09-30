const log = require('debug')('rook');
const { Piece } = require('./piece');
const { TYPES, MOVEMENT_PATTERNS } = require('../util');

class Rook extends Piece {
  constructor(pos, color) {
    super(pos, color);
    this.type = TYPES.rook;
    this.pattern = {
      regular: [
        ...MOVEMENT_PATTERNS.up,
        ...MOVEMENT_PATTERNS.right,
        ...MOVEMENT_PATTERNS.down,
        ...MOVEMENT_PATTERNS.left,
      ],
    };
    this.movementCount = 0;
  }
  validateMove(deltaX, deltaY, isEnemyAttacked,
    isEndEmpty, piece, board, start, end) {
    if ((deltaX !== 0 && deltaY !== 0) ||
      (deltaX === 0 && deltaY === 0)) return false; // fast check
    const isRegularFound = this.findRegularPattern(
      this.pattern.regular, deltaX, deltaY);
    log(piece);
    log('color = ', piece.color);
    log('deltaX, deltaY = ', [deltaX, deltaY]);
    log('isRegularFound = ', isRegularFound);
    if (isRegularFound) {
      if (isEnemyAttacked || isEndEmpty) {
        const isPathBlocked = this.obsticleCheck( // if the previous conditions are met => check for obsticles
          start, end, deltaX, deltaY, piece, board);
        log('isPathBlocked = ', isPathBlocked);
        if (!isPathBlocked) return true;
      }
    }
    return false;
  }
  obsticleCheck(start, end, deltaX, deltaY, piece, board) {
    const iterationCount =
      Math.abs(deltaX) > 0 ?
        Math.abs(deltaX) :
        Math.abs(deltaY);
    const deltaXIterStep = deltaX !== 0 ? deltaX / iterationCount : 0;
    const deltaYIterStep = deltaY !== 0 ? deltaY / iterationCount : 0;
    log('deltaXIterStep = ', deltaXIterStep);
    log('deltaYIterStep = ', deltaYIterStep);
    for (let index = 1; index < iterationCount; index++) { // last step is not checked as the conditions (isEnemyAttacked || isEndEmpty) are already met
      const coordValue = parseInt(board.coord[start], 10);
      let nextIterStep;
      if (deltaYIterStep > 0) {
        nextIterStep = coordValue + (1 * index);
      } else if (deltaYIterStep < 0) {
        nextIterStep = coordValue - (1 * index);
      } else if (deltaXIterStep > 0) {
        nextIterStep = coordValue + (10 * index);
      } else if (deltaXIterStep < 0) {
        nextIterStep = coordValue - (10 * index);
      }
      const nextIterCoord = board.coordRev[nextIterStep];
      log('nextIterStep = ', nextIterStep);
      log('nextIterCoord = ', nextIterCoord);
      let nextIterPieceType;
      if (board.pieces[nextIterCoord]) {
        nextIterPieceType = board.pieces[nextIterCoord].type || '.';
      } else {
        nextIterPieceType = '.';
      }
      log('nextIterPieceType = ', nextIterPieceType);
      if (nextIterPieceType !== '.') return true; // path is blocked
    }
    return false;
  }
  findRegularPattern(pattern, deltaX, deltaY) {
    return super.findRegularPattern(pattern, deltaX, deltaY);
  }
}

module.exports = {
  Rook,
};
