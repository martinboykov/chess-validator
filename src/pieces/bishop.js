const log = require('debug')('bishop');
const { Piece } = require('./piece');
const { TYPES, MOVEMENT_PATTERNS } = require('../util');


class Bishop extends Piece {
  constructor(pos, color) {
    super(pos, color);
    this.type = TYPES.bishop;
    this.pattern = [
      ...MOVEMENT_PATTERNS.diag.up_right,
      ...MOVEMENT_PATTERNS.diag.down_right,
      ...MOVEMENT_PATTERNS.diag.down_left,
      ...MOVEMENT_PATTERNS.diag.up_left,
      // special
      // king castling move
      // ...
    ];
    this.movementCount = 0;
  }
  validateMove(deltaX, deltaY, isEnemyAttacked,
    isEndEmpty, piece, board, start, end) {
    const isRegularFound = this.findRegularPattern(deltaX, deltaY);
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
}

module.exports = {
  Bishop,
};
