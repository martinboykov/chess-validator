const { COLORS } = require('../../../../src/util');
const { Board } = require('../../../../src/board');
const { King } = require('../../../../src/pieces/king');
const { Rook } = require('../../../../src/pieces/rook');
const { Piece } = require('../../../../src/pieces/piece');

describe('king', () => {
  beforeAll(() => {

  });
  describe('special', () => {
    describe('castling', () => {
      describe('white', () => {
        describe('right', () => {
          it('should return "true" if king start pos is "e1" and end pos is "g1" and all conditions are met', () => { // eslint-disable-line max-len
            const start = 'e1';
            const end = 'g1';
            const board = new Board();
            const king = new King(start, COLORS.white);
            board.pieces[start] = king;
            board.pieces.h1 = new Rook('h1', COLORS.white);
            const delta = board.calculateDelta(end, start);
            const deltaX = delta[0];
            king.obsticleCheck = jest.fn().mockImplementation(() => {
              return false;
            });
            const result = king.specialMoveCheck(deltaX, king, board);
            expect(result).toBe(true);
          });
          it('should return "false" if king start pos is "e1" and end pos is "g1" with king not on his first move ', () => { // eslint-disable-line max-len
            const start = 'e1';
            const end = 'g1';
            const board = new Board();
            const king = new King(start, COLORS.white);
            king.movementCount += 1;
            board.pieces[start] = king;
            board.pieces.h1 = new Rook('h1', COLORS.white);
            const delta = board.calculateDelta(end, start);
            const deltaX = delta[0];
            king.obsticleCheck = jest.fn().mockImplementation(() => {
              return false;
            });
            const result = king.specialMoveCheck(deltaX, king, board);
            expect(result).toBe(false);
          });
          it('should return "false" if king start pos is "e1" and end pos is "g1" with different piece than rook on h1', () => { // eslint-disable-line max-len
            const start = 'e1';
            const end = 'g1';
            const board = new Board();
            const king = new King(start, COLORS.white);
            board.pieces[start] = king;
            const piece = new Piece('h1', COLORS.white);
            board.pieces.h1 = piece;
            const delta = board.calculateDelta(end, start);
            const deltaX = delta[0];
            king.obsticleCheck = jest.fn().mockImplementation(() => {
              return false;
            });
            const result = king.specialMoveCheck(deltaX, king, board);
            expect(result).toBe(false);
          });
          it('should return "false" if king start pos is "e1" and end pos is "g1" with rook not on his first move ', () => { // eslint-disable-line max-len
            const start = 'e1';
            const end = 'g1';
            const board = new Board();
            const king = new King(start, COLORS.white);
            board.pieces[start] = king;
            const rook = new Rook('h1', COLORS.white);
            board.pieces.h1 = rook;
            rook.movementCount += 1;
            const delta = board.calculateDelta(end, start);
            const deltaX = delta[0];
            king.obsticleCheck = jest.fn().mockImplementation(() => {
              return false;
            });
            const result = king.specialMoveCheck(deltaX, king, board);
            expect(result).toBe(false);
          });
          it('should return "false" if king start pos is "e1" and end pos is "g1" with rook not the same color as the king', () => { // eslint-disable-line max-len
            const start = 'e1';
            const end = 'g1';
            const board = new Board();
            const king = new King(start, COLORS.white);
            board.pieces[start] = king;
            const rook = new Rook('h1', COLORS.black);
            board.pieces.h1 = rook;
            const delta = board.calculateDelta(end, start);
            const deltaX = delta[0];
            king.obsticleCheck = jest.fn().mockImplementation(() => {
              return false;
            });
            const result = king.specialMoveCheck(deltaX, king, board);
            expect(result).toBe(false);
          });
          it('should return "false" if king start pos is "e1" and end pos is "g1" with obsticles on path', () => { // eslint-disable-line max-len
            const start = 'e1';
            const end = 'g1';
            const board = new Board();
            const king = new King(start, COLORS.white);
            board.pieces[start] = king;
            board.pieces.h1 = new Rook('h1', COLORS.white);
            const delta = board.calculateDelta(end, start);
            const deltaX = delta[0];
            king.obsticleCheck = jest.fn().mockImplementation(() => {
              return true;
            });
            const result = king.specialMoveCheck(deltaX, king, board);
            expect(result).toBe(false);
          });
        });
      });
    });
  });
});
