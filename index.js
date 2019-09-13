const { Chess } = require('./chess');

const chess = new Chess();

chess.init();
const start = 'a2';
const finish = 'b7';
chess.makeMove(start, finish);
