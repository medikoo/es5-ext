'use strict';

var o = [1, 2, [3, 4, [5, 6], 7, 8], 9, 10];

module.exports = {
	__generic : function (t, a) {
		a.equal(t.call(this).length, 3);
	},
	"": function (t, a) {
		var o = {}
		  , r = t.call([0, 1, "", null, NaN, o, false, true]);

		a.ok((r[0] === 1) && (r[1] === o) && (r[2] === true) && (r.length === 3));
	}
};
