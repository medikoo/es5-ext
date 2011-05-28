'use strict';

var fn = require('Function/bind')

  , a, b, t;

a = function (a) {
	return this;
};
b = {};

Object.keys(t = {
	"Function.bind": function () {
		assert.equal(fn(a)(b)(), b, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
