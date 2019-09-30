const COLORS = require('../../../src/util').COLORS;
const { Board } = require('../../../src/board');
const { Piece } = require('../../../src/pieces/piece');
const { Rook } = require('../../../src/pieces/rook');

describe('rook', () => {
  beforeAll(() => {

  });
  describe('validate move', () => {
    it('should return "true" if rook start pos is "e4" and end pos is "g4" without piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'g4';
      const isEnemyAttacked = false;
      const isEndEmpty = true;
      const board = new Board();
      const rook = new Rook(start, COLORS.black);
      board.pieces[start] = rook;
      rook.findMovePattern = jest.fn().mockImplementation(() => {
        return true;
      });
      rook.obsticleCheck = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = rook.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, rook, board, start, end);
      expect(result).toBe(true); // no obstruction
    });
    it('should return "false" if rook start pos is "e4" and end pos is "h6" without piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'h6';
      const isEnemyAttacked = false;
      const isEndEmpty = true;
      const board = new Board();
      const rook = new Rook(start, COLORS.black);
      board.pieces[start] = rook;
      rook.findMovePattern = jest.fn().mockImplementation(() => {
        return false;
      });
      rook.obsticleCheck = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = rook.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, rook, board, start, end);
      expect(result).toBe(false); // no obstruction
    });
    it('should return "true" if rook start pos is "e4" and end pos is "e6" with enemy piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'e6';
      const isEnemyAttacked = true;
      const isEndEmpty = false;
      const board = new Board();
      const rook = new Rook(start, COLORS.black);
      board.pieces[start] = rook;
      board.pieces[end] = new Piece(end, COLORS.white);
      rook.findMovePattern = jest.fn().mockImplementation(() => {
        return true;
      });
      rook.obsticleCheck = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = rook.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, rook, board, start, end);
      expect(result).toBe(true); // no obstruction
    });
    it('should return "false" if rook start pos is "e4" and end pos is "e6" with enemy piece at end and with obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'e6';
      const isEnemyAttacked = true;
      const isEndEmpty = false;

      const board = new Board();
      const rook = new Rook(start, COLORS.black);
      board.pieces[start] = rook;
      board.pieces[end] = new Piece(end, COLORS.white);
      rook.findMovePattern = jest.fn().mockImplementation(() => {
        return true;
      });
      rook.obsticleCheck = jest.fn().mockImplementation(() => {
        return true;
      });
      const delta = board.calculateDelta(end, start);
      const result = rook.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, rook, board, start, end);
      expect(result).toBe(false); // no obstruction
    });
    it('should return "false" if rook start pos is "e4" and end pos is "g6" with same color piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'g6';
      const isEnemyAttacked = false;
      const isEndEmpty = false;
      const board = new Board();
      const rook = new Rook(start, COLORS.black);
      board.pieces[start] = rook;
      board.pieces[end] = new Piece(end, COLORS.black);
      rook.findMovePattern = jest.fn().mockImplementation(() => {
        return true;
      });
      rook.obsticleCheck = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = rook.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, rook, board, start, end);
      expect(result).toBe(false); // no obstruction
    });
  });
});
