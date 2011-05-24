'use strict';

var f = require('Function/isFunction')

  , a, t;

a = { call: Function.prototype.call, apply: Function.prototype.apply };

Object.keys(t = {
	"Function.isFunction: function is function": function () {
		assert.equal(f(function () {}), true, this);
	},
	"Function.isFunction: plain object is not function": function () {
		assert.equal(f(a), false, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
