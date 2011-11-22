'use strict';

module.exports = function (t, a) {
	a(t(1, 1), 0, "Equal");
	a.ok(t(2, 1) > 0, "Greater");
	a.ok(t(-2, -1) < 0, "Less");
};
