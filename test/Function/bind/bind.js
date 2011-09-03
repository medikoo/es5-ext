'use strict';

var f, fn, o;

f = function (a) {
	return this;
};
fn = function (a, b) {
	return this + a + b;
};
o = {};

module.exports = function (t, a) {
	a(t(f)(o)(), o, "Function");
	a(t(fn, 1)(2, 4)(), 7, "Function + argument");
	a(t(fn, 1)(2)(4), 7, "Function + arguments + arguments");
};
