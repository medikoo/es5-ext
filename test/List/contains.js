'use strict';

module.exports = {
	__generic: function (t, a) {
		t = t.call;
		a(t(this, this[1]), true, "Contains");
		a(t(this, {}), false, "Does Not contain");
	},
	"": function (t, a) {
		var o, x = {}, y = {};
		t = t.call;

		o = [1, 'raz', x];

		a(t(o, 1), true, "First");
		a(t(o, '1'), false, "Type coercion");
		a(t(o, 'raz'), true, "Primitive");
		a(t(o, 'foo'), false, "Primitive not found");
		a(t(o, x), true, "Object found");
		a(t(o, y), false, "Object not found");
	}
};
