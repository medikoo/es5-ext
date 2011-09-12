'use strict';

module.exports = function (t, a) {
	var x = {}, y = {};
	t = t.call;
	a(t(x), x, "Returns self object");
	a.deep(x, {}, "Doesn't affect empty object");

	x = { foo: 'bar', a: 0, b: false, c: '', d: '0', e: null, bar: y };
	t(x);
	a.deep(x, { foo: 'bar', d: '0', bar: y }, "Cleared falsy values");
};
