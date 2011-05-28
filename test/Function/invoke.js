'use strict';

var fn = require('Function/invoke')
  , k  = require('Function/k')

  , a, b, t;

a = { b: k('c')};

Object.keys(t = {
	"Function.invoke": function () {
		assert.equal(fn('b')(a), 'c', this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
