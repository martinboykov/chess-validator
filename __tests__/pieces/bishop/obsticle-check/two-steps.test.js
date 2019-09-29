const COLORS = require('../../../../src/util').COLORS;
const { Board } = require('../../../../src/board');
const { Piece } = require('../../../../src/pieces/piece');
const { Bishop } = require('../../../../src/pieces/bishop');

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
  });
});
