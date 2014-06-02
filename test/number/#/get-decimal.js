'use strict';

module.exports = function (t, a) {
	a(t.call(0), 0, "0");
	a(t.call({}), NaN, "Not a number");
	a(t.call(234324), 0, "Integer");
	a(t.call(10.001), 0.001, "10.001");
	a(t.call(0.001), 0.001, "0.001");
	a(t.call(-10.001), -0.001, "-10.001");
	a(t.call(-0.001), -0.001, "-0.001");
};
