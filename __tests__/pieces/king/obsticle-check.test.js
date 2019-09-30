const { COLORS } = require('../../../src/util');
const { Board } = require('../../../src/board');
const { King } = require('../../../src/pieces/king');
const { Piece } = require('../../../src/pieces/piece');

describe('king', () => {
  beforeAll(() => {

  });
  describe('obsticle check', () => {
    it(`should return "false" if there is no obstruction on the path`, () => { // eslint-disable-line max-len
      const start = 'e1';
      const p1 = 'b1';
      const p2 = 'c1';
      const p3 = 'd1';
      const path = [p1, p2, p3];
      const board = new Board();
      const king = new King(start, COLORS.black);
      board.pieces[start] = king;
      const result = king.obsticleCheck(path, board);
      expect(result).toBe(false); // no obstruction
    });
    it(`should return "false" if there is no obstruction on the path`, () => { // eslint-disable-line max-len
      const start = 'e1';
      const p1 = 'b1';
      const p2 = 'c1';
      const p3 = 'd1';
      const pOther = 'h1';
      const path = [p1, p2, p3];
      const board = new Board();
      const king = new King(start, COLORS.black);
      board.pieces[start] = king;
      board.pieces[pOther] = new Piece(pOther, COLORS.black);
      const result = king.obsticleCheck(path, board);
      expect(result).toBe(false); // no obstruction
    });
    it(`should return "true" if there is obstruction on the path on pos p1`, () => { // eslint-disable-line max-len
      const start = 'e1';
      const p1 = 'b1';
      const p2 = 'c1';
      const p3 = 'd1';
      const path = [p1, p2, p3];
      const board = new Board();
      const king = new King(start, COLORS.black);
      board.pieces[start] = king;
      board.pieces[p1] = new Piece(p1, COLORS.black);
      const result = king.obsticleCheck(path, board);
      expect(result).toBe(true); // no obstruction
    });
    it(`should return "true" if there is obstruction on the path on pos p2`, () => { // eslint-disable-line max-len
      const start = 'e1';
      const p1 = 'b1';
      const p2 = 'c1';
      const p3 = 'd1';
      const path = [p1, p2, p3];
      const board = new Board();
      const king = new King(start, COLORS.black);
      board.pieces[start] = king;
      board.pieces[p2] = new Piece(p2, COLORS.black);
      const result = king.obsticleCheck(path, board);
      expect(result).toBe(true); // no obstruction
    });
    it(`should return "true" if there is obstruction on the path on pos p3`, () => { // eslint-disable-line max-len
      const start = 'e1';
      const p1 = 'b1';
      const p2 = 'c1';
      const p3 = 'd1';
      const path = [p1, p2, p3];
      const board = new Board();
      const king = new King(start, COLORS.black);
      board.pieces[start] = king;
      board.pieces[p3] = new Piece(p3, COLORS.black);
      const result = king.obsticleCheck(path, board);
      expect(result).toBe(true); // no obstruction
    });
    it(`should return "true" if there is obstruction on the path on pos p1,p2,p3`, () => { // eslint-disable-line max-len
      const start = 'e1';
      const p1 = 'b1';
      const p2 = 'c1';
      const p3 = 'd1';
      const path = [p1, p2, p3];
      const board = new Board();
      const king = new King(start, COLORS.black);
      board.pieces[start] = king;
      board.pieces[p1] = new Piece(p1, COLORS.black);
      board.pieces[p2] = new Piece(p2, COLORS.black);
      board.pieces[p3] = new Piece(p3, COLORS.black);
      const result = king.obsticleCheck(path, board);
      expect(result).toBe(true); // no obstruction
    });
  });
});
