const COLORS = require('../../../../src/util').COLORS;
const { Board } = require('../../../../src/board');
const { Piece } = require('../../../../src/pieces/piece');
const { Rook } = require('../../../../src/pieces/rook');

describe('rook', () => {
  beforeAll(() => {

  });
  describe('obsticle check', () => {
    // one step is not necessary as the conditions (isEnemyAttacked || isEndEmpty) are already met
    describe('four steps distance', () => { // checking if positions 1, 2 or 3 are obstructed
      it('should return "false" if rook start pos is "e4" and end pos is "a4" without obstructions at position 1 and 2', () => { // eslint-disable-line max-len
        const start = 'e4';
        const posOne = 'd4';
        const posTwo = 'c4';
        const posThree = 'b4';
        const end = 'a4';
        const board = new Board();
        const rook = new Rook(start, COLORS.black);
        board.pieces[start] = rook;
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = rook.obsticleCheck(
          start, end, deltaX, deltaY, rook, board);
        expect(result).toBe(false); // no obstruction
      });
      it('should return "true" if rook start pos is "e4" and end pos is "a4" with same color piece at position 1', () => { // eslint-disable-line max-len
        const start = 'e4';
        const posOne = 'd4';
        const posTwo = 'c4';
        const posThree = 'b4';
        const end = 'a4';
        const board = new Board();
        const rook = new Rook(start, COLORS.black);
        board.pieces[start] = rook;
        board.pieces[posOne] = new Piece(posOne, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = rook.obsticleCheck(
          start, end, deltaX, deltaY, rook, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if rook start pos is "e4" and end pos is "a4" with same color piece at position 2', () => { // eslint-disable-line max-len
        const start = 'e4';
        const posOne = 'd4';
        const posTwo = 'c4';
        const posThree = 'b4';
        const end = 'a4';
        const board = new Board();
        const rook = new Rook(start, COLORS.black);
        board.pieces[start] = rook;
        board.pieces[posTwo] = new Piece(posTwo, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = rook.obsticleCheck(
          start, end, deltaX, deltaY, rook, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if rook start pos is "e4" and end pos is "a4" with same color piece at position 3', () => { // eslint-disable-line max-len
        const start = 'e4';
        const posOne = 'd4';
        const posTwo = 'c4';
        const posThree = 'b4';
        const end = 'a4';
        const board = new Board();
        const rook = new Rook(start, COLORS.black);
        board.pieces[start] = rook;
        board.pieces[posThree] = new Piece(posThree, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = rook.obsticleCheck(
          start, end, deltaX, deltaY, rook, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if rook start pos is "e4" and end pos is "a4" with opposite color piece at position 1', () => { // eslint-disable-line max-len
        const start = 'e4';
        const posOne = 'd4';
        const posTwo = 'c4';
        const posThree = 'b4';
        const end = 'a4';
        const board = new Board();
        const rook = new Rook(start, COLORS.black);
        board.pieces[start] = rook;
        board.pieces[posOne] = new Piece(posOne, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = rook.obsticleCheck(
          start, end, deltaX, deltaY, rook, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if rook start pos is "e4" and end pos is "a4" with opposite color piece at position 2', () => { // eslint-disable-line max-len
        const start = 'e4';
        const posOne = 'd4';
        const posTwo = 'c4';
        const posThree = 'b4';
        const end = 'a4';
        const board = new Board();
        const rook = new Rook(start, COLORS.black);
        board.pieces[start] = rook;
        board.pieces[posTwo] = new Piece(posTwo, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = rook.obsticleCheck(
          start, end, deltaX, deltaY, rook, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if rook start pos is "e4" and end pos is "a4" with opposite color piece at position 3', () => { // eslint-disable-line max-len
        const start = 'e4';
        const posOne = 'd4';
        const posTwo = 'c4';
        const posThree = 'b4';
        const end = 'a4';
        const board = new Board();
        const rook = new Rook(start, COLORS.black);
        board.pieces[start] = rook;
        board.pieces[posThree] = new Piece(posThree, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = rook.obsticleCheck(
          start, end, deltaX, deltaY, rook, board);
        expect(result).toBe(true); // no obstruction
      });
    });
  });
});
