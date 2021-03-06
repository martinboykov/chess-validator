const COLORS = require('../../../../src/util').COLORS;
const { Chess } = require('../../../../src/chess');
const { Piece } = require('../../../../src/pieces/piece');
const { Queen } = require('../../../../src/pieces/queen');

describe('queen', () => {
  beforeAll(() => {

  });
  describe('validate move', () => {
    it('should return "true" if queen start pos is "e4" and end pos is "g4" without piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'g4';
      const isEnemyAttacked = false;
      const isEndEmpty = true;
      const chess = new Chess();
      const board = chess.board;
      const queen = new Queen(start, COLORS.black);
      board.pieces[start] = queen;
      queen.findMovePattern = jest.fn().mockImplementation(() => {
        return true;
      });
      queen.obsticleCheckStraight = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = queen.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, queen, chess, start, end);
      expect(result).toBe(true); // no obstruction
    });
    it('should return "false" if queen start pos is "e4" and end pos is "h6" without piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'h6';
      const isEnemyAttacked = false;
      const isEndEmpty = true;
      const chess = new Chess();
      const board = chess.board;
      const queen = new Queen(start, COLORS.black);
      board.pieces[start] = queen;
      queen.findMovePattern = jest.fn().mockImplementation(() => {
        return false;
      });
      queen.obsticleCheckStraight = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = queen.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, queen, chess, start, end);
      expect(result).toBe(false); // no obstruction
    });
    it('should return "true" if queen start pos is "e4" and end pos is "e6" with enemy piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'e6';
      const isEnemyAttacked = true;
      const isEndEmpty = false;
      const chess = new Chess();
      const board = chess.board;
      const queen = new Queen(start, COLORS.black);
      board.pieces[start] = queen;
      board.pieces[end] = new Piece(end, COLORS.white);
      queen.findMovePattern = jest.fn().mockImplementation(() => {
        return true;
      });
      queen.obsticleCheckStraight = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = queen.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, queen, chess, start, end);
      expect(result).toBe(true); // no obstruction
    });
    it('should return "false" if queen start pos is "e4" and end pos is "e6" with enemy piece at end and with obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'e6';
      const isEnemyAttacked = true;
      const isEndEmpty = false;

      const chess = new Chess();
      const board = chess.board;
      const queen = new Queen(start, COLORS.black);
      board.pieces[start] = queen;
      board.pieces[end] = new Piece(end, COLORS.white);
      queen.findMovePattern = jest.fn().mockImplementation(() => {
        return true;
      });
      queen.obsticleCheckStraight = jest.fn().mockImplementation(() => {
        return true;
      });
      const delta = board.calculateDelta(end, start);
      const result = queen.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, queen, chess, start, end);
      expect(result).toBe(false); // no obstruction
    });
    it('should return "false" if queen start pos is "e4" and end pos is "e6" with same color piece at end and with no obstruction', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'e6';
      const isEnemyAttacked = false;
      const isEndEmpty = false;
      const chess = new Chess();
      const board = chess.board;
      const queen = new Queen(start, COLORS.black);
      board.pieces[start] = queen;
      board.pieces[end] = new Piece(end, COLORS.black);
      queen.findMovePattern = jest.fn().mockImplementation(() => {
        return true;
      });
      queen.obsticleCheckStraight = jest.fn().mockImplementation(() => {
        return false;
      });
      const delta = board.calculateDelta(end, start);
      const result = queen.validateMove(
        delta[0], delta[1], isEnemyAttacked,
        isEndEmpty, queen, chess, start, end);
      expect(result).toBe(false); // no obstruction
    });
  });
});
