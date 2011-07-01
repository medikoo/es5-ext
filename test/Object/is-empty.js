'use strict';

module.exports = {
	"Empty": function (t, a) {
		t = t.call;
		a.equal(t({}), true);
	},
	"Not empty": function (t, a) {
		a.equal(t({1:1}), false);
	}
};
