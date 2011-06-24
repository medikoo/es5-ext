'use strict';

exports.__generic = {
	"As context": function (t, a) {
		a.equal(t.call(this, 4, 5).length, 5);
	},
	"As argument": function (t, a) {
		a.equal(t.call([1,2,3], 4, this, 5).length, 8);
	}
};
