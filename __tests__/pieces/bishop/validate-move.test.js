const COLORS = require('../../../src/util').COLORS;
const { Board } = require('../../../src/board');
const { Piece } = require('../../../src/pieces/piece');
const { Bishop } = require('../../../src/pieces/bishop');

describe('bishop', () => {
  beforeAll(() => {

  });
  describe('validate move', () => {
    it('should return "true" if bishop start pos is "e4" and end pos is "g6" without piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'g6';
      const isEnemyAttacked = false;
      const isEndEmpty = true;
      const board = new Board();
      const bishop = new Bishop(start, COLORS.black);
      board.pieces[start] = bishop;
      bishop.findMovePattern = jest.fn().mockImplementation(() => {
        return true;
      });
      bishop.obsticleCheck = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = bishop.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, bishop, board, start, end);
      expect(result).toBe(true); // no obstruction
    });
    it('should return "false" if bishop start pos is "e4" and end pos is "h6" without piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'h6';
      const isEnemyAttacked = false;
      const isEndEmpty = true;
      const board = new Board();
      const bishop = new Bishop(start, COLORS.black);
      board.pieces[start] = bishop;
      bishop.findMovePattern = jest.fn().mockImplementation(() => {
        return false;
      });
      bishop.obsticleCheck = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = bishop.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, bishop, board, start, end);
      expect(result).toBe(false); // no obstruction
    });
    it('should return "true" if bishop start pos is "e4" and end pos is "g6" with enemy piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'g6';
      const isEnemyAttacked = true;
      const isEndEmpty = false;
      const board = new Board();
      const bishop = new Bishop(start, COLORS.black);
      board.pieces[start] = bishop;
      board.pieces[end] = new Piece(end, COLORS.white);
      bishop.findMovePattern = jest.fn().mockImplementation(() => {
        return true;
      });
      bishop.obsticleCheck = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = bishop.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, bishop, board, start, end);
      expect(result).toBe(true); // no obstruction
    });
    it('should return "false" if bishop start pos is "e4" and end pos is "g6" with enemy piece at end and with obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'g6';
      const isEnemyAttacked = true;
      const isEndEmpty = false;
      const board = new Board();
      const bishop = new Bishop(start, COLORS.black);
      board.pieces[start] = bishop;
      board.pieces[end] = new Piece(end, COLORS.white);
      bishop.findMovePattern = jest.fn().mockImplementation(() => {
        return true;
      });
      bishop.obsticleCheck = jest.fn().mockImplementation(() => {
        return true;
      });
      const delta = board.calculateDelta(end, start);
      const result = bishop.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, bishop, board, start, end);
      expect(result).toBe(false); // no obstruction
    });
    it('should return "false" if bishop start pos is "e4" and end pos is "g6" with same color piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'g6';
      const isEnemyAttacked = false;
      const isEndEmpty = false;
      const board = new Board();
      const bishop = new Bishop(start, COLORS.black);
      board.pieces[start] = bishop;
      board.pieces[end] = new Piece(end, COLORS.black);
      bishop.findMovePattern = jest.fn().mockImplementation(() => {
        return true;
      });
      bishop.obsticleCheck = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = bishop.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, bishop, board, start, end);
      expect(result).toBe(false); // no obstruction
    });
  });
});
