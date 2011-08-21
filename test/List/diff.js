'use strict';

module.exports = {
	__generic: function (t, a) {
		t = t.call;
		a.deep(t(this, this), []);
	},
	"": function (t, a) {
		var x = {}, y = {};
		t = t.call;

		a.deep(t([1, 'raz', x, 2, 'trzy', y], [x, 2, 'trzy']), [1, 'raz', y],
			"Scope longer");
		a.deep(t([1, 'raz', x], [x, 2, 'trzy', 1, y]), ['raz'],
			"Arg longer");
		a.deep(t([1, 'raz', x], []), [1, 'raz', x], "Empty arg");
		a.deep(t([], [1, y, 'sdfs']), [], "Empty scope");
	}
};
