'use strict';

module.exports = function (t, a) {
	t = t.call;
	a(t(0, 0), false, "Same");
	a(t(1, 0), false, "Greater");
	a(t(-1, 0), true, "Less");
};
