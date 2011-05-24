'use strict';

var f = require('Array/slice')
  , a, t;

a = [1, 2, 3, 4, 5, 6];

Object.keys(t = {
	"Array.slice": function () {
		assert.equal(f((function () {
			return arguments;
		}).apply(this, a), 1, 4).toString(), a.slice(1, 4).toString(), this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
