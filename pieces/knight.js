const log = require('debug')('knight');
const { Piece } = require('./piece');
const TYPES = require('../util').TYPES;
const MOVEMENT_PATTERNS = require('../util').MOVEMENT_PATTERNS;
const isDev = process.env.NODE_ENV === 'development' ? true : false; // eslint-disable-line no-process-env

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
    const isRegularFound = piece.color ?
      this.pattern.some((d) => {
        return deltaX === d[0] && deltaY === d[1];
      }) :
      this.pattern.some((d) => {
        return deltaX === d[0] && deltaY === d[1];
      });
    const isEndEmpty = board.pieces[end] === '.' ? true : false;
    if (isEnemyAttacked || isEndEmpty) {
      log('isEnemyAttacked = ', isEnemyAttacked);
      log('color = ', piece.color);
      log('deltaX, deltaY = ', [deltaX, deltaY]);
      if (isRegularFound) return true;
    }
    // no knight movement pattern found or on end is piece with same color => false
    return false;
  }
}

module.exports = {
  Knight,
};
