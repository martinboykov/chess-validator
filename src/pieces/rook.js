const log = require('debug')('rook');
const { Piece } = require('./piece');
const TYPES = require('../util').TYPES;
const MOVEMENT_PATTERNS = require('../util').MOVEMENT_PATTERNS;

class Rook extends Piece {
  constructor(pos, color) {
    super(pos, color);
    this.pos = pos;
    this.color = color;
    this.type = TYPES.rook;
    this.pattern = [
      ...MOVEMENT_PATTERNS.up,
      ...MOVEMENT_PATTERNS.right,
      ...MOVEMENT_PATTERNS.down,
      ...MOVEMENT_PATTERNS.left,
    ];
    this.movementCount = 0;
  }
  validateMove(deltaPos, isEnemyAttacked, piece, board, start, end) {
    log(piece);
    const deltaX = deltaPos[0];
    const deltaY = deltaPos[1];
    const isRegularFound = this.findRegularPattern(piece, deltaX, deltaY);
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
        nextIterStep = coordValue + 11;
      } else if (deltaXIterStep > 0 && deltaYIterStep < 0) {
        nextIterStep = coordValue + 9;
      } else if (deltaXIterStep < 0 && deltaYIterStep < 0) {
        nextIterStep = coordValue - 11;
      } else if (deltaXIterStep < 0 && deltaYIterStep > 0) {
        nextIterStep = coordValue - 9;
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
    return this.pattern.some((d) => deltaX === d[0] && deltaY === d[1]);
  }
  checkEndEmpty(board, end) {
    return board.pieces[end] === '.' ? true : false;
  }
}

module.exports = {
  Rook,
};
