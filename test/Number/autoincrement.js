'use strict';

module.exports = {
	"Default": function (t, a) {
		var fn = t();
		a(fn(), 1, "First");
		a(fn(), 2, "Second");
		a(fn(), 3, "Third");
	},
	"Custom": function (t, a) {
		var fn = t(3, 7);
		a(fn(), 3, "First");
		a(fn(), 10, "Second");
		a(fn(), 17, "Third");
	}
};
