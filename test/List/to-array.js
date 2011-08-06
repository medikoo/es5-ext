'use strict';

module.exports = {
	__generic: function (t, a) {
		t = t.call;
		a.ok(t(this) instanceof Array, "turned to an array");
		a.equal(t(this).length, this.length, "length matches");
	},
	"": function (t, a) {
		t = t.call;
		a(t([1,2,3,4,5], 2, 3).length, 5, "Extra arguments does not affect result");
		a.deep(t([3]), [3], "List with one numeric value");
	}
};
