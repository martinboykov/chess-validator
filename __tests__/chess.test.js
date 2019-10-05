const { Chess } = require('../src/chess');
const pieceType = require('../src/pieces');
const { COLORS, TYPES } = require('../src/util');


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
      it('should throw if one of the kings is taken', () => { // eslint-disable-line max-len
        const chess = new Chess();
        const kingWhite = new pieceType.King('e1', COLORS.white);
        chess.board.pieces.e1 = kingWhite;
        chess.kingCount += 1;
        const kingBlack = new pieceType.King('e8', COLORS.black);
        chess.board.pieces.e8 = kingBlack;
        chess.kingCount += 1;
        const queen = new pieceType.Queen('e5', COLORS.white);
        chess.board.pieces.e5 = queen;
        chess.board.pieces.a5 = new pieceType.Queen('a5', COLORS.black);
        queen.validateMove = jest.fn().mockImplementation(() => {
          return true;
        });
        chess.makeMove('e5', 'e8');
        expect(() => {
          chess.makeMove('a5', 'e5');
        }).toThrow();
      });
      it('should return true if no additional moves are made after one of the kings is taken', () => { // eslint-disable-line max-len
        const chess = new Chess();
        const kingWhite = new pieceType.King('e1', COLORS.white);
        chess.board.pieces.e1 = kingWhite;
        chess.kingCount += 1;
        const kingBlack = new pieceType.King('e8', COLORS.black);
        chess.board.pieces.e8 = kingBlack;
        chess.kingCount += 1;
        const queen = new pieceType.Queen('e5', COLORS.white);
        chess.board.pieces.e5 = queen;
        chess.board.pieces.a5 = new pieceType.Queen('a5', COLORS.black);
        queen.validateMove = jest.fn().mockImplementation(() => {
          return true;
        });
        const result = chess.makeMove('e5', 'e8');
        expect(result).toBe(true);
      });
      it('should not throw if none of the kings are taken', () => { // eslint-disable-line max-len
        const chess = new Chess();
        const kingWhite = new pieceType.King('e1', COLORS.white);
        chess.board.pieces.e1 = kingWhite;
        chess.kingCount += 1;
        const kingBlack = new pieceType.King('e8', COLORS.black);
        chess.board.pieces.e8 = kingBlack;
        chess.kingCount += 1;
        const queen = new pieceType.Queen('e5', COLORS.white);
        chess.board.pieces.e5 = queen;
        chess.board.pieces.a5 = new pieceType.Queen('a5', COLORS.black);
        queen.validateMove = jest.fn().mockImplementation(() => {
          return true;
        });
        chess.makeMove('e5', 'e4');
        const result = chess.makeMove('a5', 'e5');
        expect(result).toBe(true);
      });
    });
    describe('pawn promotion', () => {
      describe('white pawn', () => {
        it('should return true if pawn promotion is done succesfully', () => { // eslint-disable-line max-len
          const chess = new Chess();
          chess.kingCount = 2;
          const start = 'a7';
          const end = 'a8';
          const piece = new pieceType.Pawn(start, COLORS.white);
          piece.movementCount = 5;
          chess.board.pieces[start] = piece;
          piece.validateMove = jest.fn().mockImplementation(() => {
            return true;
          });
          chess.pawnPromotionCheck = jest.fn().mockImplementation(() => {
            return true;
          });
          chess.makeMove(start, end);
          let result = false;
          if (chess.board.pieces[end] !== '.') {
            result = chess.board.pieces[end].type === TYPES.queen;
          }
          expect(result).toBe(true);
        });
        it('should return true if pawnPromotionCheck returns false', () => { // eslint-disable-line max-len
          const chess = new Chess();
          chess.kingCount = 2;
          const start = 'a7';
          const end = 'a8';
          const piece = new pieceType.Pawn(start, COLORS.white);
          piece.movementCount = 5;
          chess.board.pieces[start] = piece;
          piece.validateMove = jest.fn().mockImplementation(() => {
            return true;
          });
          chess.pawnPromotionCheck = jest.fn().mockImplementation(() => {
            return false;
          });
          chess.makeMove(start, end);
          let result = false;
          if (chess.board.pieces[end] !== '.') {
            result = chess.board.pieces[end].type === TYPES.queen;
          }
          expect(result).toBe(false);
        });
        it('should return true if piece is not pawn', () => { // eslint-disable-line max-len
          const chess = new Chess();
          chess.kingCount = 2;
          const start = 'a7';
          const end = 'a8';
          const piece = new pieceType.Piece(start, COLORS.white);
          piece.movementCount = 5;
          chess.board.pieces[start] = piece;
          piece.validateMove = jest.fn().mockImplementation(() => {
            return true;
          });
          chess.pawnPromotionCheck = jest.fn().mockImplementation(() => {
            return true;
          });
          chess.makeMove(start, end);
          let result = false;
          if (chess.board.pieces[end] !== '.') {
            result = chess.board.pieces[end].type === TYPES.queen;
          }
          expect(result).toBe(false);
        });
        it('should return true if piece is not pawn', () => { // eslint-disable-line max-len
          const chess = new Chess();
          chess.kingCount = 2;
          const start = 'a7';
          const end = 'a8';
          const piece = new pieceType.Piece(start, COLORS.white);
          piece.movementCount = 5;
          chess.board.pieces[start] = piece;
          piece.validateMove = jest.fn().mockImplementation(() => {
            return true;
          });
          chess.pawnPromotionCheck = jest.fn().mockImplementation(() => {
            return true;
          });
          chess.makeMove(start, end);
          let result = false;
          if (chess.board.pieces[end] !== '.') {
            result = chess.board.pieces[end].type === TYPES.queen;
          }
          expect(result).toBe(false);
        });
      });
      describe('black pawn', () => {
        it('should return true if pawn promotion is done succesfully', () => { // eslint-disable-line max-len
          const chess = new Chess();
          chess.kingCount = 2;
          const start = 'a2';
          const end = 'a1';
          chess.order = !chess.order;
          const piece = new pieceType.Pawn(start, COLORS.black);
          piece.movementCount = 5;
          chess.board.pieces[start] = piece;
          piece.validateMove = jest.fn().mockImplementation(() => {
            return true;
          });
          chess.pawnPromotionCheck = jest.fn().mockImplementation(() => {
            return true;
          });
          chess.makeMove(start, end);
          let result = false;
          if (chess.board.pieces[end] !== '.') {
            result = chess.board.pieces[end].type === TYPES.queen;
          }
          expect(result).toBe(true);
        });
        it('should return true if pawnPromotionCheck returns false', () => { // eslint-disable-line max-len
          const chess = new Chess();
          chess.kingCount = 2;
          const start = 'a2';
          const end = 'a1';
          const piece = new pieceType.Pawn(start, COLORS.black);
          piece.movementCount = 5;
          chess.board.pieces[start] = piece;
          piece.validateMove = jest.fn().mockImplementation(() => {
            return true;
          });
          chess.pawnPromotionCheck = jest.fn().mockImplementation(() => {
            return false;
          });
          chess.makeMove(start, end);
          let result = false;
          if (chess.board.pieces[end] !== '.') {
            result = chess.board.pieces[end].type === TYPES.queen;
          }
          expect(result).toBe(false);
        });
        it('should return true if piece is not pawn', () => { // eslint-disable-line max-len
          const chess = new Chess();
          chess.kingCount = 2;
          const start = 'a2';
          const end = 'a1';
          const piece = new pieceType.Piece(start, COLORS.black);
          piece.movementCount = 5;
          chess.board.pieces[start] = piece;
          piece.validateMove = jest.fn().mockImplementation(() => {
            return true;
          });
          chess.pawnPromotionCheck = jest.fn().mockImplementation(() => {
            return true;
          });
          chess.makeMove(start, end);
          let result = false;
          if (chess.board.pieces[end] !== '.') {
            result = chess.board.pieces[end].type === TYPES.queen;
          }
          expect(result).toBe(false);
        });
        it('should return true if piece is not pawn', () => { // eslint-disable-line max-len
          const chess = new Chess();
          chess.kingCount = 2;
          const start = 'a2';
          const end = 'a1';
          const piece = new pieceType.Piece(start, COLORS.black);
          piece.movementCount = 5;
          chess.board.pieces[start] = piece;
          piece.validateMove = jest.fn().mockImplementation(() => {
            return true;
          });
          chess.pawnPromotionCheck = jest.fn().mockImplementation(() => {
            return true;
          });
          chess.makeMove(start, end);
          let result = false;
          if (chess.board.pieces[end] !== '.') {
            result = chess.board.pieces[end].type === TYPES.queen;
          }
          expect(result).toBe(false);
        });
      });
    });
  });
  describe('enemyAttackedCheck', () => {
    it('should return true if on start pos the piece is with white color and on end pos the piece is with black color', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new pieceType.Piece(start, COLORS.white);
      chess.board.pieces[end] = new pieceType.Piece(end, COLORS.black);
      const result = chess.enemyAttackedCheck(
        start, end);
      expect(result).toBe(true);
    });
    it('return false if on start pos the piece is with white color and on end pos the piece is with white color should', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new pieceType.Piece(start, COLORS.white);
      chess.board.pieces[end] = new pieceType.Piece(end, COLORS.white);
      const result = chess.enemyAttackedCheck(
        start, end);
      expect(result).toBe(false);
    });
    it('should return false if on start pos the piece is with white color and on end pos is no piece', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new pieceType.Piece(start, COLORS.white);
      const result = chess.enemyAttackedCheck(
        start, end);
      expect(result).toBe(false);
    });
    it('should return true if on start pos the piece is with black color and on end pos the piece is with white color', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new pieceType.Piece(start, COLORS.black);
      chess.board.pieces[end] = new pieceType.Piece(end, COLORS.white);
      const result = chess.enemyAttackedCheck(
        start, end);
      expect(result).toBe(true);
    });
    it('should return false if on start pos the piece is with black color and on end pos the piece is with black color', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new pieceType.Piece(start, COLORS.black);
      chess.board.pieces[end] = new pieceType.Piece(end, COLORS.black);
      const result = chess.enemyAttackedCheck(
        start, end);
      expect(result).toBe(false);
    });
    it('should return false if on start pos the piece is with black color and on end pos is no piece', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new pieceType.Piece(start, COLORS.black);
      const result = chess.enemyAttackedCheck(
        start, end);
      expect(result).toBe(false);
    });
  });
  describe('endEmptyCheck', () => {
    it('should return true if on end pos there is no piece', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new pieceType.Piece(start, COLORS.white);
      const result = chess.endEmptyCheck(end);
      expect(result).toBe(true);
    });
    it('should return false if on end pos there is piece with same color', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new pieceType.Piece(start, COLORS.white);
      chess.board.pieces[end] = new pieceType.Piece(end, COLORS.white);
      const result = chess.endEmptyCheck(end);
      expect(result).toBe(false);
    });
    it('should return false if on end pos there is piece with another color', () => { // eslint-disable-line max-len
      const chess = new Chess();
      const start = 'a2';
      const end = 'b3';
      chess.board.pieces[start] = new pieceType.Piece(start, COLORS.white);
      chess.board.pieces[end] = new pieceType.Piece(end, COLORS.black);
      const result = chess.endEmptyCheck(end);
      expect(result).toBe(false);
    });
  });
  describe('pawnPromotionCheck', () => {
    describe('white', () => {
      ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'].forEach((pos) => {
        it(`should return true if end pos is ${pos} and piece is white`, () => { // eslint-disable-line max-len
          const chess = new Chess();
          const end = pos;
          const piece = new pieceType.Piece(end, COLORS.white);
          chess.board.pieces[end] = piece;
          const result = chess.pawnPromotionCheck(piece, end);
          expect(result).toBe(true);
        });
      });
      ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'].forEach((pos) => {
        it(`should return false if piece is not reached the other end of the board`, () => { // eslint-disable-line max-len
          const chess = new Chess();
          const end = pos;
          const piece = new pieceType.Piece(end, COLORS.white);
          chess.board.pieces[end] = piece;
          const result = chess.pawnPromotionCheck(piece, end);
          expect(result).toBe(false);
        });
      });
    });
    describe('black', () => {
      ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'].forEach((pos) => {
        it(`should return true if end pos is ${pos} and piece is white`, () => { // eslint-disable-line max-len
          const chess = new Chess();
          const end = pos;
          const piece = new pieceType.Piece(end, COLORS.black);
          chess.board.pieces[end] = piece;
          const result = chess.pawnPromotionCheck(piece, end);
          expect(result).toBe(true);
        });
      });
      ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'].forEach((pos) => {
        it(`should return false if piece is not reached the other end of the board`, () => { // eslint-disable-line max-len
          const chess = new Chess();
          const end = pos;
          const piece = new pieceType.Piece(end, COLORS.black);
          chess.board.pieces[end] = piece;
          const result = chess.pawnPromotionCheck(piece, end);
          expect(result).toBe(false);
        });
      });
    });
  });
  describe('kingRemoveCheck', () => {
    it('should return true if on end position is other color King', () => { // eslint-disable-line max-len
      const start = 'e5';
      const end = 'e1';
      const chess = new Chess();
      const kingWhite = new pieceType.King(end, COLORS.black);
      chess.board.pieces[end] = kingWhite;
      const queen = new pieceType.Queen(start, COLORS.white);
      chess.board.pieces[start] = queen;
      const result = chess.kingRemoveCheck(end);
      expect(result).toBe(true);
    });
    it('should return true if on end position is same color King', () => { // eslint-disable-line max-len
      const start = 'e5';
      const end = 'e1';
      const chess = new Chess();
      const kingWhite = new pieceType.King(end, COLORS.white);
      chess.board.pieces[end] = kingWhite;
      const queen = new pieceType.Queen(start, COLORS.white);
      chess.board.pieces[start] = queen;
      const result = chess.kingRemoveCheck(end);
      expect(result).toBe(true);
    });
    it('should return false if on end position is not King, but empty', () => { // eslint-disable-line max-len
      const start = 'e5';
      const end = 'e1';
      const chess = new Chess();
      const queen = new pieceType.Queen(start, COLORS.white);
      chess.board.pieces[start] = queen;
      const result = chess.kingRemoveCheck(end);
      expect(result).toBe(false);
    });
    it('should return false if on end position is not King, but other piece type', () => { // eslint-disable-line max-len
      const start = 'e5';
      const end = 'e1';
      const chess = new Chess();
      const queen = new pieceType.Queen(start, COLORS.white);
      chess.board.pieces[start] = queen;
      chess.board.pieces[end] = new pieceType.Piece(end, COLORS.black);
      const result = chess.kingRemoveCheck(end);
      expect(result).toBe(false);
    });
  });
});
