'use strict';

module.exports = {
	__generic: function (t, a) {
		var count = 0;
		t = t.call;

		a.deep(t(this, function (v, i, scope) {
			a(v, this[i], "Value");
			a(i, count++, "Index");
			a(scope, this, "Scope");
			return i;
		}, this), { 0: [this[0]], 1: [this[1]], 2: [this[2]] });
	},
	"": function (t, a) {
		var r;
		t = t.call
		r = t([2,3,3,4,5,6,7,7,23,45,34,56], function (v, i, scope) {
			return v%2 ? 'odd' : 'even';
		});
		a.deep(r.odd, [3,3,5,7,7,23,45]);
		a.deep(r.even, [2,4,6,34,56]);
	}
};
