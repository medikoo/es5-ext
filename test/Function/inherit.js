'use strict';

var f, g;

f = function (x) { return x + 1; };
g = function (parent, x) { return parent(this, x); };

module.exports = function (t, a) {
	a.equal(t(g, f)(2), 3);
};
