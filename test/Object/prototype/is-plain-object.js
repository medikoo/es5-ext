'use strict';

module.exports = function (t, a) {
	a(t.call({}), true, "Empty {} is plain object");
	a(t.call({ a: true }), true, "{} with property is plain object");
	a(t.call({ 'prototype': 1, 'constructor': 2, '__proto__':  3 }), true,
		"{} with any property keys is plain object");
	a(t.call(null), false, "Null is not plain object");
	a(t.call('string'), false, "Primitive is not plain object");
	a(t.call(function (t, a) {}), false, "Function is not plain object");
	a(t.call(Object.create({})), false,
		"Object whose prototype is not Object.prototype is not plain object");
};
