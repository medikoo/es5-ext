'use strict';

var fn = require('Object/pluck').call

  , o, t;

o = { a: 'b' };

Object.keys(t = {
	"Object.pluck": function () {
		assert.equal(fn(o, 'a'), 'b', this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
