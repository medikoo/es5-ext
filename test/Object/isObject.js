'use strict';

var fn = require('Object/isObject')

  , t;

Object.keys(t = {
	"Object.isObject: object is object": function () {
		assert.equal(fn({}), true, this);
	},
	"Object.isObject: null is not object": function () {
		assert.equal(fn(null), false, this);
	},
	"Object.isObject: primitive is not object": function () {
		assert.equal(fn('string'), false, this);
	},
	"Object.isObject: function is not object": function () {
		assert.equal(fn(function () {}), false, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
