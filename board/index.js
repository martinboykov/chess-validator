const chalk = require('chalk');
const log = console.log;
class Board {
  constructor() {
    /*eslint-disable */
    this.pieces = {
      a8: '.', b8: '.', c8: '.', d8: '.', e8: '.', f8: '.', g8: '.', h8: '.',
      a7: '.', b7: '.', c7: '.', d7: '.', e7: '.', f7: '.', g7: '.', h7: '.',
      a6: '.', b6: '.', c6: '.', d6: '.', e6: '.', f6: '.', g6: '.', h6: '.',
      a5: '.', b5: '.', c5: '.', d5: '.', e5: '.', f5: '.', g5: '.', h5: '.',
      a4: '.', b4: '.', c4: '.', d4: '.', e4: '.', f4: '.', g4: '.', h4: '.',
      a3: '.', b3: '.', c3: '.', d3: '.', e3: '.', f3: '.', g3: '.', h3: '.',
      a2: '.', b2: '.', c2: '.', d2: '.', e2: '.', f2: '.', g2: '.', h2: '.',
      a1: '.', b1: '.', c1: '.', d1: '.', e1: '.', f1: '.', g1: '.', h1: '.',
    };
    this.coord = {
      a8: '18', b8: '28', c8: '38', d8: '48', e8: '58', f8: '68', g8: '78', h8: '88',
      a7: '17', b7: '27', c7: '37', d7: '47', e7: '57', f7: '67', g7: '77', h7: '87',
      a6: '16', b6: '26', c6: '36', d6: '46', e6: '56', f6: '66', g6: '76', h6: '86',
      a5: '15', b5: '25', c5: '35', d5: '45', e5: '55', f5: '65', g5: '75', h5: '85',
      a4: '14', b4: '24', c4: '34', d4: '44', e4: '54', f4: '64', g4: '74', h4: '84',
      a3: '13', b3: '23', c3: '33', d3: '43', e3: '53', f3: '63', g3: '73', h3: '83',
      a2: '12', b2: '22', c2: '32', d2: '42', e2: '52', f2: '62', g2: '72', h2: '82',
      a1: '11', b1: '21', c1: '31', d1: '41', e1: '51', f1: '61', g1: '71', h1: '81',
    };
    this.coordRev = {
      18: 'a8', 28: 'b8', 38: 'c8', 48: 'd8', 58: 'e8', 68: 'f8', 78: 'g8', 88: 'h8',
      17: 'a7', 27: 'b7', 37: 'c7', 47: 'd7', 57: 'e7', 67: 'f7', 77: 'g7', 87: 'h7',
      16: 'a6', 26: 'b6', 36: 'c6', 46: 'd6', 56: 'e6', 66: 'f6', 76: 'g6', 86: 'h6',
      15: 'a5', 25: 'b5', 35: 'c5', 45: 'd5', 55: 'e5', 65: 'f5', 75: 'g5', 85: 'h5',
      14: 'a4', 24: 'b4', 34: 'c4', 44: 'd4', 54: 'e4', 64: 'f4', 74: 'g4', 84: 'h4',
      13: 'a3', 23: 'b3', 33: 'c3', 43: 'd3', 53: 'e3', 63: 'f3', 73: 'g3', 83: 'h3',
      12: 'a2', 22: 'b2', 32: 'c2', 42: 'd2', 52: 'e2', 62: 'f2', 72: 'g2', 82: 'h2',
      11: 'a1', 21: 'b1', 31: 'c1', 41: 'd1', 51: 'e1', 61: 'f1', 71: 'g1', 81: 'h1',
    };
  }
  /* eslint-enable */
  calculateDelta(start, finish) {
    return [
      parseInt(this.coord[start][0], 10) - parseInt(this.coord[finish][0], 10),
      parseInt(this.coord[start][1], 10) - parseInt(this.coord[finish][1], 10),
    ];
  }
  /*eslint-disable */
  print() {
    // console.log('///////////////////////////////////////////////////////////');
    log(
      (this.pieces.a8.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.a8.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.a8.type || ' '}` + ' ')) +
      (this.pieces.b8.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.b8.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.b8.type || ' '}` + ' ')) +
      (this.pieces.c8.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.c8.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.c8.type || ' '}` + ' ')) +
      (this.pieces.d8.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.d8.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.d8.type || ' '}` + ' ')) +
      (this.pieces.e8.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.e8.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.e8.type || ' '}` + ' ')) +
      (this.pieces.f8.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.f8.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.f8.type || ' '}` + ' ')) +
      (this.pieces.g8.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.g8.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.g8.type || ' '}` + ' ')) +
      (this.pieces.h8.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.h8.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.h8.type || ' '}` + ' '))
    );
    log(
      (this.pieces.a7.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.a7.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.a7.type || ' '}` + ' ')) +
      (this.pieces.b7.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.b7.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.b7.type || ' '}` + ' ')) +
      (this.pieces.c7.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.c7.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.c7.type || ' '}` + ' ')) +
      (this.pieces.d7.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.d7.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.d7.type || ' '}` + ' ')) +
      (this.pieces.color ?
        chalk.red.e7.bgYellow.bold(' ' + `${this.pieces.e7.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.e7.type || ' '}` + ' ')) +
      (this.pieces.f7.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.f7.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.f7.type || ' '}` + ' ')) +
      (this.pieces.g7.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.g7.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.g7.type || ' '}` + ' ')) +
      (this.pieces.h7.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.h7.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.h7.type || ' '}` + ' '))
    );
    log(
      (this.pieces.a6.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.a6.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.a6.type || ' '}` + ' ')) +
      (this.pieces.b6.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.b6.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.b6.type || ' '}` + ' ')) +
      (this.pieces.c6.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.c6.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.c6.type || ' '}` + ' ')) +
      (this.pieces.d6.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.d6.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.d6.type || ' '}` + ' ')) +
      (this.pieces.e6.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.e6.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.e6.type || ' '}` + ' ')) +
      (this.pieces.f6.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.f6.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.f6.type || ' '}` + ' ')) +
      (this.pieces.g6.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.g6.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.g6.type || ' '}` + ' ')) +
      (this.pieces.h6.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.h6.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.h6.type || ' '}` + ' '))
    );
    log(
      (this.pieces.a5.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.a5.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.a5.type || ' '}` + ' ')) +
      (this.pieces.b5.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.b5.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.b5.type || ' '}` + ' ')) +
      (this.pieces.c5.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.c5.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.c5.type || ' '}` + ' ')) +
      (this.pieces.d5.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.d5.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.d5.type || ' '}` + ' ')) +
      (this.pieces.e5.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.e5.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.e5.type || ' '}` + ' ')) +
      (this.pieces.f5.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.f5.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.f5.type || ' '}` + ' ')) +
      (this.pieces.g5.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.g5.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.g5.type || ' '}` + ' ')) +
      (this.pieces.h5.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.h5.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.h5.type || ' '}` + ' '))
    );
    log(
      (this.pieces.a4.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.a4.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.a4.type || ' '}` + ' ')) +
      (this.pieces.b4.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.b4.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.b4.type || ' '}` + ' ')) +
      (this.pieces.c4.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.c4.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.c4.type || ' '}` + ' ')) +
      (this.pieces.d4.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.d4.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.d4.type || ' '}` + ' ')) +
      (this.pieces.e4.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.e4.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.e4.type || ' '}` + ' ')) +
      (this.pieces.f4.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.f4.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.f4.type || ' '}` + ' ')) +
      (this.pieces.g4.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.g4.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.g4.type || ' '}` + ' ')) +
      (this.pieces.h4.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.h4.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.h4.type || ' '}` + ' '))
    );
    log(
      (this.pieces.a3.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.a3.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.a3.type || ' '}` + ' ')) +
      (this.pieces.b3.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.b3.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.b3.type || ' '}` + ' ')) +
      (this.pieces.c3.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.c3.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.c3.type || ' '}` + ' ')) +
      (this.pieces.d3.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.d3.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.d3.type || ' '}` + ' ')) +
      (this.pieces.e3.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.e3.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.e3.type || ' '}` + ' ')) +
      (this.pieces.f3.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.f3.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.f3.type || ' '}` + ' ')) +
      (this.pieces.g3.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.g3.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.g3.type || ' '}` + ' ')) +
      (this.pieces.h3.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.h3.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.h3.type || ' '}` + ' '))
    );
    log(
      (this.pieces.a2.color ?
        chalk.red.bold.bgWhite(' ' + `${this.pieces.a2.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.a2.type || ' '}` + ' ')) +
      (this.pieces.b2.color ?
        chalk.red.bold.bgYellow(' ' + `${this.pieces.b2.type || ' '}` + ' ') :
        chalk.blue.bold.bgYellow(' ' + `${this.pieces.b2.type || ' '}` + ' ')) +
      (this.pieces.c2.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.c2.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.c2.type || ' '}` + ' ')) +
      (this.pieces.d2.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.d2.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.d2.type || ' '}` + ' ')) +
      (this.pieces.e2.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.e2.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.e2.type || ' '}` + ' ')) +
      (this.pieces.f2.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.f2.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.f2.type || ' '}` + ' ')) +
      (this.pieces.g2.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.g2.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.g2.type || ' '}` + ' ')) +
      (this.pieces.h2.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.h2.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.h2.type || ' '}` + ' '))
    );
    log(
      (this.pieces.a1.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.a1.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.a1.type || ' '}` + ' ')) +
      (this.pieces.b1.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.b1.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.b1.type || ' '}` + ' ')) +
      (this.pieces.c1.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.c1.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.c1.type || ' '}` + ' ')) +
      (this.pieces.d1.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.d1.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.d1.type || ' '}` + ' ')) +
      (this.pieces.e1.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.e1.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.e1.type || ' '}` + ' ')) +
      (this.pieces.f1.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.f1.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.f1.type || ' '}` + ' ')) +
      (this.pieces.g1.color ?
        chalk.red.bgYellow.bold(' ' + `${this.pieces.g1.type || ' '}` + ' ') :
        chalk.blue.bgYellow.bold(' ' + `${this.pieces.g1.type || ' '}` + ' ')) +
      (this.pieces.h1.color ?
        chalk.red.bgWhite.bold(' ' + `${this.pieces.h1.type || ' '}` + ' ') :
        chalk.blue.bgWhite.bold(' ' + `${this.pieces.h1.type || ' '}` + ' '))
    );
    // this.printRaw();
  }
  printRaw() {
    console.log('////////////////////////');
    console.log(`${this.pieces.a8.type || '.'}, ${this.pieces.b8.type || '.'}, ${this.pieces.c8.type || '.'}, ${this.pieces.d8.type || '.'}, ${this.pieces.e8.type || '.'}, ${this.pieces.f8.type || '.'}, ${this.pieces.g8.type || '.'}, ${this.pieces.h8.type || '.'}`);
    console.log(`${this.pieces.a7.type || '.'}, ${this.pieces.b7.type || '.'}, ${this.pieces.c7.type || '.'}, ${this.pieces.d7.type || '.'}, ${this.pieces.e7.type || '.'}, ${this.pieces.f7.type || '.'}, ${this.pieces.g7.type || '.'}, ${this.pieces.h7.type || '.'}`);
    console.log(`${this.pieces.a6.type || '.'}, ${this.pieces.b6.type || '.'}, ${this.pieces.c6.type || '.'}, ${this.pieces.d6.type || '.'}, ${this.pieces.e6.type || '.'}, ${this.pieces.f6.type || '.'}, ${this.pieces.g6.type || '.'}, ${this.pieces.h6.type || '.'}`);
    console.log(`${this.pieces.a5.type || '.'}, ${this.pieces.b5.type || '.'}, ${this.pieces.c5.type || '.'}, ${this.pieces.d5.type || '.'}, ${this.pieces.e5.type || '.'}, ${this.pieces.f5.type || '.'}, ${this.pieces.g5.type || '.'}, ${this.pieces.h5.type || '.'}`);
    console.log(`${this.pieces.a4.type || '.'}, ${this.pieces.b4.type || '.'}, ${this.pieces.c4.type || '.'}, ${this.pieces.d4.type || '.'}, ${this.pieces.e4.type || '.'}, ${this.pieces.f4.type || '.'}, ${this.pieces.g4.type || '.'}, ${this.pieces.h4.type || '.'}`);
    console.log(`${this.pieces.a3.type || '.'}, ${this.pieces.b3.type || '.'}, ${this.pieces.c3.type || '.'}, ${this.pieces.d3.type || '.'}, ${this.pieces.e3.type || '.'}, ${this.pieces.f3.type || '.'}, ${this.pieces.g3.type || '.'}, ${this.pieces.h3.type || '.'}`);
    console.log(`${this.pieces.a2.type || '.'}, ${this.pieces.b2.type || '.'}, ${this.pieces.c2.type || '.'}, ${this.pieces.d2.type || '.'}, ${this.pieces.e2.type || '.'}, ${this.pieces.f2.type || '.'}, ${this.pieces.g2.type || '.'}, ${this.pieces.h2.type || '.'}`);
    console.log(`${this.pieces.a1.type || '.'}, ${this.pieces.b1.type || '.'}, ${this.pieces.c1.type || '.'}, ${this.pieces.d1.type || '.'}, ${this.pieces.e1.type || '.'}, ${this.pieces.f1.type || '.'}, ${this.pieces.g1.type || '.'}, ${this.pieces.h1.type || '.'}`);
    console.log('////////////////////////');

  }
  /* eslint-enable */
}
module.exports = {
  Board,
};
