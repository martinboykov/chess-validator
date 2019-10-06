const log = require('debug')('file:reader');

class FileReader {
  constructor(file) {
    this.file = file;
    this.lineCount = 0;
  }
  dataHandler(line) {
    this.lineCount += 1;
    log('lineCount = ', this.lineCount);
    log('line = ', line);
    const regexp = /^(?:[0-9]+\.\s)([a-h][1-8])(?:-){1}([a-h][1-8])(?:[\s]{3})([a-h][1-8])(?:-){1}([a-h][1-8])$/; // eslint-disable-line max-len
    const match = line.match(regexp);
    if (!match) { // if no match returns "null"
      throw new Error(`Invalid input detected on line = ${this.lineCount}`);
    }
    log(match);
    return match;
  }
  errorHandler(err) {
    if (err.code === 'ENOENT') {
      throw new Error(`${this.file} does not exist`);
    }
    if (err.code === 'EACCES') {
      throw new Error(`Permission denied to access ${this.file}`);
    }
    throw new Error(`An error occured opening ${this.file}`);
  }
}

module.exports = {
  FileReader,
};
