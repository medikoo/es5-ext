'use strict';

var noop    = require('../../../lib/Function/noop')
  , toArray = require('../../../lib/Object/prototype/to-array');

module.exports = function (t, a) {
	var log = [], fn, o = {};
	fn = t.call(noop, log);

	fn(1, 'raz', o);
	fn(2, o, 'dwa');

	a.deep(toArray.call(log[0]), [1, 'raz', o], 'First call');
	a.deep(toArray.call(log[1]), [2, o, 'dwa'], 'Second call');
	a(log.length, 2, 'Log length');
};
