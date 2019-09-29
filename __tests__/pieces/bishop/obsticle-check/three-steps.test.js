const COLORS = require('../../../../src/util').COLORS;
const { Board } = require('../../../../src/board');
const { Piece } = require('../../../../src/pieces/piece');
const { Bishop } = require('../../../../src/pieces/bishop');

describe('bishop', () => {
  beforeAll(() => {

  });
  describe('obsticle check', () => {
    describe('three steps distance', () => { // checking if positions 1 or 2 are obstructed
      it('should return "false" if bishop start pos is "e4" and end pos is "h7" without obstructions at position 1 and 2', () => { // eslint-disable-line max-len
        const start = 'e4';
        const posOne = 'f5';
        const posTwo = 'g6';
        const end = 'h7';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(false); // no obstruction
      });
      it('should return "true" if bishop start pos is "e4" and end pos is "h7" with same color piece at position 1', () => { // eslint-disable-line max-len
        const start = 'e4';
        const posOne = 'f5';
        const posTwo = 'g6';
        const end = 'h7';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posOne] = new Piece(posOne, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if bishop start pos is "e4" and end pos is "h7" with same color piece at position 2', () => { // eslint-disable-line max-len
        const start = 'e4';
        const posOne = 'f5';
        const posTwo = 'g6';
        const end = 'h7';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posTwo] = new Piece(posTwo, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if bishop start pos is "e4" and end pos is "h7" with opposite color piece at position 1', () => { // eslint-disable-line max-len
        const start = 'e4';
        const posOne = 'f5';
        const posTwo = 'g6';
        const end = 'h7';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posOne] = new Piece(posOne, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if bishop start pos is "e4" and end pos is "h7" with opposite color piece at position 2', () => { // eslint-disable-line max-len
        const start = 'e4';
        const posOne = 'f5';
        const posTwo = 'g6';
        const end = 'h7';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posTwo] = new Piece(posTwo, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
    });
  });
});
