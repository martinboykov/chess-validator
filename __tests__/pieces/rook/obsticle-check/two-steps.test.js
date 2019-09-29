const COLORS = require('../../../../src/util').COLORS;
const { Board } = require('../../../../src/board');
const { Piece } = require('../../../../src/pieces/piece');
const { Rook } = require('../../../../src/pieces/rook');

describe('rook', () => {
  beforeAll(() => {

  });
  describe('obsticle check', () => {
    // one step is not necessary as the conditions (isEnemyAttacked || isEndEmpty) are already met
    describe('two steps distance', () => { // checking if positions 1 is obstructed
      it('should return "false" if rook start pos is "e4" and end pos is "e6" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'e6';
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
      it('should return "true" if rook start pos is "e4" and end pos is "e6" with same color piece at mid', () => { // eslint-disable-line max-len
        const start = 'e4';
        const mid = 'e5';
        const end = 'e6';
        const board = new Board();
        const rook = new Rook(start, COLORS.black);
        board.pieces[start] = rook;
        board.pieces[mid] = new Piece(mid, COLORS.black);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = rook.obsticleCheck(
          start, end, deltaX, deltaY, rook, board);
        expect(result).toBe(true); // obstruction
      });
      it('should return "true" if rook start pos is "e4" and end pos is "e6" with opposite color piece at mid', () => { // eslint-disable-line max-len
        const start = 'e4';
        const mid = 'e5';
        const end = 'e6';
        const board = new Board();
        const rook = new Rook(start, COLORS.black);
        board.pieces[start] = rook;
        board.pieces[mid] = new Piece(mid, COLORS.white);
        const delta = board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const result = rook.obsticleCheck(
          start, end, deltaX, deltaY, rook, board);
        expect(result).toBe(true); // obstruction
      });
    });
  });
});
