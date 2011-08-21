'use strict';

var toArray = require('../../lib/List/to-array').call;

module.exports = {
	__generic: function (t, a) {
		t = t.call;
		a.deep(t(this, this, this), toArray(this));
	},
	"": function (t, a) {
		var x = {}, y = {}, p, r;
		t = t.call;
		a.deep(t([], [2,3,4]), [], "Empty #1");
		a.deep(t([2,3,4], []), [], "Empty #2");
		a.deep(t([2,3,x], [y,5,7]), [], "Different");
		p = t([3, 5, 'raz', {}, 'dwa', x], [1, 3, 'raz', 'dwa', 'trzy', x, {}],
			[3, 'raz', x, 65]);
		r = [3, 'raz', x];
		p.sort(), r.sort();
		a.deep(p, r, "Same parts");
		a.deep(t(r, r), r, "Same");
	}
};
