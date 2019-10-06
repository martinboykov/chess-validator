const COLORS = require('../../../src/util').COLORS;
const { Board } = require('../../../src/board');
const { Pawn } = require('../../../src/pieces/pawn');
describe('pawn', () => {
  beforeAll(() => {

  });
  describe('obsticleCheck', () => {
    it('should return "false" if white pawn start pos is "a2" and end pos is "a3" with no obsicle infront', () => { // eslint-disable-line max-len
      const start = 'a2';
      const end = 'a3';
      const board = new Board();
      const delta = board.calculateDelta(end, start);
      const deltaX = delta[0];
      const deltaY = delta[1];
      const pawn = new Pawn(start, COLORS.white);
      board.pieces[pawn.pos] = pawn;
      const result = pawn.obsticleCheck(
        start, end, deltaX, deltaY, pawn, board);
      expect(result).toBe(false);
    });
    it('should return "false" if white pawn start pos is "a2" and end pos is "a4" with no obsicle infront', () => { // eslint-disable-line max-len
      const start = 'a2';
      const end = 'a4';
      const board = new Board();
      const delta = board.calculateDelta(end, start);
      const deltaX = delta[0];
      const deltaY = delta[1];
      const pawn = new Pawn(start, COLORS.white);
      board.pieces[pawn.pos] = pawn;
      const result = pawn.obsticleCheck(
        start, end, deltaX, deltaY, pawn, board);
      expect(result).toBe(false);
    });
    it('should return "true" if white pawn start pos is "a2" and end pos is "a4" with obsicle white pawn on a4', () => { // eslint-disable-line max-len
      const start = 'a2';
      const end = 'a4';
      const board = new Board();
      const delta = board.calculateDelta(end, start);
      const deltaX = delta[0];
      const deltaY = delta[1];
      const pawn = new Pawn(start, COLORS.white);
      board.pieces[pawn.pos] = pawn;
      const pawnWhite = new Pawn(end, COLORS.white);
      board.pieces[pawnWhite.pos] = pawnWhite;
      const result = pawn.obsticleCheck(
        start, end, deltaX, deltaY, pawn, board);
      expect(result).toBe(true);
    });
    it('should return "true" if white pawn start pos is "a2" and end pos is "a4" with obsicle black pawn on a4', () => { // eslint-disable-line max-len
      const start = 'a2';
      const end = 'a4';
      const board = new Board();
      const delta = board.calculateDelta(end, start);
      const deltaX = delta[0];
      const deltaY = delta[1];
      const pawn = new Pawn(start, COLORS.white);
      board.pieces[pawn.pos] = pawn;
      const pawBlack = new Pawn(end, COLORS.black);
      board.pieces[pawBlack.pos] = pawBlack;
      const result = pawn.obsticleCheck(
        start, end, deltaX, deltaY, pawn, board);
      expect(result).toBe(true);
    });
    it('should return "true" if white pawn start pos is "a2" and end pos is "a4" with obsicle white pawn on a3', () => { // eslint-disable-line max-len
      const start = 'a2';
      const middle = 'a3';
      const end = 'a4';
      const board = new Board();
      const delta = board.calculateDelta(end, start);
      const deltaX = delta[0];
      const deltaY = delta[1];
      const pawn = new Pawn(start, COLORS.white);
      board.pieces[pawn.pos] = pawn;
      const pawnWhite = new Pawn(middle, COLORS.white);
      board.pieces[pawnWhite.pos] = pawnWhite;
      const result = pawn.obsticleCheck(
        start, end, deltaX, deltaY, pawn, board);
      expect(result).toBe(true);
    });
    it('should return "true" if white pawn start pos is "a2" and end pos is "a4" with obsicle black pawn on a3', () => { // eslint-disable-line max-len
      const start = 'a2';
      const middle = 'a3';
      const end = 'a4';
      const board = new Board();
      const delta = board.calculateDelta(end, start);
      const deltaX = delta[0];
      const deltaY = delta[1];
      const pawn = new Pawn(start, COLORS.white);
      board.pieces[pawn.pos] = pawn;
      const pawBlack = new Pawn(middle, COLORS.black);
      board.pieces[pawBlack.pos] = pawBlack;
      const result = pawn.obsticleCheck(
        start, end, deltaX, deltaY, pawn, board);
      expect(result).toBe(true);
    });
  });
});
