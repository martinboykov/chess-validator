const log = require('debug')('pawn');
const { Piece } = require('./piece');
const { TYPES, MOVEMENT_PATTERNS } = require('../util');

class Pawn extends Piece {
  constructor(pos, color) {
    super(pos, color);
    this.type = TYPES.pawn;
    this.movementCount = 0;
    this.pattern = MOVEMENT_PATTERNS.pawn;
  }
  validateMove(deltaX, deltaY, isEnemyAttacked,
    isEndEmpty, piece, chess, start, end) {
    log('color = ', piece.color);
    log('type = ', piece.type);
    log('moveCount = ', piece.movementCount);
    log('position = ', piece.pos);
    log('deltaX, deltaY = ', [deltaX, deltaY]);
    log('isEnemyAttacked = ', isEnemyAttacked);
    log('isEndEmpty = ', isEndEmpty);
    log('enPassant = ', {
      state: chess.enPassant.state, pos: chess.enPassant.pos,
    });
    const isFirstMove = piece.movementCount === 0;
    if (isFirstMove) {
      const isFirstMoveFound = this.firstMoveCheck(piece, deltaX, deltaY);
      log('isFirstMoveFound = ', isFirstMoveFound);
      if (isFirstMoveFound) {
        const isPathBlocked = this.obsticleCheck(
          start, end, deltaX, deltaY, piece, chess.board);
        log('isPathBlocked = ', isPathBlocked);
        if (!isPathBlocked) {
          chess.enPassant.state = true;
          chess.enPassant.pos = end;
          return true;
        }
      }
    }
    if (isEnemyAttacked) {
      log('pattern.white.special.attack = ', this.pattern.white.special.attack); // eslint-disable-line max-len
      log('pattern.black.special.attack = ', this.pattern.black.special.attack); // eslint-disable-line max-len
      const isAttackMoveFound = this.attackMoveCheck(piece, deltaX, deltaY);
      if (isAttackMoveFound) return true;
    }
    if (chess.enPassant.state) {
      // const isAttackMoveFound = this.attackMoveCheck(piece, deltaX, deltaY);
      const isEnpassantFound = this.enPassantMoveCheck(
        piece, deltaX, deltaY, chess);
      if (isEnpassantFound) {
        log('isEnpassantFound = ', isEnpassantFound); // eslint-disable-line max-len
        chess.board.pieces[chess.enPassant.pos] = '.'; // remove the pawn that was taken after en passant move
        chess.enPassant.state = false; // reset en passant state
        chess.enPassant.pos = null; // reset en passant pos
        return true;
      }
    }

    const isRegularMoveFound = this.regularMoveCheck(piece, deltaX, deltaY);
    if (isRegularMoveFound) return true;
    log('regularMovePattern = ', isRegularMoveFound);
    return false;
  }
  obsticleCheck(start, end, deltaX, deltaY, piece, board) {
    const iterationCount = deltaY;
    const coordValue = parseInt(board.coord[start], 10);
    for (let index = 1; index <= iterationCount; index++) {
      const nextIterStep = piece.color ?
        coordValue + index :
        coordValue - index;
      const nextIterCoord = board.coordRev[nextIterStep];
      const nextIterPieceType = board.pieces[nextIterCoord].type || '.';
      log('nextIterStep = ', nextIterStep);
      log('nextIterCoord = ', nextIterCoord);
      log('nextIterPieceType = ', nextIterPieceType);
      if (nextIterPieceType !== '.') return true;
    }
    return false;
  }
  firstMoveCheck(piece, deltaX, deltaY) {
    return piece.color ?
      this.findMovePattern(this.pattern.white.special.first, deltaX, deltaY) :
      this.findMovePattern(this.pattern.black.special.first, deltaX, deltaY);
  }
  regularMoveCheck(piece, deltaX, deltaY) {
    return piece.color ?
      this.findMovePattern(this.pattern.white.regular, deltaX, deltaY) :
      this.findMovePattern(this.pattern.black.regular, deltaX, deltaY);
  }
  attackMoveCheck(piece, deltaX, deltaY) {
    return piece.color ?
      this.findMovePattern(this.pattern.white.special.attack, deltaX, deltaY) :
      this.findMovePattern(this.pattern.black.special.attack, deltaX, deltaY);
  }
  enPassantMoveCheck(piece, deltaX, deltaY, chess) {
    const coordValue = parseInt(chess.board.coord[piece.pos], 10);
    const posOnLeftValue = coordValue - 10;
    const posOnRightValue = coordValue + 10;
    const posOnLeftCoord = chess.board.coordRev[posOnLeftValue];
    const posOnRightCoord = chess.board.coordRev[posOnRightValue];
    if (chess.enPassant.pos === posOnLeftCoord) {
      let validEnPassantMove;
      if (piece.color) {
        validEnPassantMove = this.findMovePattern(
          this.pattern.white.special.attack, deltaX, deltaY);
      } else {
        validEnPassantMove = this.findMovePattern(
          this.pattern.black.special.attack, deltaX, deltaY);
      }
      if (deltaX < 0 && validEnPassantMove) {
        return true;
      }
    }
    if (chess.enPassant.pos === posOnRightCoord) {
      let validEnPassantMove;
      if (piece.color) {
        validEnPassantMove = this.findMovePattern(
          this.pattern.white.special.attack, deltaX, deltaY);
      } else {
        validEnPassantMove = this.findMovePattern(
          this.pattern.black.special.attack, deltaX, deltaY);
      }
      if (deltaX > 0 && validEnPassantMove) {
        return true;
      }
    }
    return false;
  }
  findMovePattern(pattern, deltaX, deltaY) {
    return super.findMovePattern(pattern, deltaX, deltaY);
  }
}

module.exports = {
  Pawn,
};
