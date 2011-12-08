'use strict';

module.exports = function (t, a) {
	a(t(0), undefined, "0");
	a(t(false), undefined, "false");
	a(t(''), undefined, "''");
	a(t(NaN), undefined, "NaN");
	a(t({}), undefined, "{}");

	a.throws(function () {
		t();
	}, "Undefined");
	a.throws(function () {
		t(null);
	}, "null");
};
