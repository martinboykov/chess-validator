
const { FileReader } = require('./file-reader');
const { MOVEMENT_PATTERNS } = require('./move-patterns');
const { ...CONSTANTS } = require('./constants');


module.exports = {
	...CONSTANTS,
	MOVEMENT_PATTERNS,
	FileReader,
};
