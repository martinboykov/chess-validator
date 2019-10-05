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
  const fileReader = new FileReader();
  // let lineCounter = 1;
  const readline = rl.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity, // to recognize all instances of CR LF
  });
  const chess = new Chess();
  chess.init();
  try {
    fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);
    readline.on('line', (line) => {
      const moves = fileReader.dataHandler(line);
      for (let i = 0; i < moves.length; i++) {
        const start = moves[i][0];
        const finish = moves[i][1];
        const moveOutcome = chess.makeMove(start, finish);
        if (typeof (moveOutcome) === 'string') {
          log(moveOutcome);
          if (!isDev) console.log(moveOutcome);
          process.exit(0);
        }
      }
    }).on('close', () => {
      log(success);
      if (!isDev) console.log(success);
    });
  } catch (err) {
    fileReader.errorHandler(err, file);
  }
}
main();
