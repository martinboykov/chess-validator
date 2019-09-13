const { Piece } = require('./piece');

class Bishop extends Piece {
  constructor(type, pos) {
    super(type, pos);
  }
}

module.exports = {
  Bishop,
};
