'use strict';

var k        = require('../../../lib/Function/k')
  , getScope = require('../../../lib/Function/get-scope');

module.exports = function (t, a) {
	var x = {}, f = k(x);
	a(t(f), x);
	a(t(getScope, x), x, "Scope");
};
