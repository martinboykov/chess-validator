const COLORS = require('../../../../src/util').COLORS;
const { Board } = require('../../../../src/board');
const { King } = require('../../../../src/pieces/king');

describe('king', () => {
  beforeAll(() => {

  });
  describe('find regular', () => {
    describe('diagonal', () => {
      describe('valid moves', () => {
        it('should return "true" if king start pos is "e4" and end pos is "f4"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f4';
          const board = new Board();
          const king = new King(start, COLORS.black);
          board.pieces[king.pos] = king;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = king.findMovePattern(
            king.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if king start pos is "e4" and end pos is "e3"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e3';
          const board = new Board();
          const king = new King(start, COLORS.black);
          board.pieces[king.pos] = king;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = king.findMovePattern(
            king.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if king start pos is "e4" and end pos is "d4"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd4';
          const board = new Board();
          const king = new King(start, COLORS.black);
          board.pieces[king.pos] = king;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = king.findMovePattern(
            king.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if king start pos is "e4" and end pos is "e5"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e5';
          const board = new Board();
          const king = new King(start, COLORS.black);
          board.pieces[king.pos] = king;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = king.findMovePattern(
            king.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
      });
      describe('invalid moves', () => {
        it('should return "false" if king start pos is "e4" and end pos is "g4"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'g4';
          const board = new Board();
          const king = new King(start, COLORS.black);
          board.pieces[king.pos] = king;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = king.findMovePattern(
            king.pattern.regular, deltaX, deltaY);
          expect(result).toBe(false);
        });
        it('should return "false" if king start pos is "e4" and end pos is "e2"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e2';
          const board = new Board();
          const king = new King(start, COLORS.black);
          board.pieces[king.pos] = king;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = king.findMovePattern(
            king.pattern.regular, deltaX, deltaY);
          expect(result).toBe(false);
        });
        it('should return "false" if king start pos is "e4" and end pos is "c4"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'c4';
          const board = new Board();
          const king = new King(start, COLORS.black);
          board.pieces[king.pos] = king;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = king.findMovePattern(
            king.pattern.regular, deltaX, deltaY);
          expect(result).toBe(false);
        });
        it('should return "false" if king start pos is "e4" and end pos is "e6"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e6';
          const board = new Board();
          const king = new King(start, COLORS.black);
          board.pieces[king.pos] = king;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = king.findMovePattern(
            king.pattern.regular, deltaX, deltaY);
          expect(result).toBe(false);
        });
      });
    });
  });
});
