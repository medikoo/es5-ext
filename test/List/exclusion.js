'use strict';

module.exports = {
	__generic: function (t, a) {
		var x = {};
		t = t.call;
		a.deep(t(this, this, [this[0], this[2], x]), [x]);
	},
	"": function (t, a) {
		var x = {}, y = {}, z = {};
		t = t.call;

		a.deep(t([x, y]), [x, y], "No arguments");
		a.deep(t([x, 1], [], []), [x, 1], "Empty arguments");
		a.deep(t([1, 'raz', x], [2, 'raz', y], [2, 'raz', x]), [1, y]);
	}
};
