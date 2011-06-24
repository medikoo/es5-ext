'use strict';

var noop    = require('../../lib/Function/noop');

module.exports = {
	__generic: {
		"is list": function (t, a) {
			a.equal(t(this), true);
		}
	},
	"Empty object is not list": function (t, a) {
		a.equal(t({}), false);
	},
	"Function is not list": function (t, a) {
		a.equal(t(noop), false);
	}
};
