'use strict';

var f = require('Object/isObject')

  , t;

Object.keys(t = {
	"Object.isObject: object is object": function () {
		assert.equal(f({}), true, this);
	},
	"Object.isObject: null is not object": function () {
		assert.equal(f(null), false, this);
	},
	"Object.isObject: primitive is not object": function () {
		assert.equal(f('string'), false, this);
	},
	"Object.isObject: function is not object": function () {
		assert.equal(f(function () {}), false, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
