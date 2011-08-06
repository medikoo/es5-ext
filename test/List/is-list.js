'use strict';

var noop    = require('../../lib/Function/noop');

module.exports = {
	__generic: function (t, a) {
		a(t(this), true, "is list");
	},
	"": function (t, a) {
		a(t({}), false, "Empty object is not list");
		a(t(noop), false, "Function is not list");
	}
};
