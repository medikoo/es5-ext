'use strict';

module.exports = function (t, a) {
	t = t.call;
	a(t(true, true), 0, "true true");
	a(t(true, false), 1, "true false");
	a(t(false, false), 0, "false false");
	a(t(false, true), -1, "false true");
};
