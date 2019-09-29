const { COLORS } = require('../../../../../src/util');
const { Board } = require('../../../../../src/board');
const { Piece } = require('../../../../../src/pieces/piece');
const { Queen } = require('../../../../../src/pieces/queen');

describe('queen', () => {
  beforeAll(() => {

  });
  describe('obsticle check', () => {
    describe('five steps distance', () => { // checking if positions 1, 2, 3, or 4 are obstructed
      it('should return "false" if queen start pos is "h1" and end pos is "c6" without obstructions at position 1 and 2', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckDiagonal(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(false); // no obstruction
      });
      it('should return "true" if queen start pos is "h1" and end pos is "c6" with same color piece at position 1', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posOne] = new Piece(posOne, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckDiagonal(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "h1" and end pos is "c6" with same color piece at position 2', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posTwo] = new Piece(posTwo, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckDiagonal(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "h1" and end pos is "c6" with same color piece at position 3', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posThree] = new Piece(posThree, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckDiagonal(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "h1" and end pos is "c6" with same color piece at position 4', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posFour] = new Piece(posFour, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckDiagonal(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "h1" and end pos is "c6" with opposite color piece at position 1', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posOne] = new Piece(posOne, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckDiagonal(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "h1" and end pos is "c6" with opposite color piece at position 2', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posTwo] = new Piece(posTwo, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckDiagonal(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "h1" and end pos is "c6" with opposite color piece at position 3', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posThree] = new Piece(posThree, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckDiagonal(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "h1" and end pos is "c6" with opposite color piece at position 4', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posFour] = new Piece(posFour, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckDiagonal(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
    });
  });
});
