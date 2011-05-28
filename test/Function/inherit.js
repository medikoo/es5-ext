'use strict';

var fn = require('Function/inherit')

  , a, b, f, t;

a = function (x) { return x + 1; };
b = function (parent, x) { return parent(this, x); };
f = fn(b, a);

Object.keys(t = {
	"Function.inherit": function () {
		assert.equal(f(2), 3, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
