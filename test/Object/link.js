'use strict';

var f = require('Object/link')

  , a, b, t;

a = {}, b = { a: 2 };
f(a, b)('a');

Object.keys(t = {
	"Object.link": function () {
		assert.equal(a.a, 2, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
