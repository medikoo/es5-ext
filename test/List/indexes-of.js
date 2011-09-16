'use strict';

module.exports = {
	__generic: function (t, a) {
		t = t.call;
		a.deep(t(this, this[1]), [1]);
	},
	"": function (t, a) {
		var x = {};
		t = t.call;
		a.deep(t([1,3,5,3,5], 6), [], "No result");
		a.deep(t([1,3,5,1,3,5,1], 1), [0, 3, 6], "Some results");
		a.deep(t([], x), [], "Empty array");
		a.deep(t([x,3,{},x,3,5,x], x), [0, 3, 6], "Search for object");
	}
};
