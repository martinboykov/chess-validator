const { Chess } = require('../chess');
const { Board } = require('../board');
const { Pawn } = require('../pieces/pawn');
const COLORS = require('../util').COLORS;


describe('chess', () => {
  beforeEach(() => {

  });
  it('if start pos of move {start,end} is out of board return `Wrong move: ${start}-${end}`', () => { // eslint-disable-line max-len
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
  it('if end pos of move {start,end} is out of board return `Wrong move: ${start}-${end}`', () => { // eslint-disable-line max-len
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
  it('if on start pos of move {start,end} is no piece on board return `Wrong move: ${start}-${end}`', () => { // eslint-disable-line max-len
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
  it('if is valid move return "true"', () => { // eslint-disable-line max-len
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
  it('if is unvalid move return `Wrong move: ${start}-${end}`', () => { // eslint-disable-line max-len
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
