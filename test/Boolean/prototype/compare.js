'use strict';

module.exports = function (t, a) {
	a(t.call(true, true), 0, "true true");
	a.ok(t.call(true, false) > 0, "true false");
	a(t.call(false, false), 0, "false false");
	a.ok(t.call(false, true) < 0, "false true");
};
