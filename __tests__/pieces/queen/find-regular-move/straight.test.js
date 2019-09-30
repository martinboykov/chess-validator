const COLORS = require('../../../../src/util').COLORS;
const { Board } = require('../../../../src/board');
const { Queen } = require('../../../../src/pieces/queen');

describe('queen', () => {
  beforeAll(() => {

  });
  describe('regular', () => {
    describe('valid moves', () => {
      describe('up', () => {
        it('should return "true" if queen start pos is "e4" and end pos is "e5" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e5';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[start] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "e6" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e6';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[start] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "e7" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e7';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[start] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
      });
      describe('right', () => {
        it('should return "true" if queen start pos is "e4" and end pos is "f4" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f4';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[start] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "f4" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f4';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[start] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "f4" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f4';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[start] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
      });
      describe('down', () => {
        it('should return "true" if queen start pos is "e4" and end pos is "e3" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e3';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[start] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "e3" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e3';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[start] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "e3" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e3';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[start] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
      });
      describe('left', () => {
        it('should return "true" if queen start pos is "e4" and end pos is "d4" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd4';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[start] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "d4" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd4';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[start] = queen;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = queen.findMovePattern(
            queen.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if queen start pos is "e4" and end pos is "d4" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd4';
          const board = new Board();
          const queen = new Queen(start, COLORS.black);
          board.pieces[start] = queen;
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
      it('should return "false" if queen start pos is "e4" and end pos is "g1"', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'g1';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.findMovePattern(
          queen.pattern.regular, deltaX, deltaY);
        expect(result).toBe(false);
      });
      it('should return "false" if queen start pos is "e4" and end pos is "h8"', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'h8';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
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
