'use strict';

var o = require('global')

  , t;

Object.keys(t = {
	"Global is an object": function () {
		assert.ok(o && typeof o === 'object', this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
