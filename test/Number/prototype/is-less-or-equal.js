'use strict';

module.exports = function (t, a) {
	a(t.call(0, 0), true, "Same");
	a(t.call(1, 0), false, "Greater");
	a(t.call(-1, 0), true, "Less");
};
