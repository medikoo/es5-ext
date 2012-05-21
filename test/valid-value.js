'use strict';

module.exports = function (t, a) {
	a(t(0), true, "0");
	a(t(false), true, "false");
	a(t(''), true, "''");
	a(t(NaN), true, "NaN");
	a(t({}), true, "{}");

	a.throws(function () {
		t();
	}, "Undefined");
	a.throws(function () {
		t(null);
	}, "null");
};
