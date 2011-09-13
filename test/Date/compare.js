'use strict';

module.exports = function (t, a) {
	var older = new Date(2000, 1, 1), now = new Date();
	t = t.call
	a.ok(t(older, now) < 0, "Older");
	a.ok(t(now, older) > 0, "Newer");
	a(t(now, new Date(now.getTime())), 0, "Same");
};
