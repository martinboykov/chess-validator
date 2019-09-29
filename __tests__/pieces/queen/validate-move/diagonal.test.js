const COLORS = require('../../../../src/util').COLORS;
const { Board } = require('../../../../src/board');
const { Piece } = require('../../../../src/pieces/piece');
const { Queen } = require('../../../../src/pieces/queen');

describe('queen', () => {
  beforeAll(() => {

  });
  describe('validate move', () => {
    it('should return "true" if queen start pos is "e4" and end pos is "g6" without piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'g6';
      const isEnemyAttacked = false;
      const isEndEmpty = true;
      const board = new Board();
      const queen = new Queen(start, COLORS.black);
      board.pieces[start] = queen;
      queen.findRegularPattern = jest.fn().mockImplementation(() => {
        return true;
      });
      queen.obsticleCheckDiagonal = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = queen.validateMove(
        delta, isEnemyAttacked, isEndEmpty, queen, board, start, end);
      expect(result).toBe(true); // no obstruction
    });
    it('should return "false" if queen start pos is "e4" and end pos is "h6" without piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'h6';
      const isEnemyAttacked = false;
      const isEndEmpty = true;
      const board = new Board();
      const queen = new Queen(start, COLORS.black);
      board.pieces[start] = queen;
      queen.findRegularPattern = jest.fn().mockImplementation(() => {
        return false;
      });
      queen.obsticleCheckDiagonal = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = queen.validateMove(
        delta, isEnemyAttacked, isEndEmpty, queen, board, start, end);
      expect(result).toBe(false); // no obstruction
    });
    it('should return "true" if queen start pos is "e4" and end pos is "g6" with enemy piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'g6';
      const isEnemyAttacked = true;
      const isEndEmpty = false;
      const board = new Board();
      const queen = new Queen(start, COLORS.black);
      board.pieces[start] = queen;
      board.pieces[end] = new Piece(end, COLORS.white);
      queen.findRegularPattern = jest.fn().mockImplementation(() => {
        return true;
      });
      queen.obsticleCheckDiagonal = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = queen.validateMove(
        delta, isEnemyAttacked, isEndEmpty, queen, board, start, end);
      expect(result).toBe(true); // no obstruction
    });
    it('should return "false" if queen start pos is "e4" and end pos is "g6" with enemy piece at end and with obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'g6';
      const isEnemyAttacked = true;
      const isEndEmpty = false;
      const board = new Board();
      const queen = new Queen(start, COLORS.black);
      board.pieces[start] = queen;
      board.pieces[end] = new Piece(end, COLORS.white);
      queen.findRegularPattern = jest.fn().mockImplementation(() => {
        return true;
      });
      queen.obsticleCheckDiagonal = jest.fn().mockImplementation(() => {
        return true;
      });
      const delta = board.calculateDelta(end, start);
      const result = queen.validateMove(
        delta, isEnemyAttacked, isEndEmpty, queen, board, start, end);
      expect(result).toBe(false); // no obstruction
    });
    it('should return "false" if queen start pos is "e4" and end pos is "g6" with same color piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'g6';
      const isEnemyAttacked = false;
      const isEndEmpty = false;
      const board = new Board();
      const queen = new Queen(start, COLORS.black);
      board.pieces[start] = queen;
      board.pieces[end] = new Piece(end, COLORS.black);
      queen.findRegularPattern = jest.fn().mockImplementation(() => {
        return true;
      });
      queen.obsticleCheckDiagonal = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = queen.validateMove(
        delta, isEnemyAttacked, isEndEmpty, queen, board, start, end);
      expect(result).toBe(false); // no obstruction
    });
  });
});
