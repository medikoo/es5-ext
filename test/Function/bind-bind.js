'use strict';

var f, o;

f = function (a) {
	return this;
};
o = {};

module.exports = function (t, a) {
	a.equal(t(f)(o)(), o);
};
