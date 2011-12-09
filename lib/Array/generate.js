// Generate an array built of repeated arguments

var slice = Array.prototype.slice;

module.exports = function (length) {
	var arr = slice.call(arguments, 1, 1 + length), l;
	while ((l = arr.length) < length) {
		arr = arr.concat(arr.slice(0, length - l));
	}
	return arr;
};
