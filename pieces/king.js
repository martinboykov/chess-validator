const { Piece } = require('./piece');

class King extends Piece {
  constructor(type, pos) {
    super(type, pos);
  }
}

module.exports = {
  King,
};
