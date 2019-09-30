const COLORS = require('../../../../src/util').COLORS;
const { Board } = require('../../../../src/board');
const { Queen } = require('../../../../src/pieces/queen');

describe('queen', () => {
  beforeAll(() => {

  });
  describe('find regular pattern', () => {
    describe('valid moves', () => {
      describe('up right', () => {
        it('should return "true" if queen start pos is "e4" and end pos is "f5" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f5';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[queen.pos] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "g6" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'g6';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[queen.pos] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "h7" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'h7';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[queen.pos] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
      });
      describe('down right', () => {
        it('should return "true" if queen start pos is "e4" and end pos is "f3" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f3';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[queen.pos] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "g2" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'g2';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[queen.pos] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "h1" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'h1';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[queen.pos] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
      });
      describe('down left', () => {
        it('should return "true" if queen start pos is "e4" and end pos is "d3" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd3';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[queen.pos] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "c2" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'c2';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[queen.pos] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "b1" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'b1';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[queen.pos] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
      });
      describe('up left', () => {
        it('should return "true" if queen start pos is "e4" and end pos is "d5" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd5';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[queen.pos] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "c6" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'c6';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[queen.pos] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "b7" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'b7';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[queen.pos] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
      });
    });
    describe('invalid moves', () => {
      it('should return "false" if queen start pos is "a1" and end pos is "h2"', () => { // eslint-disable-line max-len
        const start = 'a1';
        const end = 'h2';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[queen.pos] = queen;
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.findMovePattern(
          queen.pattern.regular, deltaX, deltaY);
        expect(result).toBe(false);
      });
      it('should return "false" if queen start pos is "e4" and end pos is "a3"', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'a3';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[queen.pos] = queen;
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.findMovePattern(
          queen.pattern.regular, deltaX, deltaY);
        expect(result).toBe(false);
      });
    });
  });
});
