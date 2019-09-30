const log = require('debug')('knight');
const { Piece } = require('./piece');
const { TYPES, MOVEMENT_PATTERNS } = require('../util');

class Knight extends Piece {
  constructor(pos, color) {
    super(pos, color);
    this.type = TYPES.knight;
    this.pattern = {
      regular: MOVEMENT_PATTERNS.lShappe,
    };
    this.movementCount = 0;
  }
  validateMove(deltaX, deltaY, isEnemyAttacked,
    isEndEmpty, piece, board, start, end) {
    const isRegularFound = this.findRegularPattern(
      this.pattern.regular, deltaX, deltaY);
    log(piece);
    log('color = ', piece.color);
    log('deltaX, deltaY = ', [deltaX, deltaY]);
    log('isRegularFound = ', isRegularFound);
    if (isRegularFound) {
      if (isEnemyAttacked || isEndEmpty) {
        return true;
      }
    }
    return false;
  }
  findRegularPattern(pattern, deltaX, deltaY) {
    return super.findRegularPattern(pattern, deltaX, deltaY);
  }
}

module.exports = {
  Knight,
};
