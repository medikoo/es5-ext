'use strict';

module.exports = function (t, a) {
	a.ok(t(true, false) > 0, "#1");
	a.ok(t(false, true) < 0, "#2");
};
