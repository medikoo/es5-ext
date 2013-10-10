'use strict';

var getPrototypeOf = Object.getPrototypeOf;

module.exports = function (t, a) {
	var x = {}, y = {};
	if (t === null) return;
	a(t(x, y), x, "Return self object");
	a(getPrototypeOf(x), y, "Object");
	a.throws(function () { t(x); }, TypeError, "Undefined");
	a.throws(function () { t('foo'); }, TypeError, "Primitive");
	a(getPrototypeOf(t(x, null)), null, "Null");
};
