'use strict';

var f = require('Object/values')

  , a, t;

a = { a: 'd', b: 'e', c: 'f' };

Object.keys(t = {
	"Object.values": function () {
		assert.equal(f(a).sort().toString(), ['d', 'e', 'f'].toString(), this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
