'use strict';

var fn = require('Object/merge').call

  , a, b, t;

a = { b: 2 };
b = { a: 1, b: 4, c: 3 };
fn(a, b);

Object.keys(t = {
	"Object.merge": function () {
		assert.equal([a.a, a.b, a.c].toString(), [1,4,3].toString(), this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
