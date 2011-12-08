// Returns first element

var assertNotNull = require('../../assert-not-null');

module.exports = function () {
	assertNotNull(this);
	return this[0];
};
