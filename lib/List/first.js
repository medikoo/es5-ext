// Returns first element from array

var f     = require('../Function/functionalize');

module.exports = f(function () {
	return this[0];
});
