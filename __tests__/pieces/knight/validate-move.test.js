const COLORS = require('../../../src/util').COLORS;
const { Chess } = require('../../../src/chess');
const { Knight } = require('../../../src/pieces/knight');

describe('knight', () => {
  beforeAll(() => {

  });
  describe('validateMove', () => {
    describe('without piece at end', () => {
      it('should return "true" if knight start pos is "e4" and end pos is "f6" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'f6';
        const isEnemyAttacked = false;
        const isEndEmpty = true;
        const chess = new Chess();
        const board = chess.board;
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        knight.findMovePattern = jest.fn().mockImplementation(() => {
          return true;
        });
        board.pieces[knight.pos] = knight;
        const result = knight.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, knight, chess, start, end);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "g5" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'g5';
        const isEnemyAttacked = false;
        const isEndEmpty = true;
        const chess = new Chess();
        const board = chess.board;
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        knight.findMovePattern = jest.fn().mockImplementation(() => {
          return true;
        });
        const result = knight.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, knight, chess, start, end);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "g3" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'g3';
        const isEnemyAttacked = false;
        const isEndEmpty = true;
        const chess = new Chess();
        const board = chess.board;
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        knight.findMovePattern = jest.fn().mockImplementation(() => {
          return true;
        });
        const result = knight.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, knight, chess, start, end);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "f2" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'f2';
        const isEnemyAttacked = false;
        const isEndEmpty = true;
        const chess = new Chess();
        const board = chess.board;
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        knight.findMovePattern = jest.fn().mockImplementation(() => {
          return true;
        });
        const result = knight.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, knight, chess, start, end);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "d2" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'd2';
        const isEnemyAttacked = false;
        const isEndEmpty = true;
        const chess = new Chess();
        const board = chess.board;
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        knight.findMovePattern = jest.fn().mockImplementation(() => {
          return true;
        });
        board.pieces[knight.pos] = knight;
        const result = knight.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, knight, chess, start, end);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "c3" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'c3';
        const isEnemyAttacked = false;
        const isEndEmpty = true;
        const chess = new Chess();
        const board = chess.board;
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        knight.findMovePattern = jest.fn().mockImplementation(() => {
          return true;
        });
        const result = knight.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, knight, chess, start, end);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "c5" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'c5';
        const isEnemyAttacked = false;
        const isEndEmpty = true;
        const chess = new Chess();
        const board = chess.board;
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        knight.findMovePattern = jest.fn().mockImplementation(() => {
          return true;
        });
        const result = knight.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, knight, chess, start, end);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "d6" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'd6';
        const isEnemyAttacked = false;
        const isEndEmpty = true;
        const chess = new Chess();
        const board = chess.board;
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        knight.findMovePattern = jest.fn().mockImplementation(() => {
          return true;
        });
        const result = knight.validateMove(
          delta[0], delta[1], isEnemyAttacked,
          isEndEmpty, knight, chess, start, end);
        expect(result).toBe(true);
      });
    });
    describe('with piece at end', () => {
      describe('same color', () => {
        it('should return "false" if knight start pos is "e4" and end pos is "f6" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f6';
          const isEnemyAttacked = false;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.black);
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "g5" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'g5';
          const isEnemyAttacked = false;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.black);
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "g3" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'g3';
          const isEnemyAttacked = false;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[end] = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "f2" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f2';
          const isEnemyAttacked = false;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[end] = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "d2" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd2';
          const isEnemyAttacked = false;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[end] = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "c3" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'c3';
          const isEnemyAttacked = false;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[end] = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "c5" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'c5';
          const isEnemyAttacked = false;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[end] = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "d6" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd6';
          const isEnemyAttacked = false;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.black);
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(false);
        });
      });
      describe('another color', () => {
        it('should return "true" if knight start pos is "e4" and end pos is "f6" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f6';
          const isEnemyAttacked = true;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.white);
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if knight start pos is "e4" and end pos is "g5" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'g5';
          const isEnemyAttacked = true;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.white);
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if knight start pos is "e4" and end pos is "g3" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'g3';
          const isEnemyAttacked = true;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.white);
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if knight start pos is "e4" and end pos is "f2" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f2';
          const isEnemyAttacked = true;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.white);
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if knight start pos is "e4" and end pos is "d2" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd2';
          const isEnemyAttacked = true;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.white);
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if knight start pos is "e4" and end pos is "c3" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'c3';
          const isEnemyAttacked = true;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[end] = new Knight(start, COLORS.white);
          board.pieces[knight.pos] = knight;
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if knight start pos is "e4" and end pos is "c5" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'c5';
          const isEnemyAttacked = true;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.white);
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if knight start pos is "e4" and end pos is "d6" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd6';
          const isEnemyAttacked = true;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.white);
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(true);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "e5" with no piece at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'e5';
          const isEnemyAttacked = true;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return false;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "g6" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'g6';
          const isEnemyAttacked = false;
          const isEndEmpty = false;
          const chess = new Chess();
          const board = chess.board;
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.black);
          knight.findMovePattern = jest.fn().mockImplementation(() => {
            return true;
          });
          const result = knight.validateMove(
            delta[0], delta[1], isEnemyAttacked,
            isEndEmpty, knight, chess, start, end);
          expect(result).toBe(false);
        });
      });
    });
  });
});
