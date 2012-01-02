// Generate an array built of repeated arguments

'use strict';

var slice = Array.prototype.slice;

module.exports = function (length, fill) {
	var arr, l;
	length = length >>> 0;
	if (arguments.length < 2) {
		throw new TypeError("Cannot generarte an array without provided fill.");
	}
	arr = slice.call(arguments, 1, 1 + length);
	while ((l = arr.length) < length) {
		arr = arr.concat(arr.slice(0, length - l));
	}
	return arr;
};
