'use strict';

module.exports = {
	"Empty {} is plain object": function (t, a) {
		t = t.call;
		a.equal(t({}), true);
	},
	"{} with property is plain object": function (t, a) {
		t = t.call;
		a.equal(t({ a: true }), true);
	},
	"{} with any property keys is plain object": function (t, a) {
		t = t.call;
		a.equal(t({ 'prototype': 1, 'constructor': 2, '__proto__':  3 }),
			true);
	},
	"Null is not plain object": function (t, a) {
		t = t.call;
		a.equal(t(null), false);
	},
	"Primitive is not plain object": function (t, a) {
		t = t.call;
		a.equal(t('string'), false);
	},
	"Function is not plain object": function (t, a) {
		t = t.call;
		a.equal(t(function (t, a) {}), false);
	},
	"Object whose prototype is not Object.prototype is not plain object":
	function (t, a) {
		t = t.call;
		a.equal(t(Object.create({})), false);
	}
};
