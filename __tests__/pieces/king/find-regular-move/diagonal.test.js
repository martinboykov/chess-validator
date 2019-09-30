const COLORS = require('../../../../src/util').COLORS;
const { Board } = require('../../../../src/board');
const { King } = require('../../../../src/pieces/king');

describe('king', () => {
  beforeAll(() => {

  });
  describe('find regular', () => {
    describe('diagonal', () => {
      describe('valid moves', () => {
        it('should return "true" if king start pos is "e4" and end pos is "f5"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f5';
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
        it('should return "true" if king start pos is "e4" and end pos is "f3"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f3';
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
        it('should return "true" if king start pos is "e4" and end pos is "d3"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd3';
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
        it('should return "true" if king start pos is "e4" and end pos is "d5"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd5';
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
        it('should return "false" if king start pos is "e4" and end pos is "g6"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'g6';
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
        it('should return "false" if king start pos is "e4" and end pos is "g2"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'g2';
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
        it('should return "false" if king start pos is "e4" and end pos is "c2"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'c2';
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
        it('should return "false" if king start pos is "e4" and end pos is "c6"', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'c6';
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
