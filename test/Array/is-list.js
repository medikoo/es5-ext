'use strict';

module.exports = {
	__generic: function (t, a) {
		a(t(this), true, "is list");
	},
	"": function (t, a) {
		a(t({}), false, "Plain object");
		a(t(/raz/), false, "Regexp");
		a(t(), false, "No argument");
		a(t(null), false, "Null");
		a(t(undefined), false, "Undefined");
		a(t(function () {}), false, "Function");
		a(t([]), true, "Empty array");
		a(t(""), true, "Empty string");
	}
};
