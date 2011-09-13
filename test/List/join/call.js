'use strict';

var getArgs = require('../../../lib/Function/get-args');

module.exports = {
	__generic: function (t, a) {
		a(typeof t(this, ' '), 'string');
	},
	'': function (t, a) {
		a(t(getArgs('raz', 'dwa', 'trzy'), '|'), 'raz|dwa|trzy');
	}
};
