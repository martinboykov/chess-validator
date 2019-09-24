const TYPES = require('../util').TYPES;
class Piece {
  constructor(pos, color) {
    this.pos = pos;
    this.color = color;
    this.type = TYPES.default;
  }
}

module.exports = {
  Piece,
};
