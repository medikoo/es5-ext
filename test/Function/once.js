'use strict';

module.exports = function (t, a) {
	var x = 1, fn = function (y, z, v, w) { return x += y + z + v + w; };
	t = t.call;

	fn = t(fn, 2, 4);
	a(fn(8, 16), 31, "Return");
	fn(2343, 24234); fn(23434);

	a(x, 31);
};
