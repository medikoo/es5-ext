'use strict';

var f = require('Object/elevate')

  , o, t;

o = f({ a: { aa: 1, ab: 2 }, b: { ba: 3, bb: 4 } });

Object.keys(t = {
	"Object.elevate": function () {
		assert.equal([o.aa, o.ab, o.ba, o.bb].toString(),
			[1,2,3,4].toString(), this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
