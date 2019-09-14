const { Chess } = require('./chess');

const chess = new Chess();
// start game
chess.init();

// make move black
let start = 'a7';
let finish = 'a5';
chess.makeMove(start, finish);
// // make move black
// start = 'а5';
// finish = 'а4';
// chess.makeMove(start, finish);
// // make move black
// start = 'а4';
// finish = 'а3';
// chess.makeMove(start, finish);
// make move white
start = 'a2';
finish = 'a4';
chess.makeMove(start, finish);
// // make move white
// start = 'a4';
// finish = 'a5';
// chess.makeMove(start, finish);
// // make move white
// start = 'a5';
// finish = 'a6';
// chess.makeMove(start, finish);


// // make move black
// start = 'b6';
// finish = 'a5';
// chess.makeMove(start, finish);
// // make move white
// start = 'a4';
// finish = 'a5';
// chess.makeMove(start, finish);
// // make move black
// start = 'a5';
// finish = 'a4';
// chess.makeMove(start, finish);
// // make move
// start = 'a5';
// finish = 'a6';
// chess.makeMove(start, finish);
// // make move
// start = 'a6';
// finish = 'b7';
// chess.makeMove(start, finish);
// // make move
// start = 'b7';
// finish = 'b8';
// chess.makeMove(start, finish);
// // make move
// start = 'b8';
// finish = 'b9';
// chess.makeMove(start, finish);

console.log('All moves are valid');
