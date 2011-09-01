'use strict';

module.exports = function (t, a) {
	t = t.call;
	a.ok(t(2, 0) > 0);
	a.ok(t(2, 2) === 0);
	a.ok(t(0, 0) === 0);
	a.ok(t(-4, 0) < 0);
};
