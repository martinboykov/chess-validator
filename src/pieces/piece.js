const log = require('debug')('piece');

const { TYPES, MOVEMENT_PATTERNS } = require('../util');

class Piece {
  constructor(pos, color) {
    this.pos = pos;
    this.color = color;
    this.type = TYPES.default;
    this.pattern = [];
  }
  findMovePattern(pattern, deltaX, deltaY) {
    return pattern.some((d) => {
      return deltaX === d[0] && deltaY === d[1];
    });
  }
}

module.exports = {
  Piece,
};
