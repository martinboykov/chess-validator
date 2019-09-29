const COLORS = require('../../../src/util').COLORS;
const { Board } = require('../../../src/board');
const { Pawn } = require('../../../src/pieces/pawn');
/* disable eslint*/
describe('pawn', () => {
  beforeAll(() => {

  });
  describe('validateMove', () => {
    describe('black', () => {
      describe('regular move', () => {
        it('should return "true" if black pawn start pos is "b7" and end pos is "b6"', () => { // eslint-disable-line max-len
          const start = 'b7';
          const end = 'b6';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta, false, pawn, board, start, end);
          expect(result).toBe(true);
        });
        it('should return "false" if black pawn start pos is "b7" and end pos is "b8"', () => { // eslint-disable-line max-len
          const start = 'b7';
          const end = 'b8';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta, false, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if black pawn start pos is "b7" and end pos is "a7"', () => { // eslint-disable-line max-len
          const start = 'b7';
          const end = 'a7';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          pawn.obsticleCheck = jest.fn().mockImplementation(() => {
            return false;
          });

          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta, false, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if black pawn start pos is "b7" and end pos is "c7"', () => { // eslint-disable-line max-len
          const start = 'b7';
          const end = 'c7';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          pawn.obsticleCheck = jest.fn().mockImplementation(() => {
            return false;
          });

          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta, false, pawn, board, start, end);
          expect(result).toBe(false);
        });
      });
      describe('special move - first', () => {
        it('should return "true" if black pawn start pos is "b7" and end pos is "b5" with "no obsicles" infront', () => { // eslint-disable-line max-len
          const start = 'b7';
          const end = 'b5';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);

          board.pieces[pawn.pos] = pawn;
          pawn.obsticleCheck = jest.fn().mockImplementation(() => {
            return false;
          });
          const result = pawn.validateMove(
            delta, false, pawn, board, start, end);
          expect(result).toBe(true);
        });

        it('should return "false" if black start pos is "b7" and end pos is "b4" with "no obsicles" infront', () => { // eslint-disable-line max-len
          const start = 'b7';
          const end = 'b4';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          board.pieces[pawn.pos] = pawn;
          pawn.obsticleCheck = jest.fn().mockImplementation(() => {
            return false;
          });
          const result = pawn.validateMove(
            delta, false, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if black pawn start pos is "b7" and end pos is "b5" with "obsicles" infront', () => { // eslint-disable-line max-len
          const start = 'b7';
          const end = 'b5';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          pawn.obsticleCheck = jest.fn().mockImplementation(() => {
            return true;
          });

          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta, false, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if black start pos is "b6" and end pos is "b4" with not first move', () => { // eslint-disable-line max-len
          const start = 'a3';
          const end = 'a5';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          pawn.movementCount += 1;
          board.pieces[pawn.pos] = pawn;
          pawn.obsticleCheck = jest.fn().mockImplementation(() => {
            return false;
          });
          const result = pawn.validateMove(
            delta, false, pawn, board, start, end);
          expect(result).toBe(false);
        });
      });
      describe('special move - attack', () => {
        it('should return "false" if black pawn start pos is "b7" and end pos is "c6" "with no piece" on c6', () => { // eslint-disable-line max-len
          const start = 'b7';
          const end = 'c6';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta, false, pawn, board, start, end);
          expect(result).toBe(false);
        });

        it('should return "false" if black pawn start pos is "b7" and end pos is "c8" "with no piece" on c8', () => { // eslint-disable-line max-len
          const start = 'b7';
          const end = 'c8';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta, false, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if black pawn start pos is "b7" and end pos is "a8" "with no piece" on a8', () => { // eslint-disable-line max-len
          const start = 'b7';
          const end = 'a8';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta, false, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if black pawn start pos is "b7" and end pos is "a6" "with no piece" on a6', () => { // eslint-disable-line max-len
          const start = 'b7';
          const end = 'a6';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta, false, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if black pawn start pos is "b7" and end pos is "a6" "with black pawn" on a6', () => { // eslint-disable-line max-len
          const start = 'b2';
          const end = 'a3';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          const anotherBlackPawn = new Pawn(end, COLORS.black);
          board.pieces[pawn.pos] = pawn;
          board.pieces[anotherBlackPawn.pos] = anotherBlackPawn;
          const result = pawn.validateMove(
            delta, false, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if black pawn start pos is "b7" and end pos is "c6" "with black pawn" on c6', () => { // eslint-disable-line max-len
          const start = 'b7';
          const end = 'c6';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          const anotherBlackPawn = new Pawn(end, COLORS.black);
          board.pieces[pawn.pos] = pawn;
          board.pieces[anotherBlackPawn.pos] = anotherBlackPawn;
          const result = pawn.validateMove(
            delta, false, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "true" if black pawn start pos is "b7" and end pos is "a6" "with white pawn" on a6', () => { // eslint-disable-line max-len
          const start = 'b7';
          const end = 'a6';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          const whitePawn = new Pawn(end, COLORS.white);
          board.pieces[pawn.pos] = pawn;
          board.pieces[whitePawn.pos] = whitePawn;
          const result = pawn.validateMove(
            delta, true, pawn, board, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if black pawn start pos is "b7" and end pos is "c6" "with white pawn" on c6', () => { // eslint-disable-line max-len
          const start = 'b7';
          const end = 'c6';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.black);
          const whitePawn = new Pawn(end, COLORS.white);
          board.pieces[pawn.pos] = pawn;
          board.pieces[whitePawn.pos] = whitePawn;
          const result = pawn.validateMove(
            delta, true, pawn, board, start, end);
          expect(result).toBe(true);
        });
      });
    });
  });
});
