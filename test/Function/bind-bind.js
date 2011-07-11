'use strict';

var f, o;

f = function (a) {
	return this;
};
o = {};

module.exports = {
	"Function": function (t, a) {
		a.equal(t(f)(o)(), o);
	},
	"Function + argument": function (t, a) {
		var fn = function (a, b) {
			return this + a + b;
		};
		a.equal(t(fn, 1)(2, 4)(), 7);
	},
	"Function + arguments + arguments": function (t, a) {
		var fn = function (a, b) {
			return this + a + b;
		};
		a.equal(t(fn, 1)(2)(4), 7);
	}
};
