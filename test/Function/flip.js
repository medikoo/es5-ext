'use strict';

var fn = require('Function/flip')
  , toArray = require('List/toArray').call

  , a, t;

a = function (a, b) {
	return toArray(arguments);
};

Object.keys(t = {
	"Function.flip": function () {
		assert.equal(fn(a)(1, 2, 3).toString(), [2, 1, 3].toString(), this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
