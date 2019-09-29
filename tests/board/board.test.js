const { Board } = require('../../src/board');

describe('board', () => {
  it('delta between a1 and a2 shoud return 0 and -1', () => {
    const board = new Board();
    const result = board.calculateDelta('a1', 'a2');
    expect(result[0]).toBe(0);
    expect(result[1]).toBe(-1);
  });
  it('delta between a2 and a1 shoud return 0 and 1', () => {
    const board = new Board();
    const result = board.calculateDelta('a2', 'a1');
    expect(result[0]).toBe(0);
    expect(result[1]).toBe(1);
  });
  it('delta between a2 and b7 shoud return -1 and -5', () => {
    const board = new Board();
    const result = board.calculateDelta('a2', 'b7');
    expect(result[0]).toBe(-1);
    expect(result[1]).toBe(-5);
  });
  it('delta between b7 and a2 shoud return 1 and 5', () => {
    const board = new Board();
    const result = board.calculateDelta('b7', 'a2');
    expect(result[0]).toBe(1);
    expect(result[1]).toBe(5);
  });
});
