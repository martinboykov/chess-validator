
const { FileReader } = require('./file-reader');
const { MOVEMENT_PATTERNS } = require('./move-patterns');

const TYPES = {
	default: '+',
	king: 'k',
	queen: 'q',
	rook: 'r',
	bishop: 'b',
	knight: 'n',
	pawn: 'p',
};

const COLORS = {
	white: true,
	black: false,
};

const PLAY_ORDER = {
	white: true,
	black: false,
};


const STATE = {
	regular: 0,
	check: 1,
	checkmate: 2,
};

module.exports = {
	TYPES,
	COLORS,
	PLAY_ORDER,
	STATE,
	MOVEMENT_PATTERNS,
	FileReader,
};
