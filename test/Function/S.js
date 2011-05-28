'use strict';

var fn = require('Function/s')
  , toArray = require('List/toArray').call
  , slice = require('List/slice').call

  , a, b, c, t;

a = function (b) {
	return ["A"].concat(b).concat(slice(arguments, 1));
};
b = function () {
	return ["B"].concat(toArray(arguments));
};

Object.keys(t = {
	"Function.S": function () {
		assert.equal(fn(a, b)(1,2).toString(), ["A", "B", 1, 2, 1, 2].toString(),
			this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
