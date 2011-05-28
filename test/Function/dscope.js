'use strict';

var fn = require('Function/dscope')

  , a, b, o, t, org;

org = decodeURI;
a = function () {
	return c;
};
o = { c: {}, decodeURI: true };

Object.keys(t = {
	"Function.dscope: dynamic scope": function () {
		assert.equal(fn(a, o), o.c, this);
	},
	"Function.scope: reverts global properties": function () {
		fn(a, o);
		assert.equal(decodeURI, org, this);
	}
}).forEach(function (m) {
	exports['test ' + m] = t[m].bind(m);
});
