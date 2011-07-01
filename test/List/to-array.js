'use strict';

module.exports = {
	__generic: {
		"turned to an array": function (t, a) {
			t = t.call;
			a.ok(t(this) instanceof Array);
		},
		"length matches": function (t, a) {
			t = t.call;
			a.equal(t(this).length, this.length);
		}
	},
	"Extra arguments does not affect result": function (t, a) {
		t = t.call;
		a.equal(t([1,2,3,4,5], 2, 3).length, 5);
	}
};
