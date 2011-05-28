'use strict';

var fn = require('List/slice').call
  , a, t;

a = [1, 2, 3, 4, 5, 6];

Object.keys(t = {
	"List.slice": function () {
		assert.equal(fn(function () {
			return arguments;
		}.apply(this, a), 1, 4).toString(), a.slice(1, 4).toString(), this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
