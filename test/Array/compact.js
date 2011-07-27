'use strict';

var o = [1, 2, [3, 4, [5, 6], 7, 8], 9, 10];

module.exports = {
	"": function (t, a) {
		t = t.call;
		var o = {}
		  , r = t([0, 1, "", null, NaN, o, false, true]);

		a(r[0], 1, "1");
		a(r[1], o, "Object");
		a(r[2], true, "true");
		a(r.length, 3, "Expected length");
		a(t(r), r, "Modify in place");
	}
};
