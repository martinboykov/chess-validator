const COLORS = require('../../../src/util').COLORS;
const { Board } = require('../../../src/board');
const { Rook } = require('../../../src/pieces/rook');

describe('rook', () => {
  beforeAll(() => {

  });
  describe('check if end pos is empty', () => {
    it('should return "true" if rook start pos is "e4" and end pos is "f4" without piece at end', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'f4';
      const board = new Board();
      const rook = new Rook(start, COLORS.black);
      board.pieces[rook.pos] = rook;
      const result = rook.checkEndEmpty(board, end);
      expect(result).toBe(true);
    });
    it('should return "false" if rook start pos is "e4" and end pos is "f4" with same color piece at end', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'f4';
      const board = new Board();
      const rook = new Rook(start, COLORS.black);
      board.pieces[end] = new Rook(end, COLORS.black);
      const result = rook.checkEndEmpty(board, end);
      expect(result).toBe(false);
    });
    it('should return "false" if rook start pos is "e4" and end pos is "f4" with different color piece at end', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'f4';
      const board = new Board();
      const rook = new Rook(start, COLORS.black);
      board.pieces[end] = new Rook(end, COLORS.white);
      const result = rook.checkEndEmpty(board, end);
      expect(result).toBe(false);
    });
  });
});
