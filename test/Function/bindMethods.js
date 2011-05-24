'use strict';

var f = require('Function/bindMethods')

  , a, b, c, x, t;

x = function (b) {
	return this;
};
a = { a: x, b: x, c: {}, d: null, e: 'str' };
f(a);

b = { a: x, b: x, c: {}, d: null, e: 'str' };
c = {};
f(b, c);

Object.keys(t = {
	"Function.bindMethods: first method binded to its object": function () {
		assert.equal((1, a.a)(), a, this);
	},
	"Function.bindMethods: all methods binded to its object": function () {
		assert.equal((1, a.b)(), a, this);
	},
	"Function.bindMethods: first method binded to custom object": function () {
		assert.equal((1, b.a)(), c, this);
	},
	"Function.bindMethods: all methods binded to custom object": function () {
		assert.equal((1, b.b)(), c, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
