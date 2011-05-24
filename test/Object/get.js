'use strict';

var f = require('Object/get')

  , o, t;

o = { a: 'b' };

Object.keys(t = {
	"Object.get": function () {
		assert.equal(f(o)('a'), 'b', this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
