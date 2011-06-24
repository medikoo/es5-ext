'use strict';

module.exports = {
	"Object is object": function (t, a) {
		a.equal(t({}), true);
	},
	"Null is not object": function (t, a) {
		a.equal(t(null), false);
	},
	"Primitive is not object": function (t, a) {
		a.equal(t('string'), false);
	},
	"Function is not object": function (t, a) {
		a.equal(t(function () {}), false);
	}
};
