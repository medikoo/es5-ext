// Create an array built of repeated arguments

var slice = require('../List/slice/call');

module.exports = function (length) {
	var arr = slice(arguments, 1, 1 + length), l;
	while ((l = arr.length) < length) {
		arr = arr.concat(arr.slice(0, length - l));
	}
	return arr;
};
