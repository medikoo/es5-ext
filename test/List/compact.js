'use strict';

var o = [1, 2, [3, 4, [5, 6], 7, 8], 9, 10];

module.exports = {
	__generic : function (t, a) {
		t = t.call;
		a(t(this).length, 3);
	},
	"": function (t, a) {
		t = t.call;
		var o = {}
		  , r = t([0, 1, "", null, NaN, o, false, true]);

		a.ok((r[0] === 1) && (r[1] === o) && (r[2] === true) && (r.length === 3));
	}
};
