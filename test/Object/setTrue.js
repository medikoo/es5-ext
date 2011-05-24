'use strict';

var f = require('Object/setTrue')

  , a, t;

a = {};
f(a)('b');

Object.keys(t = {
	"Object.setTrue": function () {
		assert.equal(a.b, true, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
