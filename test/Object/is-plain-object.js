'use strict';

module.exports = {
	"Empty {} is plain object": function (t, a) {
		a.equal(t.call({}), true);
	},
	"{} with property is plain object": function (t, a) {
		a.equal(t.call({ a: true }), true);
	},
	"{} with any property keys is plain object": function (t, a) {
		a.equal(t.call({ 'prototype': 1, 'constructor': 2, '__proto__':  3 }),
			true);
	},
	"Null is not plain object": function (t, a) {
		a.equal(t.call(null), false);
	},
	"Primitive is not plain object": function (t, a) {
		a.equal(t.call('string'), false);
	},
	"Function is not plain object": function (t, a) {
		a.equal(t.call(function (t, a) {}), false);
	},
	"Object whose prototype is not Object.prototype is not plain object":
	function (t, a) {
		a.equal(t.call(Object.create({})), false);
	}
};
