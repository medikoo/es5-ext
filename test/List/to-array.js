'use strict';

module.exports = {
	__generic: {
		"turned to an array": function (t, a) {
			a.ok(t.call(this) instanceof Array);
		},
		"length matches": function (t, a) {
			a.equal(t.call(this).length, this.length);
		}
	},
	"Extra arguments does not affect result": function (t, a) {
		a.equal(t.call([1,2,3,4,5], 2, 3).length, 5);
	}
};
