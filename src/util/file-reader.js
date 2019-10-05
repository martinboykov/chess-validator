const log = require('debug')('file:reader');

class FileReader {
  constructor() {
    this.lineCount = 0;
  }
  dataHandler(line) {
    this.lineCount += 1;
    log('lineCount = ', this.lineCount);
    log('line = ', line);
    const regexp = /^(?:[0-9]+\.\s)([a-h][1-8])(?:\-){1}([a-h][1-8])(?:[\s]{3})([a-h][1-8])(?:\-){1}([a-h][1-8])$/; // eslint-disable-line max-len
    const str = line.trim();
    let moves = str.replace(regexp, '$1 $2 $3 $4').split(' ');
    if (moves.length !== 4) {
      throw new Error(`Invalid input detected on line = ${this.lineCount}`);
    }
    moves = [[moves[0], moves[1]], [moves[2], moves[3]]];
    log(moves);
    return moves;
  }
  errorHandler(err, file) {
    if (err.code === 'ENOENT') {
      throw new Error(`${file} does not exist`);
    }
    if (err.code === 'EACCES') {
      throw new Error(`Permission denied to access ${file}`);
    }
    throw new Error(`An error occured opening ${file}`);
  }
}

module.exports = {
  FileReader,
};
