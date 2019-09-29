const log = require('debug')('bishop');
const { Piece } = require('./piece');
const TYPES = require('../util').TYPES;
const MOVEMENT_PATTERNS = require('../util').MOVEMENT_PATTERNS;

class Bishop extends Piece {
  constructor(pos, color) {
    super(pos, color);
    this.pos = pos;
    this.color = color;
    this.type = TYPES.bishop;
    this.pattern = [
      ...MOVEMENT_PATTERNS.diag.up_right,
      ...MOVEMENT_PATTERNS.diag.down_right,
      ...MOVEMENT_PATTERNS.diag.down_left,
      ...MOVEMENT_PATTERNS.diag.up_left,
    ];
    this.movementCount = 0;
  }
  validateMove(deltaPos, isEnemyAttacked, piece, board, start, end) {
    log(piece);
    const deltaX = deltaPos[0];
    const deltaY = deltaPos[1];
    const isRegularFound = this.findRegularPattern(deltaX, deltaY);
    const isEndEmpty = this.checkEndEmpty(board, end);
    if (isRegularFound) {
      if (isEnemyAttacked || isEndEmpty) {
        const isPathBlocked = this.obsticleCheck( // if the previous conditions are met => check for obsticles
          start, end, deltaX, deltaY, piece, board);
        log('isEnemyAttacked = ', isEnemyAttacked);
        log('color = ', piece.color);
        log('deltaX, deltaY = ', [deltaX, deltaY]);
        if (!isPathBlocked) return true;
      }
    }
    return false;
  }
  obsticleCheck(start, end, deltaX, deltaY, piece, board) {
    const iterationCount = Math.abs(deltaX);
    const deltaXIterStep = deltaX / iterationCount;
    const deltaYIterStep = deltaY / iterationCount;
    for (let index = 1; index < iterationCount; index++) { // last step is not checked as the conditions (isEnemyAttacked || isEndEmpty) are already met
      const coordValue = parseInt(board.coord[start], 10);
      let nextIterStep;
      if (deltaXIterStep > 0 && deltaYIterStep > 0) {
        nextIterStep = coordValue + (11 * index);
      } else if (deltaXIterStep > 0 && deltaYIterStep < 0) {
        nextIterStep = coordValue + (9 * index);
      } else if (deltaXIterStep < 0 && deltaYIterStep < 0) {
        nextIterStep = coordValue - (11 * index);
      } else if (deltaXIterStep < 0 && deltaYIterStep > 0) {
        nextIterStep = coordValue - (9 * index);
      }
      const nextIterCoord = board.coordRev[nextIterStep];
      const nextIterPieceType = board.pieces[nextIterCoord].type || '.';
      log('nextIterStep = ', nextIterStep);
      log('nextIterCoord = ', nextIterCoord);
      log('nextIterPieceType = ', nextIterPieceType);
      if (nextIterPieceType !== '.') return true; // path is blocked
    }
    return false;
  }
  findRegularPattern(deltaX, deltaY) {
    return this.pattern.some((d) => {
      return deltaX === d[0] && deltaY === d[1];
    });
  }
  checkEndEmpty(board, end) {
    return board.pieces[end] === '.' ? true : false;
  }
}

module.exports = {
  Bishop,
};
