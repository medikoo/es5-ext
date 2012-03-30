'use strict';

module.exports = function (t, a) {
	a(t(function () {}), true, "Function");
	a.throws(function () {
		t({});
	}, "Not Function");
};
