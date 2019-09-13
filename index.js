const { Chess } = require('./chess');

const chess = new Chess();
// start game
chess.init();
// make move
let start = 'a2';
let finish = 'a3';
chess.makeMove(start, finish);
// make move
start = 'a3';
finish = 'a4';
chess.makeMove(start, finish);
// make move
start = 'a4';
finish = 'a5';
chess.makeMove(start, finish);
// make move
start = 'a5';
finish = 'a6';
chess.makeMove(start, finish);
// make move
start = 'a6';
finish = 'a7';
chess.makeMove(start, finish);
