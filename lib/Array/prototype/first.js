// Returns first element

var toObject = require('../../to-object');

module.exports = function () {
	return toObject(this)[0];
};
