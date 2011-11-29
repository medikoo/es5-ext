'use strict';

module.exports = function (t, a) {
	var x;
	a(typeof (x = t('raz')), 'object', "Primitive string");
	a(x.valueOf(), 'raz', "Matches primitive string");

	a(typeof (x = t(true)), 'object', "Primitive boolean");
	a(x.valueOf(), true, "Matches primitive boolean");

	a(typeof (x = t(21)), 'object', "Primitive number");
	a(x.valueOf(), 21, "Matches primitive number");

	a.throws(function () {
		t();
	}, "No argument");

	a.throws(function () {
		t(null);
	}, "Null");

	a.throws(function () {
		t(undefined);
	}, "Undefined");
};
