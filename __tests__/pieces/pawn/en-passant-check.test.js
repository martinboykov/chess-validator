const { COLORS } = require('../../../src/util');
const { Chess } = require('../../../src/chess');
const { Pawn } = require('../../../src/pieces/pawn');
describe('pawn', () => {
  beforeAll(() => {

  });
  describe('en-passant check', () => {
    it(`should set chess.enPassant.state to "true" and
      chess.enPassant.pos to end if white pawn start pos is "e2" and
      end pos is "e4" with no obsicle infront`, () => { // eslint-disable-line max-len
      const start = 'e2';
      const end = 'e4';
      const chess = new Chess();
      chess.kingCount = 2;
      const pawn = new Pawn(start, COLORS.white);
      chess.board.pieces[pawn.pos] = pawn;
      chess.makeMove(start, end);
      expect(chess.enPassant.state).toBe(true);
      expect(chess.enPassant.pos).toBe(end);
    });
    it(`should not set chess.enPassant.state to "true" and
      chess.enPassant.pos to end if white pawn start pos is "e2" and
      end pos is "e3" with no obsicle infront`, () => { // eslint-disable-line max-len
      const start = 'e2';
      const end = 'e3';
      const chess = new Chess();
      chess.kingCount = 2;
      const pawn = new Pawn(start, COLORS.white);
      chess.board.pieces[pawn.pos] = pawn;
      chess.makeMove(start, end);
      expect(chess.enPassant.state).toBe(false);
      expect(chess.enPassant.pos).toBe(null);
    });
    it(`should reset chess.enPassant.state to "false" and
      chess.enPassant.pos to null if no en-passant move is made
      and pown is not making special initial move`, () => { // eslint-disable-line max-len
      let start = 'e2';
      let end = 'e4';
      const chess = new Chess();
      chess.kingCount = 2;
      const pawnWhite = new Pawn(start, COLORS.white);
      chess.board.pieces[pawnWhite.pos] = pawnWhite;
      chess.makeMove(start, end);
      start = 'd7';
      end = 'd6';
      const pawnBlack = new Pawn(start, COLORS.black);
      chess.board.pieces[pawnBlack.pos] = pawnBlack;
      const delta = chess.board.calculateDelta(end, start);
      const deltaX = delta[0];
      const deltaY = delta[1];
      const isEnpassantFound = pawnBlack.enPassantMoveCheck(
        pawnBlack, deltaX, deltaY, chess);
      expect(isEnpassantFound).toBe(false);
      chess.makeMove(start, end);
      expect(chess.enPassant.state).toBe(false);
      expect(chess.enPassant.pos).toBe(null);
    });
    describe('white', () => {
      it(`should reset chess.enPassant.state to "false" and
      chess.enPassant.pos to null and should remove enemy pawn if
      en-passant move is made on right side`, () => { // eslint-disable-line max-len
        let start = 'e2';
        let end = 'e4';
        const chess = new Chess();
        chess.kingCount = 2;
        const pawnWhite = new Pawn(start, COLORS.white);
        chess.board.pieces[pawnWhite.pos] = pawnWhite;
        chess.makeMove(start, end);
        start = 'd4';
        end = 'e3';
        const pawnBlack = new Pawn(start, COLORS.black);
        chess.board.pieces[pawnBlack.pos] = pawnBlack;
        const delta = chess.board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const isEnpassantFound = pawnBlack.enPassantMoveCheck(
          pawnBlack, deltaX, deltaY, chess);
        expect(isEnpassantFound).toBe(true);
        chess.makeMove(start, end);
        expect(chess.board.pieces[pawnWhite.pos]).toBe('.');
        expect(chess.enPassant.state).toBe(false);
        expect(chess.enPassant.pos).toBe(null);
      });
      it(`should reset chess.enPassant.state to "false" and
      chess.enPassant.pos to null and should remove enemy pawn if
      en-passant move is made on left side`, () => { // eslint-disable-line max-len
        let start = 'e2';
        let end = 'e4';
        const chess = new Chess();
        chess.kingCount = 2;
        const pawnWhite = new Pawn(start, COLORS.white);
        chess.board.pieces[pawnWhite.pos] = pawnWhite;
        chess.makeMove(start, end);
        start = 'f4';
        end = 'e3';
        const pawnBlack = new Pawn(start, COLORS.black);
        chess.board.pieces[pawnBlack.pos] = pawnBlack;
        const delta = chess.board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const isEnpassantFound = pawnBlack.enPassantMoveCheck(
          pawnBlack, deltaX, deltaY, chess);
        expect(isEnpassantFound).toBe(true);
        chess.makeMove(start, end);
        expect(chess.board.pieces[pawnWhite.pos]).toBe('.');
        expect(chess.enPassant.state).toBe(false);
        expect(chess.enPassant.pos).toBe(null);
      });
      it(`should reset chess.enPassant.state to "false" and
      chess.enPassant.pos to null and should not remove enemy pawn if
      en-passant move is not made`, () => { // eslint-disable-line max-len
        let start = 'e2';
        let end = 'e4';
        const chess = new Chess();
        chess.kingCount = 2;
        const pawnWhite = new Pawn(start, COLORS.white);
        chess.board.pieces[pawnWhite.pos] = pawnWhite;
        chess.makeMove(start, end);
        start = 'd4';
        end = 'd3';
        const pawnBlack = new Pawn(start, COLORS.black);
        chess.board.pieces[pawnBlack.pos] = pawnBlack;
        const delta = chess.board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const isEnpassantFound = pawnBlack.enPassantMoveCheck(
          pawnBlack, deltaX, deltaY, chess);
        expect(isEnpassantFound).toBe(false);
        chess.makeMove(start, end);
        expect(chess.board.pieces[pawnWhite.pos].type).toBe('p');
        expect(chess.enPassant.state).toBe(false);
        expect(chess.enPassant.pos).toBe(null);
      });
      it(`should reset chess.enPassant.state to "false" and
      chess.enPassant.pos to null and should not remove enemy pawn
      on en-passant if en-passant move is not made, but enemy pown is taken on left`, () => { // eslint-disable-line max-len
        let start = 'e2';
        let end = 'e4';
        const chess = new Chess();
        chess.kingCount = 2;
        const pawnWhite = new Pawn(start, COLORS.white);
        chess.board.pieces[pawnWhite.pos] = pawnWhite;
        chess.makeMove(start, end);
        start = 'd4';
        end = 'c3';
        chess.board.pieces[end] = new Pawn(end, COLORS.white);
        const pawnBlack = new Pawn(start, COLORS.black);
        chess.board.pieces[pawnBlack.pos] = pawnBlack;
        const delta = chess.board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const isEnpassantFound = pawnBlack.enPassantMoveCheck(
          pawnBlack, deltaX, deltaY, chess);
        expect(isEnpassantFound).toBe(false);
        chess.makeMove(start, end);
        expect(chess.board.pieces[pawnWhite.pos].type).toBe('p');
        expect(chess.enPassant.state).toBe(false);
        expect(chess.enPassant.pos).toBe(null);
      });
      it(`should reset chess.enPassant.state to "false" and
      chess.enPassant.pos to null and should not remove enemy pawn
      on en-passant if en-passant move is not made, but enemy pown is taken on right`, () => { // eslint-disable-line max-len
        let start = 'e2';
        let end = 'e4';
        const chess = new Chess();
        chess.kingCount = 2;
        const pawnWhite = new Pawn(start, COLORS.white);
        chess.board.pieces[pawnWhite.pos] = pawnWhite;
        chess.makeMove(start, end);
        start = 'f4';
        end = 'g3';
        chess.board.pieces[end] = new Pawn(end, COLORS.white);
        const pawnBlack = new Pawn(start, COLORS.black);
        chess.board.pieces[pawnBlack.pos] = pawnBlack;
        const delta = chess.board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const isEnpassantFound = pawnBlack.enPassantMoveCheck(
          pawnBlack, deltaX, deltaY, chess);
        expect(isEnpassantFound).toBe(false);
        chess.makeMove(start, end);
        expect(chess.board.pieces[pawnWhite.pos].type).toBe('p');
        expect(chess.enPassant.state).toBe(false);
        expect(chess.enPassant.pos).toBe(null);
      });
    });
    describe('black', () => {
      it(`should reset chess.enPassant.state to "false" and
      chess.enPassant.pos to null and should remove enemy pawn if
      en-passant move is made on left side`, () => { // eslint-disable-line max-len
        const chess = new Chess();
        chess.kingCount = 2;
        chess.order = !chess.order;
        let start = 'd7';
        let end = 'd5';
        const pawnBlack = new Pawn(start, COLORS.black);
        chess.board.pieces[pawnBlack.pos] = pawnBlack;
        chess.makeMove(start, end);
        start = 'e5';
        end = 'd6';
        const pawnWhite = new Pawn(start, COLORS.white);
        chess.board.pieces[pawnWhite.pos] = pawnWhite;
        const delta = chess.board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const isEnpassantFound = pawnWhite.enPassantMoveCheck(
          pawnWhite, deltaX, deltaY, chess);
        expect(isEnpassantFound).toBe(true);
        chess.makeMove(start, end);
        expect(chess.board.pieces[pawnBlack.pos]).toBe('.');
        expect(chess.enPassant.state).toBe(false);
        expect(chess.enPassant.pos).toBe(null);
      });
      it(`should reset chess.enPassant.state to "false" and
      chess.enPassant.pos to null and should remove enemy pawn if
      en-passant move is made on right side`, () => { // eslint-disable-line max-len
        const chess = new Chess();
        chess.kingCount = 2;
        chess.order = !chess.order;
        let start = 'd7';
        let end = 'd5';
        const pawnBlack = new Pawn(start, COLORS.black);
        chess.board.pieces[pawnBlack.pos] = pawnBlack;
        chess.makeMove(start, end);
        start = 'c5';
        end = 'd6';
        const pawnWhite = new Pawn(start, COLORS.white);
        chess.board.pieces[pawnWhite.pos] = pawnWhite;
        const delta = chess.board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const isEnpassantFound = pawnWhite.enPassantMoveCheck(
          pawnWhite, deltaX, deltaY, chess);
        expect(isEnpassantFound).toBe(true);
        chess.makeMove(start, end);
        expect(chess.board.pieces[pawnBlack.pos]).toBe('.');
        expect(chess.enPassant.state).toBe(false);
        expect(chess.enPassant.pos).toBe(null);
      });
      it(`should reset chess.enPassant.state to "false" and
      chess.enPassant.pos to null and should not remove enemy pawn if
      en-passant move is not made`, () => { // eslint-disable-line max-len
        const chess = new Chess();
        chess.kingCount = 2;
        chess.order = !chess.order;
        let start = 'd7';
        let end = 'd5';
        const pawnBlack = new Pawn(start, COLORS.black);
        chess.board.pieces[pawnBlack.pos] = pawnBlack;
        chess.makeMove(start, end);
        start = 'c5';
        end = 'c6';
        const pawnWhite = new Pawn(start, COLORS.white);
        chess.board.pieces[pawnWhite.pos] = pawnWhite;
        const delta = chess.board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const isEnpassantFound = pawnWhite.enPassantMoveCheck(
          pawnWhite, deltaX, deltaY, chess);
        expect(isEnpassantFound).toBe(false);
        chess.makeMove(start, end);
        expect(chess.board.pieces[pawnBlack.pos].type).toBe('p');
        expect(chess.enPassant.state).toBe(false);
        expect(chess.enPassant.pos).toBe(null);
      });
      it(`should reset chess.enPassant.state to "false" and
      chess.enPassant.pos to null and should not remove enemy pawn
      on en-passant if en-passant move is not made but enemy pown is taken on left`, () => { // eslint-disable-line max-len
        const chess = new Chess();
        chess.kingCount = 2;
        chess.order = !chess.order;
        let start = 'd7';
        let end = 'd5';
        const pawnBlack = new Pawn(start, COLORS.black);
        chess.board.pieces[pawnBlack.pos] = pawnBlack;
        chess.makeMove(start, end);
        start = 'c5';
        end = 'b6';
        const pawnWhite = new Pawn(start, COLORS.white);
        chess.board.pieces[pawnWhite.pos] = pawnWhite;
        chess.board.pieces[end] = new Pawn(end, COLORS.black);
        const delta = chess.board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const isEnpassantFound = pawnWhite.enPassantMoveCheck(
          pawnWhite, deltaX, deltaY, chess);
        expect(isEnpassantFound).toBe(false);
        chess.makeMove(start, end);
        expect(chess.board.pieces[pawnBlack.pos].type).toBe('p');
        expect(chess.enPassant.state).toBe(false);
        expect(chess.enPassant.pos).toBe(null);
      });
      it(`should reset chess.enPassant.state to "false" and
      chess.enPassant.pos to null and should not remove enemy pawn
      on en-passant if en-passant move is not made but enemy pown is taken on right`, () => { // eslint-disable-line max-len
        const chess = new Chess();
        chess.kingCount = 2;
        chess.order = !chess.order;
        let start = 'd7';
        let end = 'd5';
        const pawnBlack = new Pawn(start, COLORS.black);
        chess.board.pieces[pawnBlack.pos] = pawnBlack;
        chess.makeMove(start, end);
        start = 'e5';
        end = 'f6';
        const pawnWhite = new Pawn(start, COLORS.white);
        chess.board.pieces[pawnWhite.pos] = pawnWhite;
        chess.board.pieces[end] = new Pawn(end, COLORS.black);
        const delta = chess.board.calculateDelta(end, start);
        const deltaX = delta[0];
        const deltaY = delta[1];
        const isEnpassantFound = pawnWhite.enPassantMoveCheck(
          pawnWhite, deltaX, deltaY, chess);
        expect(isEnpassantFound).toBe(false);
        chess.makeMove(start, end);
        expect(chess.board.pieces[pawnBlack.pos].type).toBe('p');
        expect(chess.enPassant.state).toBe(false);
        expect(chess.enPassant.pos).toBe(null);
      });
    });
  });
});
