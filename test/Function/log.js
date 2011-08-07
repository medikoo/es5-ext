'use strict';

var noop    = require('../../lib/Function/noop')
  , toArray = require('../../lib/List/to-array').call;

module.exports = function (t, a) {
	var log = [], fn, o = {};
	t = t.call;
	fn = t(noop, log);

	fn(1, 'raz', o);
	fn(2, o, 'dwa');

	a.deep(toArray(log[0]), [1, 'raz', o], 'First call');
	a.deep(toArray(log[1]), [2, o, 'dwa'], 'Second call');
	a(log.length, 2, 'Log length');
};
