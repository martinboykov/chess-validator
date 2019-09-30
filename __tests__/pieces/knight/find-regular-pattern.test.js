const COLORS = require('../../../src/util').COLORS;
const { Board } = require('../../../src/board');
const { Knight } = require('../../../src/pieces/knight');

describe('knight', () => {
  beforeAll(() => {

  });
  describe('find regular pattern', () => {
    describe('valid moves', () => {
      it('should return "true" if knight start pos is "e4" and end pos is "f6"', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'f6';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.findMovePattern(
          knight.pattern.regular, deltaX, deltaY);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "g5"', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'g5';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.findMovePattern(
          knight.pattern.regular, deltaX, deltaY);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "g3"', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'g3';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.findMovePattern(
          knight.pattern.regular, deltaX, deltaY);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "f2"', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'f2';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.findMovePattern(
          knight.pattern.regular, deltaX, deltaY);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "d2"', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'd2';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.findMovePattern(
          knight.pattern.regular, deltaX, deltaY);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "c3"', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'c3';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.findMovePattern(
          knight.pattern.regular, deltaX, deltaY);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "c5"', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'c5';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.findMovePattern(
          knight.pattern.regular, deltaX, deltaY);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "d6"', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'd6';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.findMovePattern(
          knight.pattern.regular, deltaX, deltaY);
        expect(result).toBe(true);
      });
    });
  });
  describe('invalid moves', () => {
    it('should return "true" if knight start pos is "e4" and end pos is "e5"', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'e5';
      const board = new Board();
      const delta = board.calculateDelta(end, start);
      const deltaX = delta[0];
      const deltaY = delta[1];
      const knight = new Knight(start, COLORS.black);
      board.pieces[knight.pos] = knight;
      const result = knight.findMovePattern(
        knight.pattern.regular, deltaX, deltaY);
      expect(result).toBe(false);
    });
    it('should return "true" if knight start pos is "e4" and end pos is "h8"', () => { // eslint-disable-line max-len
      const start = 'e4';
      const end = 'h8';
      const board = new Board();
      const delta = board.calculateDelta(end, start);
      const deltaX = delta[0];
      const deltaY = delta[1];
      const knight = new Knight(start, COLORS.black);
      board.pieces[knight.pos] = knight;
      const result = knight.findMovePattern(
        knight.pattern.regular, deltaX, deltaY);
      expect(result).toBe(false);
    });
  });
});
