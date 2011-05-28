'use strict';

var fn = require('Function/functionalize')

  , f, a, t;

f = fn(function () {
	return this;
});
a = {};

Object.keys(t = {
	"Function.functionalize: bind": function () {
		var bind = f.bind;
		assert.equal(bind(a)(), a, this);
	},
	"Function.functionalize: call": function () {
		var call = f.call;
		assert.equal(call(a), a, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
