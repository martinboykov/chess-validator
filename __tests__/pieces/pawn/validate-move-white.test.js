const COLORS = require('../../../src/util').COLORS;
const { Board } = require('../../../src/board');
const { Pawn } = require('../../../src/pieces/pawn');
/* disable eslint*/
describe('pawn', () => {
  beforeAll(() => {

  });
  describe('validateMove', () => {
    describe('white', () => {
      describe('regular move', () => {
        it('should return "true" if white pawn start pos is "a2" and end pos is "a3"', () => { // eslint-disable-line max-len
          const start = 'a2';
          const end = 'a3';
          const isEnemyAttacked = false;
          const isEndEmpty = true;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          pawn.obsticleCheck = jest.fn().mockImplementation(() => {
            return false;
          });
          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(true);
        });
        it('should return "false" if whitepawn start pos is "a2" and end pos is "a1"', () => { // eslint-disable-line max-len
          const start = 'a2';
          const end = 'a1';
          const isEnemyAttacked = false;
          const isEndEmpty = true;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          pawn.obsticleCheck = jest.fn().mockImplementation(() => {
            return false;
          });
          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if white pawn start pos is "b2" and end pos is "a2"', () => { // eslint-disable-line max-len
          const start = 'b2';
          const end = 'a2';
          const isEnemyAttacked = false;
          const isEndEmpty = true;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          pawn.obsticleCheck = jest.fn().mockImplementation(() => {
            return false;
          });

          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if white pawn start pos is "b2" and end pos is "c2"', () => { // eslint-disable-line max-len
          const start = 'b2';
          const end = 'c2';
          const isEnemyAttacked = false;
          const isEndEmpty = true;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          pawn.obsticleCheck = jest.fn().mockImplementation(() => {
            return false;
          });

          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(false);
        });
      });
      describe('special move - first', () => {
        it('should return "true" if start pos is "a2" and end pos is "a4" with "no obsicles" infront', () => { // eslint-disable-line max-len
          const start = 'a2';
          const end = 'a4';
          const isEnemyAttacked = false;
          const isEndEmpty = true;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          board.pieces[pawn.pos] = pawn;
          pawn.obsticleCheck = jest.fn().mockImplementation(() => {
            return false;
          });
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(true);
        });
        it('should return "false" if start pos is "a2" and end pos is "a5" with "no obsicles" infront', () => { // eslint-disable-line max-len
          const start = 'a2';
          const end = 'a5';
          const isEnemyAttacked = false;
          const isEndEmpty = true;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          board.pieces[pawn.pos] = pawn;
          pawn.obsticleCheck = jest.fn().mockImplementation(() => {
            return false;
          });
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(false);
        });

        it('should return "false" if white pawn start pos is "a2" and end pos is "a4" with "obsicles" infront', () => { // eslint-disable-line max-len
          const start = 'a2';
          const end = 'a4';
          const isEnemyAttacked = false;
          const isEndEmpty = true;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          pawn.obsticleCheck = jest.fn().mockImplementation(() => {
            return true;
          });

          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if start pos is "a3" and end pos is "a5" with not first move', () => { // eslint-disable-line max-len
          const start = 'a3';
          const end = 'a5';
          const isEnemyAttacked = false;
          const isEndEmpty = true;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          pawn.movementCount += 1;
          board.pieces[pawn.pos] = pawn;
          pawn.obsticleCheck = jest.fn().mockImplementation(() => {
            return false;
          });
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(false);
        });
      });
      describe('special move - attack', () => {
        it('should return "false" if white pawn start pos is "b2" and end pos is "c1" "with no piece" on c1', () => { // eslint-disable-line max-len
          const start = 'b2';
          const end = 'c1';
          const isEnemyAttacked = false;
          const isEndEmpty = true;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if white pawn start pos is "b2" and end pos is "a1" "with no piece" on a1', () => { // eslint-disable-line max-len
          const start = 'b2';
          const end = 'a1';
          const isEnemyAttacked = false;
          const isEndEmpty = true;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if white pawn start pos is "b2" and end pos is "a3" "with no piece" on a3', () => { // eslint-disable-line max-len
          const start = 'b2';
          const end = 'a3';
          const isEnemyAttacked = false;
          const isEndEmpty = true;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if white pawn start pos is "b2" and end pos is "c3" "with no piece" on c3', () => { // eslint-disable-line max-len
          const start = 'b2';
          const end = 'c3';
          const isEnemyAttacked = false;
          const isEndEmpty = true;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          board.pieces[pawn.pos] = pawn;
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if white pawn start pos is "b2" and end pos is "a3" "with white pawn" on a3', () => { // eslint-disable-line max-len
          const start = 'b2';
          const end = 'a3';
          const isEnemyAttacked = false;
          const isEndEmpty = false;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          const anotherWhitePawn = new Pawn(end, COLORS.white);
          board.pieces[pawn.pos] = pawn;
          board.pieces[anotherWhitePawn.pos] = anotherWhitePawn;
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if white pawn start pos is "b2" and end pos is "c3" "with white pawn" on c3', () => { // eslint-disable-line max-len
          const start = 'b2';
          const end = 'c3';
          const isEnemyAttacked = false;
          const isEndEmpty = false;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          const anotherWhitePawn = new Pawn(end, COLORS.white);
          board.pieces[pawn.pos] = pawn;
          board.pieces[anotherWhitePawn.pos] = anotherWhitePawn;
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "true" if white pawn start pos is "b2" and end pos is "a3" "with black pawn" on a3', () => { // eslint-disable-line max-len
          const start = 'b2';
          const end = 'a3';
          const isEnemyAttacked = true;
          const isEndEmpty = false;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          const blackPawn = new Pawn(end, COLORS.black);
          board.pieces[pawn.pos] = pawn;
          board.pieces[blackPawn.pos] = blackPawn;
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if white pawn start pos is "b2" and end pos is "c3" "with black pawn" on c3', () => { // eslint-disable-line max-len
          const start = 'b2';
          const end = 'c3';
          const isEnemyAttacked = true;
          const isEndEmpty = false;
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const pawn = new Pawn(start, COLORS.white);
          const blackPawn = new Pawn(end, COLORS.black);
          board.pieces[pawn.pos] = pawn;
          board.pieces[blackPawn.pos] = blackPawn;
          const result = pawn.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, pawn, board, start, end);
          expect(result).toBe(true);
        });
      });
    });
  });
});
