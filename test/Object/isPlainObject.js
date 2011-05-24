'use strict';

var f = require('Object/isPlainObject')

  , t;

Object.keys(t = {
	"Object.isPlainObject: empty {} is plain object": function () {
		assert.equal(f({}), true, this);
	},
	"Object.isPlainObject: {} with property is plain object": function () {
		assert.equal(f({ a: true }), true, this);
	},
	"Object.isPlainObject: {} with any property keys is plain object":
	function () {
		assert.equal(f({ prototype: 1, constructor: 2, __proto__:  3 }),
			true, this);
	},
	"Object.isPlainObject: null is not plain object": function () {
		assert.equal(f(null), false, this);
	},
	"Object.isPlainObject: primitive is not plain object": function () {
		assert.equal(f('string'), false, this);
	},
	"Object.isPlainObject: function is not plain object": function () {
		assert.equal(f(function () {}), false, this);
	},
	"Object.isPlainObject: object whose prototype is not Object.prototype is not plain object":
	function () {
		assert.equal(f(Object.create({})), false, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
