const { COLORS } = require('../../../../../src/util');
const { Board } = require('../../../../../src/board');
const { Piece } = require('../../../../../src/pieces/piece');
const { Queen } = require('../../../../../src/pieces/queen');

describe('queen', () => {
  beforeAll(() => {

  });
  describe('obsticle check', () => {
    // one step is not necessary as the conditions (isEnemyAttacked || isEndEmpty) are already met
    describe('six steps distance', () => { // checking if positions 1, 2, 3, 4, or 5 are obstructed
      it('should return "false" if queen start pos is "a4" and end pos is "g4" without obstructions at position 1 and 2', () => { // eslint-disable-line max-len
        const start = 'a4';
        const posOne = 'b4';
        const posTwo = 'c4';
        const posThree = 'd4';
        const posFour = 'e4';
        const posFive = 'f4';
        const end = 'g4';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckStraight(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(false); // no obstruction
      });
      it('should return "true" if queen start pos is "e1" and end pos is "e6" with same color piece at position 1', () => { // eslint-disable-line max-len
        const start = 'a4';
        const posOne = 'b4';
        const posTwo = 'c4';
        const posThree = 'd4';
        const posFour = 'e4';
        const posFive = 'f4';
        const end = 'g4';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posOne] = new Piece(posOne, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckStraight(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "e1" and end pos is "e6" with same color piece at position 2', () => { // eslint-disable-line max-len
        const start = 'a4';
        const posOne = 'b4';
        const posTwo = 'c4';
        const posThree = 'd4';
        const posFour = 'e4';
        const posFive = 'f4';
        const end = 'g4';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posTwo] = new Piece(posTwo, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckStraight(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "e1" and end pos is "e6" with same color piece at position 3', () => { // eslint-disable-line max-len
        const start = 'a4';
        const posOne = 'b4';
        const posTwo = 'c4';
        const posThree = 'd4';
        const posFour = 'e4';
        const posFive = 'f4';
        const end = 'g4';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posThree] = new Piece(posThree, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckStraight(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "e1" and end pos is "e6" with same color piece at position 4', () => { // eslint-disable-line max-len
        const start = 'a4';
        const posOne = 'b4';
        const posTwo = 'c4';
        const posThree = 'd4';
        const posFour = 'e4';
        const posFive = 'f4';
        const end = 'g4';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posFour] = new Piece(posFour, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckStraight(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "e1" and end pos is "e6" with same color piece at position 5', () => { // eslint-disable-line max-len
        const start = 'a4';
        const posOne = 'b4';
        const posTwo = 'c4';
        const posThree = 'd4';
        const posFour = 'e4';
        const posFive = 'f4';
        const end = 'g4';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posFive] = new Piece(posFive, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckStraight(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "e1" and end pos is "e6" with opposite color piece at position 1', () => { // eslint-disable-line max-len
        const start = 'a4';
        const posOne = 'b4';
        const posTwo = 'c4';
        const posThree = 'd4';
        const posFour = 'e4';
        const posFive = 'f4';
        const end = 'g4';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posOne] = new Piece(posOne, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckStraight(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "e1" and end pos is "e6" with opposite color piece at position 2', () => { // eslint-disable-line max-len
        const start = 'a4';
        const posOne = 'b4';
        const posTwo = 'c4';
        const posThree = 'd4';
        const posFour = 'e4';
        const posFive = 'f4';
        const end = 'g4';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posTwo] = new Piece(posTwo, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckStraight(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "e1" and end pos is "e6" with opposite color piece at position 3', () => { // eslint-disable-line max-len
        const start = 'a4';
        const posOne = 'b4';
        const posTwo = 'c4';
        const posThree = 'd4';
        const posFour = 'e4';
        const posFive = 'f4';
        const end = 'g4';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posThree] = new Piece(posThree, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckStraight(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "e1" and end pos is "e6" with opposite color piece at position 4', () => { // eslint-disable-line max-len
        const start = 'a4';
        const posOne = 'b4';
        const posTwo = 'c4';
        const posThree = 'd4';
        const posFour = 'e4';
        const posFive = 'f4';
        const end = 'g4';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posFour] = new Piece(posFour, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckStraight(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if queen start pos is "e1" and end pos is "e6" with opposite color piece at position 5', () => { // eslint-disable-line max-len
        const start = 'a4';
        const posOne = 'b4';
        const posTwo = 'c4';
        const posThree = 'd4';
        const posFour = 'e4';
        const posFive = 'f4';
        const end = 'g4';
        const board = new Board();
        const queen = new Queen(start, COLORS.black);
        board.pieces[start] = queen;
        board.pieces[posFive] = new Piece(posFive, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = queen.obsticleCheckStraight(
          start, end, deltaX, deltaY, queen, board);
        expect(result).toBe(true); // no obstruction
      });
    });
  });
});
