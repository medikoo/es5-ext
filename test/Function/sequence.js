'use strict';

var f, g, h;

f = function (a, b) {
	return ['a', arguments.length, a, b];
};
g = function (a) {
	return ['b', arguments.length].concat(a);
};
h = function (a) {
	return ['c', arguments.length].concat(a);
};

module.exports = function (t, a) {
	t = t.call;
	a(t(f, g, h)(1, 2).toString(),
		['c', 1, 'b', 1, 'a', 2, 1, 2].toString());
};
