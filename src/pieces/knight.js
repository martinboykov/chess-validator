const log = require('debug')('knight');
const { Piece } = require('./piece');
const TYPES = require('../util').TYPES;
const MOVEMENT_PATTERNS = require('../util').MOVEMENT_PATTERNS;

class Knight extends Piece {
  constructor(pos, color) {
    super(pos, color);
    this.pos = pos;
    this.color = color;
    this.type = TYPES.knight;
    this.pattern = MOVEMENT_PATTERNS.lShappe;
    this.movementCount = 0;
  }
  validateMove(deltaPos, isEnemyAttacked, piece, board, start, end) {
    log(piece);
    const deltaX = deltaPos[0];
    const deltaY = deltaPos[1];
    const isRegularFound = this.findRegularPattern(deltaX, deltaY);
    log(piece);
    log('color = ', piece.color);
    log('deltaX, deltaY = ', [deltaX, deltaY]);
    log('isRegularFound = ', isRegularFound);
    if (isRegularFound) {
      const isEndEmpty = this.checkEndEmpty(board, end);
      log('isEndEmpty = ', isEndEmpty);
      if (isEnemyAttacked || isEndEmpty) {
        return true;
      }
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
  Knight,
};
