const { COLORS } = require('../../../src/util');
const { Chess } = require('../../../src/chess');
const { Piece } = require('../../../src/pieces/piece');
const { King } = require('../../../src/pieces/king');

describe('king', () => {
  beforeAll(() => {

  });
  describe('validate move', () => {
    describe('regular move', () => {
      it(`should return "true" if king start pos is "e4", end pos is "f4",
      isEnemyAttacked = false, isEndEmpty = true, findMovePattern() = true`, () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'f4';
        const isEnemyAttacked = false;
        const isEndEmpty = true;
        const chess = new Chess();
        const board = chess.board;
        const king = new King(start, COLORS.black);
        board.pieces[start] = king;
        king.specialMoveCheck = jest.fn().mockImplementation(() => {
          return false;
        });
        king.findMovePattern = jest.fn().mockImplementation(() => {
          return true;
        });
        const delta = board.calculateDelta(end, start);
        const result = king.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, king, chess, start, end);
        expect(result).toBe(true); // no obstruction
      });
      it(`should return "true" if king start pos is "e4", end pos is "f4",
      isEnemyAttacked = true, isEndEmpty = false, findMovePattern() = true`, () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'f4';
        const isEnemyAttacked = true;
        const isEndEmpty = false;
        const chess = new Chess();
        const board = chess.board;
        const king = new King(start, COLORS.black);
        board.pieces[start] = king;
        king.specialMoveCheck = jest.fn().mockImplementation(() => {
          return false;
        });
        king.findMovePattern = jest.fn().mockImplementation(() => {
          return true;
        });
        const delta = board.calculateDelta(end, start);
        const result = king.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, king, chess, start, end);
        expect(result).toBe(true); // no obstruction
      });
      it(`should return "false" if king start pos is "e4", end pos is "f4",
      isEnemyAttacked = false, isEndEmpty = false, findMovePattern() = true`, () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'f4';
        const isEnemyAttacked = false;
        const isEndEmpty = false;
        const chess = new Chess();
        const board = chess.board;
        const king = new King(start, COLORS.black);
        board.pieces[start] = king;
        king.specialMoveCheck = jest.fn().mockImplementation(() => {
          return false;
        });
        king.findMovePattern = jest.fn().mockImplementation(() => {
          return true;
        });
        const delta = board.calculateDelta(end, start);
        const result = king.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, king, chess, start, end);
        expect(result).toBe(false); // no obstruction
      });
      it(`should return "false" if king start pos is "e4", end pos is "f4",
      isEnemyAttacked = true, isEndEmpty = false, findMovePattern() = false`, () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'f4';
        const isEnemyAttacked = true;
        const isEndEmpty = false;
        const chess = new Chess();
        const board = chess.board;
        const king = new King(start, COLORS.black);
        board.pieces[start] = king;
        king.specialMoveCheck = jest.fn().mockImplementation(() => {
          return false;
        });
        king.findMovePattern = jest.fn().mockImplementation(() => {
          return false;
        });
        const delta = board.calculateDelta(end, start);
        const result = king.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, king, chess, start, end);
        expect(result).toBe(false); // no obstruction
      });
    });
    describe('castling move', () => {
      it(`should return "true" if king start pos is "e1", end pos is "g1",
      isEnemyAttacked = false, isEndEmpty = true, findMovePattern() = false`, () => { // eslint-disable-line max-len
        const start = 'e1';
        const end = 'g1';
        const isEnemyAttacked = false;
        const isEndEmpty = true;
        const chess = new Chess();
        const board = chess.board;
        const king = new King(start, COLORS.black);
        board.pieces[start] = king;
        king.specialMoveCheck = jest.fn().mockImplementation(() => {
          return true;
        });
        king.findMovePattern = jest.fn().mockImplementation(() => {
          return false;
        });
        const delta = board.calculateDelta(end, start);
        const result = king.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, king, chess, start, end);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "false" if king start pos is "e1", end pos is "g1"', () => { // eslint-disable-line max-len
        const start = 'e1';
        const end = 'g1';
        const isEnemyAttacked = false;
        const isEndEmpty = true;
        const chess = new Chess();
        const board = chess.board;
        const king = new King(start, COLORS.black);
        board.pieces[start] = king;
        king.specialMoveCheck = jest.fn().mockImplementation(() => {
          return false;
        });
        king.findMovePattern = jest.fn().mockImplementation(() => {
          return false;
        });
        const delta = board.calculateDelta(end, start);
        const result = king.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, king, chess, start, end);
        expect(result).toBe(false);
      });
      it('should return "false" if king start pos is "e1", end pos is "g2" (deltaY!==0)', () => { // eslint-disable-line max-len
        const start = 'e1';
        const end = 'g2';
        const isEnemyAttacked = false;
        const isEndEmpty = true;
        const chess = new Chess();
        const board = chess.board;
        const king = new King(start, COLORS.black);
        board.pieces[start] = king;
        king.specialMoveCheck = jest.fn().mockImplementation(() => {
          return true;
        });
        king.findMovePattern = jest.fn().mockImplementation(() => {
          return false;
        });
        const delta = board.calculateDelta(end, start);
        const result = king.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, king, chess, start, end);
        expect(result).toBe(false); // no obstruction
      });
      it('should return "false" if king start pos is "d1", end pos is "g1" (Math.abs(deltaX)!==2)', () => { // eslint-disable-line max-len
        const start = 'd1';
        const end = 'g1';
        const isEnemyAttacked = false;
        const isEndEmpty = true;
        const chess = new Chess();
        const board = chess.board;
        const king = new King(start, COLORS.black);
        board.pieces[start] = king;
        king.specialMoveCheck = jest.fn().mockImplementation(() => {
          return true;
        });
        king.findMovePattern = jest.fn().mockImplementation(() => {
          return false;
        });
        const delta = board.calculateDelta(end, start);
        const result = king.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, king, chess, start, end);
        expect(result).toBe(false); // no obstruction
      });
    });
  });
});
