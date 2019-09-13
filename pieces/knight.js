const { Piece } = require('./piece');
class Knight extends Piece {
  constructor(type, pos) {
    super(type, pos);
  }
}

module.exports = {
  Knight,
};
