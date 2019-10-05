const log = require('debug')('util');
// [x,y]; x -> left (-)/right (+); y -> up (+)/down (-);
const MOVEMENT_PATTERNS = {};
MOVEMENT_PATTERNS.all = { /*eslint-disable */
	up: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]],
	down: [[0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7]],
	left: [[-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0]],
	right: [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]],
	diag: {
		up_left: [[-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7]],
		up_right: [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]],
		down_left: [[-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7]],
		down_right: [[1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7]],
	},
	lShappe: [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]],
}; /* eslint-enable */

log('MOVEMENT_PATTERNS.pawn');
MOVEMENT_PATTERNS.pawn = {
	white: {
		regular: {},
		special: {
			first: {},
			attack: {},
		},
	},
	black: {
		regular: {},
		special: {
			first: {},
			attack: {},
		},
	},
};
MOVEMENT_PATTERNS.pawn.white.regular[MOVEMENT_PATTERNS.all.up[0]] = true;
MOVEMENT_PATTERNS.pawn.white.special.first[MOVEMENT_PATTERNS.all.up[1]] = true;
MOVEMENT_PATTERNS.pawn.white.special.attack[MOVEMENT_PATTERNS.all.diag.up_left[0]] = true; // eslint-disable-line max-len
MOVEMENT_PATTERNS.pawn.white.special.attack[MOVEMENT_PATTERNS.all.diag.up_right[0]] = true; // eslint-disable-line max-len
MOVEMENT_PATTERNS.pawn.black.regular[MOVEMENT_PATTERNS.all.down[0]] = true;
MOVEMENT_PATTERNS.pawn.black.special.first[MOVEMENT_PATTERNS.all.down[1]] = true; // eslint-disable-line max-len
MOVEMENT_PATTERNS.pawn.black.special.attack[MOVEMENT_PATTERNS.all.diag.down_left[0]] = true; // eslint-disable-line max-len
MOVEMENT_PATTERNS.pawn.black.special.attack[MOVEMENT_PATTERNS.all.diag.down_right[0]] = true; // eslint-disable-line max-len
log(MOVEMENT_PATTERNS.pawn);


log('MOVEMENT_PATTERNS.knight');
MOVEMENT_PATTERNS.knight = { regular: {} };
[
	...MOVEMENT_PATTERNS.all.lShappe,
].forEach((p) => {
	MOVEMENT_PATTERNS.knight.regular[p] = true;
});
log(MOVEMENT_PATTERNS.knight);


log('MOVEMENT_PATTERNS.rook');
MOVEMENT_PATTERNS.rook = { regular: {} };
[
	...MOVEMENT_PATTERNS.all.up,
	...MOVEMENT_PATTERNS.all.right,
	...MOVEMENT_PATTERNS.all.down,
	...MOVEMENT_PATTERNS.all.left,
].forEach((p) => {
	MOVEMENT_PATTERNS.rook.regular[p] = true;
});
log(MOVEMENT_PATTERNS.rook);


log('MOVEMENT_PATTERNS.bishop');
MOVEMENT_PATTERNS.bishop = { regular: {} };
[
	...MOVEMENT_PATTERNS.all.diag.up_right,
	...MOVEMENT_PATTERNS.all.diag.down_right,
	...MOVEMENT_PATTERNS.all.diag.down_left,
	...MOVEMENT_PATTERNS.all.diag.up_left,
].forEach((p) => {
	MOVEMENT_PATTERNS.bishop.regular[p] = true;
});
log(MOVEMENT_PATTERNS.bishop);


log('MOVEMENT_PATTERNS.king');
MOVEMENT_PATTERNS.king = { regular: {}, castling: {} };
[
	MOVEMENT_PATTERNS.all.up[0],
	MOVEMENT_PATTERNS.all.diag.up_right[0],
	MOVEMENT_PATTERNS.all.right[0],
	MOVEMENT_PATTERNS.all.diag.down_right[0],
	MOVEMENT_PATTERNS.all.down[0],
	MOVEMENT_PATTERNS.all.diag.down_left[0],
	MOVEMENT_PATTERNS.all.left[0],
	MOVEMENT_PATTERNS.all.diag.up_left[0],
].forEach((p) => {
	MOVEMENT_PATTERNS.king.regular[p] = true;
});

[
	MOVEMENT_PATTERNS.all.left[1],
	MOVEMENT_PATTERNS.all.right[1],
].forEach((p) => {
	MOVEMENT_PATTERNS.king.castling[p] = true;
});
log(MOVEMENT_PATTERNS.king);


log('MOVEMENT_PATTERNS.queen');
MOVEMENT_PATTERNS.queen = { regular: {} };
[
	...MOVEMENT_PATTERNS.all.up,
	...MOVEMENT_PATTERNS.all.diag.up_right,
	...MOVEMENT_PATTERNS.all.right,
	...MOVEMENT_PATTERNS.all.diag.down_right,
	...MOVEMENT_PATTERNS.all.down,
	...MOVEMENT_PATTERNS.all.diag.down_left,
	...MOVEMENT_PATTERNS.all.left,
	...MOVEMENT_PATTERNS.all.diag.up_left,
].forEach((p) => {
	MOVEMENT_PATTERNS.queen.regular[p] = true;
});

log(MOVEMENT_PATTERNS.queen);

module.exports = {
	MOVEMENT_PATTERNS,
};
