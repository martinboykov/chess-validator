const { Chess } = require('../src/chess');
const { Piece } = require('../src/pieces/piece');
const COLORS = require('../src/util').COLORS;


describe('chess', () => {
  beforeEach(() => {

  });
  describe('makeMove', () => {
    describe('start/end position', () => {
      it('should return `Wrong move: ${start}-${end}` if start pos of move {start,end} is out of board ', () => { // eslint-disable-line max-len
        const chess = new Chess();
        chess.init();
        const start = 'a0';
        const end = 'a3';
        chess.gameOver = jest.fn().mockImplementation(() => {
          return `Wrong move: ${start}-${end}`;
        });
        const result = chess.makeMove(
          start, end);
        expect(result).toBe(`Wrong move: ${start}-${end}`);
      });
      it('should return `Wrong move: ${start}-${end}` if end pos of move {start,end} is out of board ', () => { // eslint-disable-line max-len
        const chess = new Chess();
        chess.init();
        const start = 'a1';
        const end = 'a0';
        chess.gameOver = jest.fn().mockImplementation(() => {
          return `Wrong move: ${start}-${end}`;
        });
        const result = chess.makeMove(
          start, end);
        expect(result).toBe(`Wrong move: ${start}-${end}`);
      });
      it('should return `Wrong move: ${start}-${end}` if on start pos of move {start,end} is no piece on board ', () => { // eslint-disable-line max-len
        const chess = new Chess();
        chess.init();
        const start = 'a3';
        const end = 'a4';
        chess.gameOver = jest.fn().mockImplementation(() => {
          return `Wrong move: ${start}-${end}`;
        });
        const result = chess.makeMove(
          start, end);
        expect(result).toBe(`Wrong move: ${start}-${end}`);
      });
      it('should return "true" if is valid move ', () => { // eslint-disable-line max-len
        const chess = new Chess();
        chess.init();
        const start = 'a2';
        const end = 'a4';
        chess.gameOver = jest.fn().mockImplementation(() => {
          return `Wrong move: ${start}-${end}`;
        });
        const result = chess.makeMove(
          start, end);
        expect(result).toBe(true);
      });
      it('should return `Wrong move: ${start}-${end}` if is unvalid move ', () => { // eslint-disable-line max-len
        const chess = new Chess();
        chess.init();
        const start = 'a2';
        const end = 'a5';
        chess.gameOver = jest.fn().mockImplementation(() => {
          return `Wrong move: ${start}-${end}`;
        });
        const result = chess.makeMove(
          start, end);
        expect(result).toBe(`Wrong move: ${start}-${end}`);
      });
    });
    describe('order of play', () => {
      it('should return "true" if first move of the game is made by white piece', () => { // eslint-disable-line max-len
        const chess = new Chess();
        chess.init();
        const start = 'a2';
        const end = 'a3';
        chess.gameOver =
          jest.fn().mockImplementation(() => `Wrong move: ${start}-${end}`);
        chess.board.pieces[start].validateMove =
          jest.fn().mockImplementation(() => true);
        const result = chess.makeMove(start, end);
        expect(result).toBe(true);
      });
      it('should return `Wrong move: ${start}-${end}` if first move {start, end} of the game is made by black piece', () => { // eslint-disable-line max-len
        const chess = new Chess();
        chess.init();
        const start = 'a7';
        const end = 'a6';
        chess.board.pieces[start].validateMove =
          jest.fn().mockImplementation(() => true);
        const result = chess.makeMove(start, end);
        expect(result).toBe(`Wrong move: ${start}-${end}`);
      });
      it('should return "true" if second move {start, end} of the game is made by black piece', () => { // eslint-disable-line max-len
        const chess = new Chess();
        chess.init();
        let start = 'a2';
        let end = 'a4';
        chess.board.pieces[start].validateMove =
          jest.fn().mockImplementation(() => true);
        chess.makeMove(start, end);
        start = 'a7';
        end = 'a6';
        const result = chess.makeMove(start, end);
        expect(result).toBe(true);
      });
      it('should return `Wrong move: ${start}-${end}` if second move {start, end} of the game is made by white piece', () => { // eslint-disable-line max-len
        const chess = new Chess();
        chess.init();
        let start = 'a2';
        let end = 'a4';
        chess.board.pieces[start].validateMove =
          jest.fn().mockImplementation(() => true);
        chess.makeMove(start, end);
        start = 'a4';
        end = 'a5';
        const result = chess.makeMove(start, end);
        expect(result).toBe(`Wrong move: ${start}-${end}`);
      });
    });
  });
  describe('enemyAttackedCheck', () => {
    it('if on start pos the piece is with white color and on end pos the piece is with black color should return true', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new Piece(start, COLORS.white);
      chess.board.pieces[end] = new Piece(end, COLORS.black);
      const result = chess.enemyAttackedCheck(
        start, end);
      expect(result).toBe(true);
    });
    it('if on start pos the piece is with white color and on end pos the piece is with white color should return false', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new Piece(start, COLORS.white);
      chess.board.pieces[end] = new Piece(end, COLORS.white);
      const result = chess.enemyAttackedCheck(
        start, end);
      expect(result).toBe(false);
    });
    it('if on start pos the piece is with white color and on end pos is no piece should return false', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new Piece(start, COLORS.white);
      const result = chess.enemyAttackedCheck(
        start, end);
      expect(result).toBe(false);
    });
    it('if on start pos the piece is with black color and on end pos the piece is with white color should return true', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new Piece(start, COLORS.black);
      chess.board.pieces[end] = new Piece(end, COLORS.white);
      const result = chess.enemyAttackedCheck(
        start, end);
      expect(result).toBe(true);
    });
    it('if on start pos the piece is with black color and on end pos the piece is with black color should return false', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new Piece(start, COLORS.black);
      chess.board.pieces[end] = new Piece(end, COLORS.black);
      const result = chess.enemyAttackedCheck(
        start, end);
      expect(result).toBe(false);
    });
    it('if on start pos the piece is with black color and on end pos is no piece should return false', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new Piece(start, COLORS.black);
      const result = chess.enemyAttackedCheck(
        start, end);
      expect(result).toBe(false);
    });
  });
});
