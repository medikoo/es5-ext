'use strict';

var k  = require('../../lib/Function/k')

  , o;

o = { b: k('c')};

module.exports = function (t, a) {
	var o = { foo: 1 }
	  , fn = function (arg1, arg2) { return this.foo + arg1 + arg2; };
	t = t.call;
	a(t(o, 2, 4)(fn), 7);
};
