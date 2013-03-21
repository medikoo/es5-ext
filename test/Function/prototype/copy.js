'use strict';

module.exports = function (t, a) {
	var fn = function (a, b) { return a + b; }, o = {}, fn2;

	fn.prototype = o;

	fn.foo = 'raz';

	fn2 = t.call(fn);

	a(fn2.length, fn.length, "Length");
	a(fn2(13, 43), 56, "Body");
	a(fn2.prototype, fn.prototype, "Prototype");
	a(fn2.foo, fn.foo, "Custom property");
};
