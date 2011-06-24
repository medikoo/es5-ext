'use strict';

module.exports = {
	"Empty": function (t, a) {
		a.equal(t.call({}), true);
	},
	"Not empty": function (t, a) {
		a.equal(t.call({1:1}), false);
	}
};
