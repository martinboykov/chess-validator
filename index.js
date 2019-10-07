const log = require('debug')('system');
const fs = require('fs');
const rl = require('readline');
const path = require('path');
const file = path.resolve(__dirname, 'input', 'input.txt');
const { Chess } = require('./src/chess');
const { FileReader } = require('./src/util');
const isDev = process.env.NODE_ENV === 'development' ? true : false; // eslint-disable-line no-process-env

function main() { // eslint-disable-line consistent-return
  const success = 'All moves are valid';
  let finalMove = false;
  const fileReader = new FileReader(file);
  const readline = rl.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity, // to recognize all instances of CR LF
  });
  const chess = new Chess();
  chess.init();
  try {
    fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);
    readline.on('line', (line) => {
      if (finalMove) {
        throw new Error(`Can't have more moves as final move was already made`);
      }
      const moves = fileReader.dataHandler(line); // returns str.match(regexp)
      let max = 5;
      if (!moves[3]) {
        finalMove = true;
        max = 3; // if white make final move and there is no move for black
      }
      for (let i = 1; i < max; i += 2) {
        const start = moves[i];
        const finish = moves[i + 1];
        const moveOutcome = chess.makeMove(start, finish);
        if (typeof (moveOutcome) === 'string') {
          log(moveOutcome);
          if (!isDev) console.log(moveOutcome);
          process.exit(0);
        }
      }
    }).on('close', () => {
      if (fileReader.lineCount === 0) { // catch empty file case
        throw new Error(`No valid moves provided`);
      }
      log(success);
      if (!isDev) console.log(success);
    });
  } catch (err) {
    fileReader.errorHandler(err);
  }
}
main();
