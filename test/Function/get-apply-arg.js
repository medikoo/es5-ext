'use strict';

var f, o;

f = function (a, b) {
	return this[a] + this[b];
};
o = { a: 3, b: 4 };

module.exports = function (t, a) {
	t = t.call;
	a(t(f).call(o, ['a', 'b']), 7);
};
