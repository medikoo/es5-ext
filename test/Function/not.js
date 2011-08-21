'use strict';

var i    = require('../../lib/Function/i')
  , noop = require('../../lib/Function/noop');

module.exports = function (t, a) {
	t = t.call;

	a(t(i)(''), true, "Falsy");
	a(t(noop)(), true, "Undefined");
	a(t(i)({}), false, "Any object");
	a(t(i)(true), false, "True");
};
