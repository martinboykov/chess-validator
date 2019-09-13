// ...
class Board {
  constructor(pieces, coord, coordRev) {
    this.pieces = {
      a8: 0, b8: 0, c8: 0, d8: 0, e8: 0, f8: 0, g8: 0, h8: 0,
      a7: 0, b7: 0, c7: 0, d7: 0, e7: 0, f7: 0, g7: 0, h7: 0,
      a6: 0, b6: 0, c6: 0, d6: 0, e6: 0, f6: 0, g6: 0, h6: 0,
      a5: 0, b5: 0, c5: 0, d5: 0, e5: 0, f5: 0, g5: 0, h5: 0,
      a4: 0, b4: 0, c4: 0, d4: 0, e4: 0, f4: 0, g4: 0, h4: 0,
      a3: 0, b3: 0, c3: 0, d3: 0, e3: 0, f3: 0, g3: 0, h3: 0,
      a2: 0, b2: 0, c2: 0, d2: 0, e2: 0, f2: 0, g2: 0, h2: 0,
      a1: 0, b1: 0, c1: 0, d1: 0, e1: 0, f1: 0, g1: 0, h1: 0,
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
    // this.coordRev = {
    //   18: 'a8', 28: 'b8', 38: 'c8', 48: 'd8', 58: 'e8', 68: 'f8', 78: 'g8', 88: 'h8',
    //   17: 'a7', 27: 'b7', 37: 'c7', 47: 'd7', 57: 'e7', 67: 'f7', 77: 'g7', 87: 'h7',
    //   16: 'a6', 26: 'b6', 36: 'c6', 46: 'd6', 56: 'e6', 66: 'f6', 76: 'g6', 86: 'h6',
    //   15: 'a5', 25: 'b5', 35: 'c5', 45: 'd5', 55: 'e5', 65: 'f5', 75: 'g5', 85: 'h5',
    //   14: 'a4', 24: 'b4', 34: 'c4', 44: 'd4', 54: 'e4', 64: 'f4', 74: 'g4', 84: 'h4',
    //   13: 'a3', 23: 'b3', 33: 'c3', 43: 'd3', 53: 'e3', 63: 'f3', 73: 'g3', 83: 'h3',
    //   12: 'a2', 22: 'b2', 32: 'c2', 42: 'd2', 52: 'e2', 62: 'f2', 72: 'g2', 82: 'h2',
    //   11: 'a1', 21: 'b1', 31: 'c1', 41: 'd1', 51: 'e1', 61: 'f1', 71: 'g1', 81: 'h1',
    // };
  }
  calculateDelta(start, finish) {
    return [+this.coord[start][0] - +this.coord[finish][0], +this.coord[start][1] - +this.coord[finish][1]];
  }
  print() {
    console.log('///////////////////////////////////////////////////////////');
    console.log(`${this.pieces.a8.type || 0}, ${this.pieces.b8.type || 0}, ${this.pieces.c8.type || 0}, ${this.pieces.d8.type || 0}, ${this.pieces.e8.type || 0}, ${this.pieces.f8.type || 0}, ${this.pieces.g8.type || 0}, ${this.pieces.h8.type || 0}`);
    console.log(`${this.pieces.a7.type || 0}, ${this.pieces.b7.type || 0}, ${this.pieces.c7.type || 0}, ${this.pieces.d7.type || 0}, ${this.pieces.e7.type || 0}, ${this.pieces.f7.type || 0}, ${this.pieces.g7.type || 0}, ${this.pieces.h7.type || 0}`);
    console.log(`${this.pieces.a6.type || 0}, ${this.pieces.b6.type || 0}, ${this.pieces.c6.type || 0}, ${this.pieces.d6.type || 0}, ${this.pieces.e6.type || 0}, ${this.pieces.f6.type || 0}, ${this.pieces.g6.type || 0}, ${this.pieces.h6.type || 0}`);
    console.log(`${this.pieces.a5.type || 0}, ${this.pieces.b5.type || 0}, ${this.pieces.c5.type || 0}, ${this.pieces.d5.type || 0}, ${this.pieces.e5.type || 0}, ${this.pieces.f5.type || 0}, ${this.pieces.g5.type || 0}, ${this.pieces.h5.type || 0}`);
    console.log(`${this.pieces.a4.type || 0}, ${this.pieces.b4.type || 0}, ${this.pieces.c4.type || 0}, ${this.pieces.d4.type || 0}, ${this.pieces.e4.type || 0}, ${this.pieces.f4.type || 0}, ${this.pieces.g4.type || 0}, ${this.pieces.h4.type || 0}`);
    console.log(`${this.pieces.a3.type || 0}, ${this.pieces.b3.type || 0}, ${this.pieces.c3.type || 0}, ${this.pieces.d3.type || 0}, ${this.pieces.e3.type || 0}, ${this.pieces.f3.type || 0}, ${this.pieces.g3.type || 0}, ${this.pieces.h3.type || 0}`);
    console.log(`${this.pieces.a2.type || 0}, ${this.pieces.b2.type || 0}, ${this.pieces.c2.type || 0}, ${this.pieces.d2.type || 0}, ${this.pieces.e2.type || 0}, ${this.pieces.f2.type || 0}, ${this.pieces.g2.type || 0}, ${this.pieces.h2.type || 0}`);
    console.log(`${this.pieces.a1.type || 0}, ${this.pieces.b1.type || 0}, ${this.pieces.c1.type || 0}, ${this.pieces.d1.type || 0}, ${this.pieces.e1.type || 0}, ${this.pieces.f1.type || 0}, ${this.pieces.g1.type || 0}, ${this.pieces.h1.type || 0}`);
    console.log('///////////////////////////////////////////////////////////');
  }
}
module.exports = {
  Board,
};
