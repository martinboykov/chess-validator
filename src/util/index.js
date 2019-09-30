const { ...fileReader } = require('./file-reader');

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

// [x,y]; x -> left (-)/right (+); y -> up (+)/down (-);
const MOVEMENT_PATTERNS = { /*eslint-disable */
  up:           [[ 0, 1], [ 0, 2], [ 0, 3], [ 0, 4], [ 0, 5], [ 0, 6], [ 0, 7]],
  down:         [[ 0,-1], [ 0,-2], [ 0,-3], [ 0,-4], [ 0,-5], [ 0,-6], [ 0,-7]],
  left:         [[-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0]],
  right:        [[ 1, 0], [ 2, 0], [ 3, 0], [ 4, 0], [ 5, 0], [ 6, 0], [ 7, 0]],
  diag: {
    up_left:    [[-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7]],
    up_right:   [[ 1, 1], [ 2, 2], [ 3, 3], [ 4, 4], [ 5, 5], [ 6, 6], [ 7, 7]],
    down_left:  [[-1,-1], [-2,-2], [-3,-3], [-4,-4], [-5,-5], [-6,-6], [-7,-7]],
    down_right: [[ 1,-1], [ 2,-2], [ 3,-3], [ 4,-4], [ 5,-5], [ 6,-6], [ 7,-7]],
	},
	lShappe: 			[[ 1, 2], [ 2, 1], [ 2,-1], [ 1,-2], [-1,-2], [-2,-1], [-2, 1], [-1, 2]],
}; /* eslint-enable */

const STATE = {
	regular: 0,
	check: 1,
	checkmate: 2,
};

module.exports = {
	TYPES,
	COLORS,
	PLAY_ORDER,
	MOVEMENT_PATTERNS,
	STATE,
	...fileReader,
};
