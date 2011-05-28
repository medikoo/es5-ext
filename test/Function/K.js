'use strict';

var fn = require('Function/k')

  , a, t;

a = {};

Object.keys(t = {
	"Function.k": function () {
		assert.equal(fn(a)(), a, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
