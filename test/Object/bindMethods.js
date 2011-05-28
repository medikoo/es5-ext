'use strict';

var fn = require('Object/bindMethods').call

  , a, b, c, x, t;

x = function (b) {
	return this;
};
a = { a: x, b: x, c: {}, d: null, e: 'str' };
fn(a);

b = { a: x, b: x, c: {}, d: null, e: 'str' };
c = {};
fn(b, c);

Object.keys(t = {
	"Object.bindMethods: first method binded to its object": function () {
		var f = a.a;
		assert.equal(f(), a, this);
	},
	"Object.bindMethods: all methods binded to its object": function () {
		var f = a.b;
		assert.equal(f(), a, this);
	},
	"Object.bindMethods: first method binded to custom object": function () {
		var f = b.a;
		assert.equal(f(), c, this);
	},
	"Object.bindMethods: all methods binded to custom object": function () {
		var f = b.b;
		assert.equal(f(), c, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
