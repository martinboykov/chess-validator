const { Piece } = require('./piece');

class Rook extends Piece {
  constructor(type, pos) {
    super(type, pos);
  }
}

module.exports = {
  Rook,
};
