const COLORS = require('../../../src/util').COLORS;
const { Board } = require('../../../src/board');
const { Knight } = require('../../../src/pieces/knight');

describe('knight', () => {
  beforeAll(() => {

  });
  describe('check if end pos is empty', () => {
    it('should return "true" if knight start pos is "e4" and end pos is "f6" without piece at end', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'f6';
      const board = new Board();
      const knight = new Knight(start, COLORS.black);
      board.pieces[knight.pos] = knight;
      const result = knight.checkEndEmpty(board, end);
      expect(result).toBe(true);
    });
    it('should return "false" if knight start pos is "e4" and end pos is "f6" with same color piece at end', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'f6';
      const board = new Board();
      const knight = new Knight(start, COLORS.black);
      board.pieces[end] = new Knight(end, COLORS.black);
      const result = knight.checkEndEmpty(board, end);
      expect(result).toBe(false);
    });
    it('should return "false" if knight start pos is "e4" and end pos is "f6" with different color piece at end', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'f6';
      const board = new Board();
      const knight = new Knight(start, COLORS.black);
      board.pieces[end] = new Knight(end, COLORS.white);
      const result = knight.checkEndEmpty(board, end);
      expect(result).toBe(false);
    });
  });
});
