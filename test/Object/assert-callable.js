'use strict';

module.exports = function (t, a) {
	a(t(function () {}), undefined, "Function");
	a.throws(function () {
		t({});
	}, "Not Function");
};
