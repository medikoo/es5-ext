'use strict';

var f = require('Function/invoke')
  , K = require('Function/K')

  , a, b, t;

a = { b: K('c')};

Object.keys(t = {
	"Function.invoke": function () {
		assert.equal(f('b')(a), 'c', this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
