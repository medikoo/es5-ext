'use strict';

var o = [1, 2, [3, 4, [5, 6], 7, 8], 9, 10];

module.exports = {
	__generic : function (t, a) {
		t = t.call;
		a(t(this).length, 3);
	},
	"Nested Arrays": function (t, a) {
		t = t.call;
		a(t(o).length, 10);
	}
};
