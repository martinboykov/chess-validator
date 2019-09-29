const { dataHandler, errorHandler } = require('../../src/util');

describe('file reader', () => {
  beforeEach(() => {

  });
  describe('errorHandler', () => {
    it('Should Throw Error with message containing `not exist', () => { // eslint-disable-line max-len
      const error = { code: 'ENOENT' };
      const file = 'string';
      function errorHandlerWrapper() {
        errorHandler(error, file);
      }
      // const expected = `Invalid input detected on line = ${lineCount}`;
      expect(errorHandlerWrapper).toThrowError(/not exist/);
    });
    it('Should Throw Error with message containing `permission', () => { // eslint-disable-line max-len
      const error = { code: 'EACCES' };
      const file = 'string';
      function errorHandlerWrapper() {
        errorHandler(error, file);
      }
      // const expected = `Invalid input detected on line = ${lineCount}`;
      expect(errorHandlerWrapper).toThrowError(/permission/i);
    });
    it('Should Throw Error with message containing `error occured', () => { // eslint-disable-line max-len
      const error = { code: '' };
      const file = 'string';
      function errorHandlerWrapper() {
        errorHandler(error, file);
      }
      // const expected = `Invalid input detected on line = ${lineCount}`;
      expect(errorHandlerWrapper).toThrowError(/error occured/);
    });
  });
  describe('dataHandler', () => {
    it('Should return Array with length 2', () => { // eslint-disable-line max-len
      const line = '1. e2-e4   g7-g6';
      const lineCount = 1;
      const expectedWhiteMove = ['e2', 'e4'];
      const expectedBlackMove = ['g7', 'g6'];
      const result = dataHandler(line, lineCount);
      expect(result.length).toBe(2);
      expect(result[0]).toEqual(expect.arrayContaining(expectedWhiteMove));
      expect(result[1]).toEqual(expect.arrayContaining(expectedBlackMove));
    });
    it('Should Throw Error with message containing the current line count', () => { // eslint-disable-line max-len
      const line = '1.e2-e4g7-g6';
      const lineCount = 1;
      function dataHandlerWrapper() {
        dataHandler(line, lineCount);
      }
      // const expected = `Invalid input detected on line = ${lineCount}`;
      expect(dataHandlerWrapper).toThrowError(/1/);
    });
  });
});
