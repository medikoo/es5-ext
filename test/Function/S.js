'use strict';

var f = require('Function/S')
  , toArray = require('Array/toArray')
  , slice = require('Array/slice')

  , a, b, c, t;

a = function (b) {
	return ["A"].concat(b).concat(slice(arguments, 1));
};
b = function () {
	return ["B"].concat(toArray(arguments));
};

Object.keys(t = {
	"Function.S": function () {
		assert.equal(f(a, b)(1,2).toString(), ["A", "B", 1, 2, 1, 2].toString(), this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
