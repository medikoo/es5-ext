'use strict';

module.exports = {
	__generic: function (t, a) {
		a.ok((typeof this === 'object') ? t(this) : !t(this));
	},
	"": function (t, a) {
		a(t({}), false, "Plain object");
		a(t(/raz/), false, "Regexp");
		a(t(), false, "No argument");
		a(t(null), false, "Null");
		a(t(undefined), false, "Undefined");
		a(t(function () {}), false, "Function");
		a(t([]), true, "Empty array");
	}
};
