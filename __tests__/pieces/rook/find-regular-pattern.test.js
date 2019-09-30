const COLORS = require('../../../src/util').COLORS;
const { Board } = require('../../../src/board');
const { Rook } = require('../../../src/pieces/rook');

describe('rook', () => {
  beforeAll(() => {

  });
  describe('find regular pattern', () => {
    describe('valid moves', () => {
      describe('up', () => {
        it('should return "true" if rook start pos is "e4" and end pos is "e5" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e5';
          const board = new Board();
          const rook = new Rook(start, COLORS.black);
          board.pieces[start] = rook;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = rook.findMovePattern(
            rook.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if rook start pos is "e4" and end pos is "e6" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e6';
          const board = new Board();
          const rook = new Rook(start, COLORS.black);
          board.pieces[start] = rook;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = rook.findMovePattern(
            rook.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if rook start pos is "e4" and end pos is "e7" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e7';
          const board = new Board();
          const rook = new Rook(start, COLORS.black);
          board.pieces[start] = rook;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = rook.findMovePattern(
            rook.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
      });
      describe('right', () => {
        it('should return "true" if rook start pos is "e4" and end pos is "f4" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f4';
          const board = new Board();
          const rook = new Rook(start, COLORS.black);
          board.pieces[start] = rook;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = rook.findMovePattern(
            rook.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if rook start pos is "e4" and end pos is "f4" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f4';
          const board = new Board();
          const rook = new Rook(start, COLORS.black);
          board.pieces[start] = rook;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = rook.findMovePattern(
            rook.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if rook start pos is "e4" and end pos is "f4" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f4';
          const board = new Board();
          const rook = new Rook(start, COLORS.black);
          board.pieces[start] = rook;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = rook.findMovePattern(
            rook.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
      });
      describe('down', () => {
        it('should return "true" if rook start pos is "e4" and end pos is "e3" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e3';
          const board = new Board();
          const rook = new Rook(start, COLORS.black);
          board.pieces[start] = rook;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = rook.findMovePattern(
            rook.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if rook start pos is "e4" and end pos is "e3" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e3';
          const board = new Board();
          const rook = new Rook(start, COLORS.black);
          board.pieces[start] = rook;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = rook.findMovePattern(
            rook.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if rook start pos is "e4" and end pos is "e3" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e3';
          const board = new Board();
          const rook = new Rook(start, COLORS.black);
          board.pieces[start] = rook;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = rook.findMovePattern(
            rook.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
      });
      describe('left', () => {
        it('should return "true" if rook start pos is "e4" and end pos is "d4" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd4';
          const board = new Board();
          const rook = new Rook(start, COLORS.black);
          board.pieces[start] = rook;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = rook.findMovePattern(
            rook.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if rook start pos is "e4" and end pos is "d4" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd4';
          const board = new Board();
          const rook = new Rook(start, COLORS.black);
          board.pieces[start] = rook;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = rook.findMovePattern(
            rook.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
        it('should return "true" if rook start pos is "e4" and end pos is "d4" without piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd4';
          const board = new Board();
          const rook = new Rook(start, COLORS.black);
          board.pieces[start] = rook;
          const delta = board.calculateDelta(end, start);
          const deltaX = delta[0];
          const deltaY = delta[1];
          const result = rook.findMovePattern(
            rook.pattern.regular, deltaX, deltaY);
          expect(result).toBe(true);
        });
      });
    });
    describe('invalid moves', () => {
      it('should return "false" if rook start pos is "e4" and end pos is "f5"', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'f5';
        const board = new Board();
        const rook = new Rook(start, COLORS.black);
        board.pieces[start] = rook;
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = rook.findMovePattern(
          rook.pattern.regular, deltaX, deltaY);
        expect(result).toBe(false);
      });
      it('should return "false" if rook start pos is "e4" and end pos is "h1"', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'h1';
        const board = new Board();
        const rook = new Rook(start, COLORS.black);
        board.pieces[start] = rook;
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = rook.findMovePattern(
          rook.pattern.regular, deltaX, deltaY);
        expect(result).toBe(false);
      });
    });
  });
});
