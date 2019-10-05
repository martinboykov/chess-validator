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
    if (pattern[[deltaX, deltaY]]) return true;
    return false;
  }
}

module.exports = {
  Piece,
};
