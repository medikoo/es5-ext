'use strict';

var fn = require('Object/setTrue').call

  , a, t;

a = {};
fn(a, 'b');

Object.keys(t = {
	"Object.setTrue": function () {
		assert.equal(a.b, true, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
