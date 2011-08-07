'use strict';

var f, o;

f = function (a, b) {
	return this[a] + this[b];
};
o = { a: 3, b: 4 };

module.exports = function (t, a) {
	a(t(f)(o, ['a', 'b']), 7, "Function");
	a(t(f, o)(['a', 'b']), 7, "Function + argument");
};
