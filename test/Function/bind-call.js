'use strict';

var f, o;

f = function (a, b) {
	return this[a] + this[b];
};
o = { a: 3, b: 4 };

module.exports = function (t, a) {
	a.equal(7, t(f)(o, 'a', 'b'), 7);
};
