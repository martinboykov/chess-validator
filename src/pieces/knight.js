const log = require('debug')('knight');
const { Piece } = require('./piece');
const { TYPES, MOVEMENT_PATTERNS } = require('../util');

class Knight extends Piece {
  constructor(pos, color) {
    super(pos, color);
    this.type = TYPES.knight;
    this.pattern = MOVEMENT_PATTERNS.knight;
    this.movementCount = 0;
  }
  validateMove(deltaX, deltaY, isEnemyAttacked,
    isEndEmpty, piece, chess, start, end) {
    const isRegularFound = this.findMovePattern(
      this.pattern.regular, deltaX, deltaY);
    log('color = ', piece.color);
    log('type = ', piece.type);
    log('moveCount = ', piece.movementCount);
    log('position = ', piece.pos);
    log('deltaX, deltaY = ', [deltaX, deltaY]);
    log('isEnemyAttacked = ', isEnemyAttacked);
    log('isEndEmpty = ', isEndEmpty);
    if (isRegularFound) {
      if (isEnemyAttacked || isEndEmpty) {
        return true;
      }
    }
    return false;
  }
  findMovePattern(pattern, deltaX, deltaY) {
    return super.findMovePattern(pattern, deltaX, deltaY);
  }
}

module.exports = {
  Knight,
};
