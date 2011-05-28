'use strict';

var fn = require('Object/isPlainObject').call

  , t;

Object.keys(t = {
	"Object.isPlainObject: empty {} is plain object": function () {
		assert.equal(fn({}), true, this);
	},
	"Object.isPlainObject: {} with property is plain object": function () {
		assert.equal(fn({ a: true }), true, this);
	},
	"Object.isPlainObject: {} with any property keys is plain object":
	function () {
		assert.equal(fn({ 'prototype': 1, 'constructor': 2, '__proto__':  3 }),
			true, this);
	},
	"Object.isPlainObject: null is not plain object": function () {
		assert.equal(fn(null), false, this);
	},
	"Object.isPlainObject: primitive is not plain object": function () {
		assert.equal(fn('string'), false, this);
	},
	"Object.isPlainObject: function is not plain object": function () {
		assert.equal(fn(function () {}), false, this);
	},
	"Object.isPlainObject: object whose prototype is not Object.prototype is not plain object":
	function () {
		assert.equal(fn(Object.create({})), false, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
