'use strict';

module.exports = function (t, a) {
	var e = new Error('Error'), x = {}, f1 = function (y) { return y; }
	  , f2 = function () { throw e; };
	t = t.call;

	a(t(f1, x), x);
	a(t(f2), e, "Thrown");
};
