'use strict';

var f = require('Function/call')

  , a, b, t;

a = function (a, b) {
	return this[a] + this[b];
};
b = { a: 3, b: 4 };

Object.keys(t = {
	"Function.call": function () {
		assert.equal(f(a)(b, 'a', 'b'), 7, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
