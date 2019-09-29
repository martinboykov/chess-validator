const COLORS = require('../../../src/util').COLORS;
const { Board } = require('../../../src/board');
const { Piece } = require('../../../src/pieces/piece');
const { Bishop } = require('../../../src/pieces/bishop');

describe('bishop', () => {
  beforeAll(() => {

  });
  describe('obsticle check', () => {
    // one step is not necessary as the conditions (isEnemyAttacked || isEndEmpty) are already met
    describe('two steps distance', () => { // checking if positions 1 is obstructed
      it('should return "false" if bishop start pos is "e4" and end pos is "g6" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'g6';
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
      it('should return "true" if bishop start pos is "e4" and end pos is "g6" with same color piece at mid', () => { // eslint-disable-line max-len
        const start = 'e4';
        const mid = 'f5';
        const end = 'g6';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[mid] = new Piece(mid, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // obstruction
      });
      it('should return "true" if bishop start pos is "e4" and end pos is "g6" with opposite color piece at mid', () => { // eslint-disable-line max-len
        const start = 'e4';
        const mid = 'f5';
        const end = 'g6';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[mid] = new Piece(mid, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // obstruction
      });
    });
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
    describe('four steps distance', () => { // checking if positions 1, 2 or 3 are obstructed
      it('should return "false" if bishop start pos is "a8" and end pos is "e4" without obstructions at position 1 and 2', () => { // eslint-disable-line max-len
        const start = 'a8';
        const posOne = 'b7';
        const posTwo = 'c6';
        const posThree = 'd5';
        const end = 'e4';
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
      it('should return "true" if bishop start pos is "a8" and end pos is "e4" with same color piece at position 1', () => { // eslint-disable-line max-len
        const start = 'a8';
        const posOne = 'b7';
        const posTwo = 'c6';
        const posThree = 'd5';
        const end = 'e4';
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
      it('should return "true" if bishop start pos is "a8" and end pos is "e4" with same color piece at position 2', () => { // eslint-disable-line max-len
        const start = 'a8';
        const posOne = 'b7';
        const posTwo = 'c6';
        const posThree = 'd5';
        const end = 'e4';
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
      it('should return "true" if bishop start pos is "a8" and end pos is "e4" with same color piece at position 3', () => { // eslint-disable-line max-len
        const start = 'a8';
        const posOne = 'b7';
        const posTwo = 'c6';
        const posThree = 'd5';
        const end = 'e4';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posThree] = new Piece(posThree, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if bishop start pos is "a8" and end pos is "e4" with opposite color piece at position 1', () => { // eslint-disable-line max-len
        const start = 'a8';
        const posOne = 'b7';
        const posTwo = 'c6';
        const posThree = 'd5';
        const end = 'e4';
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
      it('should return "true" if bishop start pos is "a8" and end pos is "e4" with opposite color piece at position 2', () => { // eslint-disable-line max-len
        const start = 'a8';
        const posOne = 'b7';
        const posTwo = 'c6';
        const posThree = 'd5';
        const end = 'e4';
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
      it('should return "true" if bishop start pos is "a8" and end pos is "e4" with opposite color piece at position 3', () => { // eslint-disable-line max-len
        const start = 'a8';
        const posOne = 'b7';
        const posTwo = 'c6';
        const posThree = 'd5';
        const end = 'e4';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posThree] = new Piece(posThree, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
    });
    describe('five steps distance', () => { // checking if positions 1, 2, 3, or 4 are obstructed
      it('should return "false" if bishop start pos is "h1" and end pos is "c6" without obstructions at position 1 and 2', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
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
      it('should return "true" if bishop start pos is "h1" and end pos is "c6" with same color piece at position 1', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
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
      it('should return "true" if bishop start pos is "h1" and end pos is "c6" with same color piece at position 2', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
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
      it('should return "true" if bishop start pos is "h1" and end pos is "c6" with same color piece at position 3', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posThree] = new Piece(posThree, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if bishop start pos is "h1" and end pos is "c6" with same color piece at position 4', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posFour] = new Piece(posFour, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if bishop start pos is "h1" and end pos is "c6" with opposite color piece at position 1', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
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
      it('should return "true" if bishop start pos is "h1" and end pos is "c6" with opposite color piece at position 2', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
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
      it('should return "true" if bishop start pos is "h1" and end pos is "c6" with opposite color piece at position 3', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posThree] = new Piece(posThree, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if bishop start pos is "h1" and end pos is "c6" with opposite color piece at position 4', () => { // eslint-disable-line max-len
        const start = 'h1';
        const posOne = 'g2';
        const posTwo = 'f3';
        const posThree = 'e4';
        const posFour = 'd5';
        const end = 'c6';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posFour] = new Piece(posFour, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
    });
    describe('six steps distance', () => { // checking if positions 1, 2, 3, 4, or 5 are obstructed
      it('should return "false" if bishop start pos is "h8" and end pos is "b2" without obstructions at position 1 and 2', () => { // eslint-disable-line max-len
        const start = 'h8';
        const posOne = 'g7';
        const posTwo = 'f6';
        const posThree = 'e5';
        const posFour = 'd4';
        const posFive = 'c3';
        const end = 'b2';
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
      it('should return "true" if bishop start pos is "h8" and end pos is "b2" with same color piece at position 1', () => { // eslint-disable-line max-len
        const start = 'h8';
        const posOne = 'g7';
        const posTwo = 'f6';
        const posThree = 'e5';
        const posFour = 'd4';
        const posFive = 'c3';
        const end = 'b2';
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
      it('should return "true" if bishop start pos is "h1" and end pos is "c6" with same color piece at position 2', () => { // eslint-disable-line max-len
        const start = 'h8';
        const posOne = 'g7';
        const posTwo = 'f6';
        const posThree = 'e5';
        const posFour = 'd4';
        const posFive = 'c3';
        const end = 'b2';
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
      it('should return "true" if bishop start pos is "h8" and end pos is "b2" with same color piece at position 3', () => { // eslint-disable-line max-len
        const start = 'h8';
        const posOne = 'g7';
        const posTwo = 'f6';
        const posThree = 'e5';
        const posFour = 'd4';
        const posFive = 'c3';
        const end = 'b2';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posThree] = new Piece(posThree, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if bishop start pos is "h8" and end pos is "b2" with same color piece at position 4', () => { // eslint-disable-line max-len
        const start = 'h8';
        const posOne = 'g7';
        const posTwo = 'f6';
        const posThree = 'e5';
        const posFour = 'd4';
        const posFive = 'c3';
        const end = 'b2';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posFour] = new Piece(posFour, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if bishop start pos is "h8" and end pos is "b2" with same color piece at position 5', () => { // eslint-disable-line max-len
        const start = 'h8';
        const posOne = 'g7';
        const posTwo = 'f6';
        const posThree = 'e5';
        const posFour = 'd4';
        const posFive = 'c3';
        const end = 'b2';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posFive] = new Piece(posFive, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if bishop start pos is "h8" and end pos is "b2" with opposite color piece at position 1', () => { // eslint-disable-line max-len
        const start = 'h8';
        const posOne = 'g7';
        const posTwo = 'f6';
        const posThree = 'e5';
        const posFour = 'd4';
        const posFive = 'c3';
        const end = 'b2';
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
      it('should return "true" if bishop start pos is "h8" and end pos is "b2" with opposite color piece at position 2', () => { // eslint-disable-line max-len
        const start = 'h8';
        const posOne = 'g7';
        const posTwo = 'f6';
        const posThree = 'e5';
        const posFour = 'd4';
        const posFive = 'c3';
        const end = 'b2';
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
      it('should return "true" if bishop start pos is "h8" and end pos is "b2" with opposite color piece at position 3', () => { // eslint-disable-line max-len
        const start = 'h8';
        const posOne = 'g7';
        const posTwo = 'f6';
        const posThree = 'e5';
        const posFour = 'd4';
        const posFive = 'c3';
        const end = 'b2';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posThree] = new Piece(posThree, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if bishop start pos is "h8" and end pos is "b2" with opposite color piece at position 4', () => { // eslint-disable-line max-len
        const start = 'h8';
        const posOne = 'g7';
        const posTwo = 'f6';
        const posThree = 'e5';
        const posFour = 'd4';
        const posFive = 'c3';
        const end = 'b2';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posFour] = new Piece(posFour, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = bishop.obsticleCheck(
          start, end, deltaX, deltaY, bishop, board);
        expect(result).toBe(true); // no obstruction
      });
      it('should return "true" if bishop start pos is "h8" and end pos is "b2" with opposite color piece at position 5', () => { // eslint-disable-line max-len
        const start = 'h8';
        const posOne = 'g7';
        const posTwo = 'f6';
        const posThree = 'e5';
        const posFour = 'd4';
        const posFive = 'c3';
        const end = 'b2';
        const board = new Board();
        const bishop = new Bishop(start, COLORS.black);
        board.pieces[start] = bishop;
        board.pieces[posFive] = new Piece(posFive, COLORS.white);
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
