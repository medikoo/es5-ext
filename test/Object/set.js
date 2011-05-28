'use strict';

var fn = require('Object/set').call

  , a, t;

a = {};
fn(a, 'b', 2);

Object.keys(t = {
	"Object.set": function () {
		assert.equal(a.b, 2, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
