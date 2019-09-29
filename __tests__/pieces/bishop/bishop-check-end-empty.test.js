const COLORS = require('../../../src/util').COLORS;
const { Board } = require('../../../src/board');
const { Bishop } = require('../../../src/pieces/bishop');

describe('bishop', () => {
  beforeAll(() => {

  });
  describe('check if end pos is empty', () => {
    it('should return "true" if bishop start pos is "e4" and end pos is "f5" without piece at end', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'f5';
      const board = new Board();
      const bishop = new Bishop(start, COLORS.black);
      board.pieces[bishop.pos] = bishop;
      const result = bishop.checkEndEmpty(board, end);
      expect(result).toBe(true);
    });
    it('should return "false" if bishop start pos is "e4" and end pos is "f5" with same color piece at end', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'f5';
      const board = new Board();
      const bishop = new Bishop(start, COLORS.black);
      board.pieces[end] = new Bishop(end, COLORS.black);
      const result = bishop.checkEndEmpty(board, end);
      expect(result).toBe(false);
    });
    it('should return "false" if bishop start pos is "e4" and end pos is "f5" with different color piece at end', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'f5';
      const board = new Board();
      const bishop = new Bishop(start, COLORS.black);
      board.pieces[end] = new Bishop(end, COLORS.white);
      const result = bishop.checkEndEmpty(board, end);
      expect(result).toBe(false);
    });
  });
});
