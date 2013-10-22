'use strict';

var SubArray = require('./__sub-array');

module.exports = function (t, a) {
	var arr = [1, 2, 3];
	a(t(arr), true, "Array");
	a(t(null), false, "Null");
	a(t(), false, "Undefined");
	a(t('234'), false, "String");
	a(t(23), false, "Number");
	a(t({}), false, "Plain object");
	a(t({ length: 1, 0: 'raz' }), false, "Array-like");
	a(t(Object.create(arr)), false, "Array extension");
	if (!SubArray) return;
	a(t(new SubArray(23)), false, "Subclass instance");
};
