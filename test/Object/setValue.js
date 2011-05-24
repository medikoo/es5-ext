'use strict';

var f = require('Object/setValue')

  , a, t;

a = {};
f(a, 2)('b');

Object.keys(t = {
	"Object.setValue": function () {
		assert.equal(a.b, 2, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
