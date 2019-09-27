const king = require('./king');
const queen = require('./queen');
const rook = require('./rook');
const bishop = require('./bishop');
const knight = require('./knight');
const pawn = require('./pawn');


module.exports = {
  ...king,
  ...queen,
  ...rook,
  ...bishop,
  ...knight,
  ...pawn,
};
