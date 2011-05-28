'use strict';

var fn = require('Function/sequence')

  , a, b, c, t;

a = function (a, b) {
	return ['a', arguments.length, a, b];
};
b = function (a) {
	return ['b', arguments.length].concat(a);
};
c = function (a) {
	return ['c', arguments.length].concat(a);
};

Object.keys(t = {
	"Function.sequence": function () {
		assert.equal(fn(a, b, c)(1, 2).toString(),
			['c', 1, 'b', 1, 'a', 2, 1, 2], this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
