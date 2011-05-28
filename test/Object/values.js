'use strict';

var fn = require('Object/values').call

  , a, t;

a = { a: 'd', b: 'e', c: 'f' };

Object.keys(t = {
	"Object.values": function () {
		assert.equal(fn(a).sort().toString(), ['d', 'e', 'f'].toString(), this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
