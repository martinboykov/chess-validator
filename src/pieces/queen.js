const log = require('debug')('queen');
const { Piece } = require('./piece');
const { TYPES, MOVEMENT_PATTERNS } = require('../util');

class Queen extends Piece {
  constructor(pos, color) {
    super(pos, color);
    this.type = TYPES.queen;
    this.pattern = {
      regular: [
        ...MOVEMENT_PATTERNS.up,
        ...MOVEMENT_PATTERNS.diag.up_right,
        ...MOVEMENT_PATTERNS.right,
        ...MOVEMENT_PATTERNS.diag.down_right,
        ...MOVEMENT_PATTERNS.down,
        ...MOVEMENT_PATTERNS.diag.down_left,
        ...MOVEMENT_PATTERNS.left,
        ...MOVEMENT_PATTERNS.diag.up_left,
      ],
    };
    this.movementCount = 0;
  }
  validateMove(deltaX, deltaY, isEnemyAttacked,
    isEndEmpty, piece, board, start, end) {
      const isRegularFound = this.findMovePattern(
        this.pattern.regular, deltaX, deltaY);
    log(piece);
    log('color = ', piece.color);
    log('deltaX, deltaY = ', [deltaX, deltaY]);
    log('isRegularFound = ', isRegularFound);
    if (isRegularFound) {
      if (isEnemyAttacked || isEndEmpty) {
        let isPathBlocked;
        if (Math.abs(deltaX) !== Math.abs(deltaY)) {
          // straight move pattern
          isPathBlocked = this.obsticleCheckStraight( // if the previous conditions are met => check for obsticles
            start, end, deltaX, deltaY, piece, board);
        } else if (Math.abs(deltaX) === Math.abs(deltaY)) {
          // diag move pattern
          isPathBlocked = this.obsticleCheckDiagonal( // if the previous conditions are met => check for obsticles
            start, end, deltaX, deltaY, piece, board);
        }
        log('isPathBlocked = ', isPathBlocked);
        if (!isPathBlocked) return true;
      }
    }
    return false;
  }
  obsticleCheckStraight(start, end, deltaX, deltaY, piece, board) {
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
  obsticleCheckDiagonal(start, end, deltaX, deltaY, piece, board) {
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
  findMovePattern(pattern, deltaX, deltaY) {
    return super.findMovePattern(pattern, deltaX, deltaY);
  }
}

module.exports = {
  Queen,
};
