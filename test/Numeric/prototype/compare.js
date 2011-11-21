'use strict';

module.exports = function (t, a) {
	a.ok(t.call(2, 0) > 0);
	a(t.call(2, 2), 0);
	a(t.call(0, 0), 0);
	a.ok(t.call(-4, 0) < 0);
};
