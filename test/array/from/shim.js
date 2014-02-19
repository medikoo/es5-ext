'use strict';

module.exports = function (t, a) {
	var o = [1, 2, 3];
	a.not(t(o), o, "Array");
	a.deep(t(o), o, "Array: same content");
	a.deep(t('12r3v'), ['1', '2', 'r', '3', 'v'], "String");
	a.deep(t((function () { return arguments; }(3, o, 'raz'))),
		[3, o, 'raz'], "Arguments");
	a.deep(t((function () { return arguments; }(3))), [3],
		"Arguments with one numeric value");

	a.deep(t({ 0: 'raz', 1: 'dwa', length: 2 }), ['raz', 'dwa'], "Other");

	a.deep(t(o, function (val) { return (val + 2) * 10; }, 10), [30, 40, 50],
		"Mapping");

	a.throws(function () { t(); }, TypeError, "Undefined");
	a.deep(t(3), [], "Primitive");
};
