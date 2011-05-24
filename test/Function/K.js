'use strict';

var f = require('Function/K')

  , a, t;

a = {};

Object.keys(t = {
	"Function.K": function () {
		assert.equal(f(a)(), a, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
