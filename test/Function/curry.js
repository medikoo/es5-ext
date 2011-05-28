'use strict';

var fn = require('Function/curry')
  , toArray = require('List/toArray').call

  , a, t;

a = function (a, b, c) {
	return toArray(arguments);
};

Object.keys(t = {
	"Function.curry": function () {
		assert.equal(fn(a, 1)(2, 3).toString(), [1, 2, 3].toString(), this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
