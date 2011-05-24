'use strict';

var f = require('Function/sequence')

  , a, b, c, t;

a = function () {
	return ['a', arguments.length, arguments[0], arguments[1]];
};
b = function () {
	return ['b', arguments.length].concat(arguments[0]);
};
c = function () {
	return ['c', arguments.length].concat(arguments[0]);
};

Object.keys(t = {
	"Function.sequence": function () {
		assert.equal(f(a, b, c)(1, 2).toString(), ['c', 1, 'b', 1, 'a', 2, 1, 2], this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
