'use strict';

exports.__generic = {
	"As context": function (t, a) {
		t = t.call;
		a.equal(t(this, 4, 5).length, 5);
	},
	"As argument": function (t, a) {
		t = t.call;
		a.equal(t([1,2,3], 4, this, 5).length, 8);
	}
};
