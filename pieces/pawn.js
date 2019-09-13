const { Piece } = require('./piece');

class Pawn extends Piece {
  constructor(type, posX, posY) {
    super(type, posX, posY);
  }
}

module.exports = {
  Pawn,
};
