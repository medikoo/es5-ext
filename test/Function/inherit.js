'use strict';

var f, g;

f = function (x) { return x + 1; };
g = function (parent, x) { return parent(this, x); };

module.exports = function (t, a) {
	var fn = t(g, f);
	a(fn(2), 3);
};
